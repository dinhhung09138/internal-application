namespace Core.Common.Extensions
{
    using System;

    /// <summary>
    /// DateTime extension.
    /// </summary>
    public static class DateTimeExtension
    {
        /// <summary>
        /// Return the bigin time of the day.
        /// </summary>
        /// <param name="date">date value.</param>
        /// <returns>DateTime.</returns>
        public static DateTime BeginOfDay(this DateTime date)
        {
            return new DateTime(date.Year, date.Month, date.Day, 0, 0, 0);
        }

        /// <summary>
        /// Return the end time of the day.
        /// </summary>
        /// <param name="date">date value.</param>
        /// <returns>DateTime.</returns>
        public static DateTime EndOfDay(this DateTime date)
        {
            return new DateTime(date.Year, date.Month, date.Day, 23, 59, 59);
        }

        /// <summary>
        /// Compare two datetime.
        /// </summary>
        /// <param name="sourceDate">Source date time value.</param>
        /// <param name="compareDate">Compare to date time value.</param>
        /// <param name="compareTime">true: compare day and time, false: only compare day.</param>
        /// <returns>1: source is larger, 0: equal, -1: source is smaller.</returns>
        public static short Compare(this DateTime sourceDate, DateTime compareDate, bool compareTime = true)
        {
            if (sourceDate.Year > compareDate.Year)
            {
                return 1;
            }

            if (sourceDate.Year < compareDate.Year)
            {
                return -1;
            }

            if (sourceDate.Month > compareDate.Month)
            {
                return 1;
            }

            if (sourceDate.Month < compareDate.Month)
            {
                return -1;
            }

            if (sourceDate.Day > compareDate.Day)
            {
                return 1;
            }

            if (sourceDate.Day < compareDate.Day)
            {
                return -1;
            }

            if (compareTime)
            {
                if (sourceDate.Hour > compareDate.Hour)
                {
                    return 1;
                }

                if (sourceDate.Hour < compareDate.Hour)
                {
                    return -1;
                }

                if (sourceDate.Minute > compareDate.Minute)
                {
                    return 1;
                }

                if (sourceDate.Minute < compareDate.Minute)
                {
                    return -1;
                }

                if (sourceDate.Second > compareDate.Second)
                {
                    return 1;
                }

                if (sourceDate.Second < compareDate.Second)
                {
                    return -1;
                }
            }

            return 0;
        }
    }
}
