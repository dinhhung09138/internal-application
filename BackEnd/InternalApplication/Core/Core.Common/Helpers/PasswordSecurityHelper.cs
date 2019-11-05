namespace Core.Common.Helpers
{
    using System;
    using System.Security.Cryptography;
    using System.Text;

    /// <summary>
    /// Class PasswordSecurity.
    /// </summary>
    public static class PasswordSecurityHelper
    {

        /// <summary>
        /// The alg.
        /// </summary>
        private const string Alg = "HmacSHA256";

        /// <summary>
        /// The salt.
        /// </summary>
        private const string Salt = "rz8LuOtFBXphj9WQfvFh";

        /// <summary>
        /// Returns a hashed password + salt, to be used in generating a token.
        /// </summary>
        /// <param name="password">string - user's password.</param>
        /// <returns>
        /// string - hashed password.
        /// </returns>
        public static string GetHashedPassword(string password)
        {
            string key = string.Join(":", password, Salt);

            using (HMAC hmac = HMAC.Create(Alg))
            {
                // Hash the key.
                hmac.Key = Encoding.UTF8.GetBytes(Salt);
                hmac.ComputeHash(Encoding.UTF8.GetBytes(key));

                StringBuilder builder = new StringBuilder();
                foreach (byte num in hmac.Hash)
                {
                    builder.AppendFormat("{0:X2}", num);
                }

                var convertBuilder = Encoding.UTF8.GetBytes(builder.ToString());

                return Convert.ToBase64String(convertBuilder);
            }
        }
    }
}
