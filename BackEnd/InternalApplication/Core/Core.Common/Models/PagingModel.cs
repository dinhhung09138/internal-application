namespace Core.Common.Models
{
    /// <summary>
    /// Paging model.
    /// </summary>
    public class PagingModel
    {
        /// <summary>
        /// Gets or sets page size.
        /// </summary>
        public int PageSize { get; set; }

        /// <summary>
        /// Gets or sets page index (Current page).
        /// </summary>
        public int PageIndex { get; set; }
    }
}
