namespace Core.Common.Messages
{
    /// <summary>
    /// Common message class.
    /// </summary>
    public static class CommonMessage
    {
        /// <summary>
        /// Parameter invalid.
        /// </summary>
        public static readonly string ParameterInvalid = "Params invalid";

        /// <summary>
        /// Context invalid.
        /// </summary>
        public static readonly string ContextInvalid = "Context invalid";

        /// <summary>
        /// Id of data not found.
        /// </summary>
        public static readonly string IdNotFound = "ID of data not found";

        /// <summary>
        /// Data was updated by other user.
        /// </summary>
        public static readonly string DataUpdatedByOtherUser = "This data is updated by other user. Please reload page before update information.";
    }
}
