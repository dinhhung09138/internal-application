﻿// <autogenerated />
namespace BuildEntityModel.File
{
    using System.Threading.Tasks;

    /// <summary>
    /// IFile interface.
    /// </summary>
    public interface IFile
    {
        /// <summary>
        /// Create file. Return true if success, false if fail.
        /// </summary>
        /// <param name="fileName">File name.</param>
        /// <param name="content">file content.</param>
        /// <returns>true/false</returns>
        Task CreateFile(string fileName, string content);
    }

}
