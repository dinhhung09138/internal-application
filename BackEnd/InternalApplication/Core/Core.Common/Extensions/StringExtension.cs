﻿namespace Core.Common.Extensions
{
    using System;
    using System.Text;
    using System.Text.RegularExpressions;
    using Newtonsoft.Json;

    /// <summary>
    /// String extension.
    /// </summary>
    public static class StringExtension
    {
        /// <summary>
        /// Conver string to base64.
        /// </summary>
        /// <param name="input">Input value.</param>
        /// <returns>base64 string.</returns>
        public static string ToBase64(this string input)
        {
            var bytes = Encoding.UTF8.GetBytes(input);
            return Convert.ToBase64String(bytes);
        }

        /// <summary>
        /// Revert base64 string to string.
        /// </summary>
        /// <param name="input">Base64 string.</param>
        /// <returns>String value.</returns>
        public static string FromBase64(this string input)
        {
            var bytes = Convert.FromBase64String(input);
            return Encoding.UTF8.GetString(bytes);
        }

        /// <summary>
        /// Get substring from input string.
        /// </summary>
        /// <param name="source">Source value.</param>
        /// <param name="length">Length of string you want to get.</param>
        /// <returns>String value.</returns>
        public static string Truncate(this string source, int length)
        {
            if (string.IsNullOrEmpty(source))
            {
                return string.Empty;
            }

            if (source.Length > length)
            {
                source = source.Trim().Substring(0, length);
            }

            return source;
        }

        /// <summary>
        /// Format html text to plain text.
        /// </summary>
        /// <param name="htmlString">Html source text.</param>
        /// <returns>plain text.</returns>
        public static string ToPlainTextFromHtml(this string htmlString)
        {
            var textWithoutTags = Regex.Replace(htmlString, "<[^>]*>", "\n");
            return textWithoutTags;
        }

        /// <summary>
        /// Conver json to text.
        /// </summary>
        /// <param name="value">json object.</param>
        /// <returns>string value.</returns>
        public static string ToJson(this object value)
        {
            var s = JsonConvert.SerializeObject(value, Formatting.Indented, new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore,
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            });

            return s;
        }
    }
}
