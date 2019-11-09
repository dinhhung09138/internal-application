namespace Core.Common.Models
{
    /// <summary>
    /// Selected item model.
    /// Normally, use for display data on combobox.
    /// </summary>
    public class SelectedItemModel
    {
        /// <summary>
        /// Gets or sets display text value.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Gets or sets value on selected item.
        /// </summary>
        public string Value { get; set; }
    }
}
