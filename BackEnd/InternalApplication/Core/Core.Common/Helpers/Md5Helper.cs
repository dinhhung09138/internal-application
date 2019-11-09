namespace Core.Common.Helpers
{
    using System;
    using System.Security.Cryptography;
    using System.Text;

    /// <summary>
    /// MD5 helper functions.
    /// </summary>
    public static class Md5Helper
    {
        /// <summary>
        /// Encrypts the data.
        /// </summary>
        /// <param name="data">The message.</param>
        /// <returns>
        /// encrypted data.
        /// </returns>
        public static string EncryptData(string data)
        {
            return CommonMethodForEncryptData(data, "x2");
        }

        /// <summary>
        /// Encrypts the data.
        /// </summary>
        /// <param name="data">The message.</param>
        /// <param name="lockKey">The lock Key.</param>
        /// <returns>
        /// encrypted data.
        /// </returns>
        public static string EncryptData(string data, string lockKey)
        {
            return CommonMethodForEncryptData(data, lockKey);
        }

        /// <summary>
        /// Decrypts the data.
        /// </summary>
        /// <param name="data">The message.</param>
        /// <returns>
        /// decrypted data.
        /// </returns>
        public static string DecryptData(string data)
        {
            return CommonMethodForDecryptData(data, "x2");
        }

        /// <summary>
        /// Decrypts the data.
        /// </summary>
        /// <param name="data">The message.</param>
        /// <param name="lockKey">The lock Key.</param>
        /// <returns>
        /// decrypted data.
        /// </returns>
        public static string DecryptData(string data, string lockKey)
        {
            return CommonMethodForDecryptData(data, lockKey);
        }

        /// <summary>
        /// Common Method For Encrypts the data.
        /// </summary>
        /// <param name="data">The message.</param>
        /// <param name="lockKey">The lock Key.</param>
        /// <returns>
        /// encrypted data.
        /// </returns>
        private static string CommonMethodForEncryptData(string data, string lockKey)
        {
            byte[] results;
            var utf8 = new UTF8Encoding();
            using (var hashProvider = new MD5CryptoServiceProvider())
            {
                var tdesKey = hashProvider.ComputeHash(utf8.GetBytes(lockKey));
                using (var tdesAlgorithm = new TripleDESCryptoServiceProvider())
                {
                    tdesAlgorithm.Key = tdesKey;
                    tdesAlgorithm.Mode = CipherMode.ECB;
                    tdesAlgorithm.Padding = PaddingMode.PKCS7;
                    byte[] dataToEncrypt = utf8.GetBytes(data);
                    try
                    {
                        var encryptor = tdesAlgorithm.CreateEncryptor();
                        results = encryptor.TransformFinalBlock(dataToEncrypt, 0, dataToEncrypt.Length);
                    }
                    finally
                    {
                        tdesAlgorithm.Clear();
                        hashProvider.Clear();
                    }
                }
            }

            return Convert.ToBase64String(results);
        }

        /// <summary>
        /// Decrypts the data.
        /// </summary>
        /// <param name="data">The message.</param>
        /// <param name="lockKey">The lock Key.</param>
        /// <returns>
        /// decrypted data.
        /// </returns>
        private static string CommonMethodForDecryptData(string data, string lockKey)
        {
            byte[] results;
            var utf8 = new UTF8Encoding();
            using (var hashProvider = new MD5CryptoServiceProvider())
            {
                var tdesKey = hashProvider.ComputeHash(utf8.GetBytes(lockKey));
                using (var tdesAlgorithm = new TripleDESCryptoServiceProvider())
                {
                    tdesAlgorithm.Key = tdesKey;
                    tdesAlgorithm.Mode = CipherMode.ECB;
                    tdesAlgorithm.Padding = PaddingMode.PKCS7;
                    var dataToDecrypt = Convert.FromBase64String(data);
                    try
                    {
                        ICryptoTransform decryptor = tdesAlgorithm.CreateDecryptor();
                        results = decryptor.TransformFinalBlock(dataToDecrypt, 0, dataToDecrypt.Length);
                    }
                    finally
                    {
                        tdesAlgorithm.Clear();
                        hashProvider.Clear();
                    }
                }
            }

            return utf8.GetString(results);
        }
    }
}
