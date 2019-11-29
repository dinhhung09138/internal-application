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
        public static readonly string PARAMS_INVALID = "Params invalid";

        /// <summary>
        /// Context invalid.
        /// </summary>
        public static readonly string CONTEXT_INVALID = "Context invalid";

        /// <summary>
        /// Id of data not found.
        /// </summary>
        public static readonly string ID_NOT_FOUND = "ID of data not found";

        /// <summary>
        /// Data was updated by other user.
        /// </summary>
        public static readonly string DATA_UPDATED_BY_OTHERS = "This data is updated by other user. Please reload page before update information.";
    }
}
