﻿// <autogenerated />
namespace BuildEntityModel
{
    using System;
    using System.Data;
    using System.Data.SqlClient;
    using System.Text;
    using System.Collections.Generic;
    using BuildEntityModel.Models;
    using BuildEntityModel.Enums;
    using System.Linq;

    /// <summary>
    /// Database processing.
    /// </summary>
    public class DatabaseProcessing
    {

        private string ConnectionString = "Server=112.78.2.118;Database=chacd26d_trandinhhung;User Id=chacd26d_admin;Password=Hung@0919649242;";

        /// <summary>
        /// Get list table with columns information function
        /// </summary>
        /// <returns>List<Table></returns>
        public List<Table> GetTableInfor()
        {
            List<Table> listTable = new List<Table>();
            try
            {

                listTable = GetListTableFromDatabase();

                listTable = GetTablePropertiesFromDatabase(listTable);

            }
            catch (Exception ex)
            {
                Console.WriteLine($"GetTableInfor {ex.Message}");
            }
            return listTable;
        }

        /// <summary>
        /// Get list table name from database.
        /// </summary>
        /// <returns>List<Table></returns>
        private List<Table> GetListTableFromDatabase()
        {
            List<Table> listTableName = new List<Table>();
            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    try
                    {
                        connection.Open();

                        DataTable table = new DataTable();

                        SqlCommand cmd = new SqlCommand("SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES", connection);
                        cmd.CommandType = CommandType.Text;
                        SqlDataAdapter da = new SqlDataAdapter(cmd);

                        da.Fill(table);

                        for (int i = 0; i < table.Rows.Count; i++)
                        {
                            listTableName.Add(new Table() { TableName = table.Rows[i][0].ToString() });
                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"GetListTableFromDatabase {ex.Message}");
                    }
                    finally
                    {
                        if (connection.State != ConnectionState.Open)
                        {
                            connection.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return listTableName;
        }

        /// <summary>
        /// Get Column properties based on table name from database.
        /// Update data from the current list of tables.
        /// </summary>
        /// <param name="listTable">List of table name</param>
        /// <returns>List<Table></returns>
        private List<Table> GetTablePropertiesFromDatabase(List<Table> listTable)
        {
            try
            {
                using (SqlConnection connection = new SqlConnection(ConnectionString))
                {
                    try
                    {
                        connection.Open();
                        SqlCommand cmd = new SqlCommand("", connection);
                        cmd.CommandType = CommandType.Text;
                        SqlDataAdapter da = new SqlDataAdapter(cmd);
                        DataTable table = new DataTable();

                        DataSet ds = new DataSet();
                        foreach (var item in listTable)
                        {
                            cmd = new SqlCommand($"sp_help {item.TableName}", connection);
                            da = new SqlDataAdapter(cmd);
                            da.Fill(ds);

                            table = new DataTable();
                            table = ds.Tables["Table1"];

                            item.Columns = GetColumnInfo(item.TableName, ds.Tables["Table1"], ds.Tables["Table6"]);

                        }
                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine($"GetTablePropertiesFromDatabase {ex.Message}");
                    }
                    finally
                    {
                        if (connection.State != ConnectionState.Open)
                        {
                            connection.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return listTable;
        }

        /// <summary>
        /// Data getted from database and convert to column model object.
        /// </summary>
        /// <param name="tableName">Table name</param>
        /// <param name="columnTable">Columns table from database</param>
        /// <param name="constraintTable">Constraint table from database</param>
        /// <returns>List<Column></returns>
        private List<Column> GetColumnInfo(string tableName, DataTable columnTable, DataTable constraintTable)
        {
            List<Column> listColumn = new List<Column>();

            try
            {
                for (int i = 0; i < columnTable.Rows.Count; i++)
                {
                    Column col = new Column();
                    // Columnname
                    col.ColumnName = columnTable.Rows[i][0].ToString();
                    // Type
                    col.DataType = columnTable.Rows[i][1].ToString();
                    // Nullable
                    col.Nullable = columnTable.Rows[i][6].ToString() == "yes" ? true : false;

                    switch (col.DataType)
                    {
                        case "nvarchar":
                        case "varchar":
                            // Length
                            col.StringLength = int.Parse(columnTable.Rows[i][3].ToString());
                            break;
                        case "decimal":
                        case "numeric":
                            // Prec
                            col.NumericPrecision = int.Parse(columnTable.Rows[i][4].ToString());
                            // Scale
                            col.NumericScale = int.Parse(columnTable.Rows[i][5].ToString());
                            break;
                        default:
                            break;
                    }
                    listColumn.Add(col);
                }

                string columnName = string.Empty;
                string defaultValue = string.Empty;
                string constraintType = string.Empty;
                SqlConstraintType type = SqlConstraintType.None;


                for (int i = 0; i < constraintTable.Rows.Count; i++)
                {
                    columnName = string.Empty;
                    defaultValue = string.Empty;
                    // constrainttype
                    constraintType = constraintTable.Rows[i][0].ToString();
                    type = SqlConstraintType.None;

                    if (constraintType.Contains("DEFAULT on column"))
                    {
                        columnName = constraintType.Replace("DEFAULT on column", "").Trim();
                        type = SqlConstraintType.DefaultValue;
                        // constraint_keys
                        defaultValue = constraintTable.Rows[i][6].ToString().Replace("((","(").Replace("))",")");
                    }
                    else if (constraintType.Contains("PRIMARY KEY"))
                    {
                        // constraint_keys
                        columnName = constraintTable.Rows[i][6].ToString();
                        type = SqlConstraintType.PrimaryKey;
                    }
                    else if (constraintType.Contains("FOREIGN KEY"))
                    {
                        // constraint_keys
                        columnName = constraintTable.Rows[i][6].ToString();
                        type = SqlConstraintType.ForeignKey;
                    }

                    if(columnName.Length > 0)
                    {
                        var col = listColumn.FirstOrDefault(m => m.ColumnName == columnName);
                        if (col != null)
                        {
                            // constraint_name
                            col.ConstraintName = constraintTable.Rows[i][1].ToString();
                            col.ConstraintType = type;
                            col.ConstraintValue = defaultValue;
                        }
                        else
                        {
                            Console.WriteLine($"the column: '{columnName}' not found in the table '{tableName}'");
                        }
                    }
                    
                }
            }
            catch(Exception ex)
            {
                Console.WriteLine($"GetColumnInfo {ex.Message}");
            }
            return listColumn;
        }

    }
}