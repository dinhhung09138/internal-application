namespace Core.Common.Enums
{
    /// <summary>
    /// Response status code enum.
    /// </summary>
    public enum ResponseStatus
    {
        /// <summary>
        /// Response successful.
        /// </summary>
        Success = 1,

        /// <summary>
        /// Error response.
        /// </summary>
        Error = -1,

        /// <summary>
        /// Warning response.
        /// </summary>
        Warning = 0,
    }
}
