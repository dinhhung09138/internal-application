﻿// <autogenerated />
namespace BuildEntityModel.Models
{
    using BuildEntityModel.Enums;

    /// <summary>
    /// Column class.
    /// </summary>
    public class Column
    {
        public string ColumnName { get; set; }
        public bool Nullable { get; set; }
        public string DataType { get; set; }
        public int StringLength { get; set; }
        public int NumericPrecision { get; set; }
        public int NumericScale { get; set; }
        public SqlConstraintType ConstraintType { get; set; } = SqlConstraintType.None;
        public string ConstraintName { get; set; }
        public string ConstraintValue { get; set; }
    }
}
