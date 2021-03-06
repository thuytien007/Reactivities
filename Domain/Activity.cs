using System;
using System.Collections.Generic;

namespace Domain
{
    public class Activity
    {
        //tạo ID không trùng, tránh id tăng dần bị giới hạn
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        //từ khóa virtual để sử dụng proxies - lazy loading
        public virtual ICollection<UserActivity> UserActivities {get; set;}
    }
}