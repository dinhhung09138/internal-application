﻿namespace Core.Common.Extensions
{
    /// <summary>
    /// File extension.
    /// </summary>
    public static class FileExtension
    {
        /// <summary>
        /// Check image file.
        /// </summary>
        /// <param name="source">file name.</param>
        /// <returns>true/false.</returns>
        public static bool HasImageExtension(this string source)
        {
            if (string.IsNullOrEmpty(source))
            {
                return false;
            }

            source = source.ToLower();
            return source.EndsWith(".png")
                    || source.EndsWith(".jpg")
                    || source.EndsWith(".jpeg")
                    || source.Contains("image/png")
                    || source.Contains("image/jpg")
                    || source.Contains("image/jpeg");
        }

        /// <summary>
        /// Check video file.
        /// </summary>
        /// <param name="source">File name.</param>
        /// <returns>true/false.</returns>
        public static bool HasVideoExtension(this string source)
        {
            if (string.IsNullOrEmpty(source))
            {
                return false;
            }

            source = source.ToLower();
            return source.Contains(".mov")
                    || source.Contains(".mp4")
                    || source.Contains("video");
        }

        /// <summary>
        /// Check pdf extension files.
        /// </summary>
        /// <param name="source">Source file name.</param>
        /// <returns>true/false.</returns>
        public static bool HasPdfExtension(this string source)
        {
            if (string.IsNullOrEmpty(source))
            {
                return false;
            }

            source = source.ToLower();
            return source.Contains("application/pdf");
        }

        /// <summary>
        /// Check file extension method.
        /// </summary>
        /// <param name="source">Source file name.</param>
        /// <returns>true/false.</returns>
        public static bool HasFileExtension(this string source)
        {
            return !source.HasImageExtension() && !source.HasVideoExtension();
        }
    }
}
