using System.ComponentModel.DataAnnotations.Schema;

namespace BackForm.Models
{
    [Table("tb_form")]
    public class Form
    {
        [Column("id")]
        public long Id { get; set; }
        [Column("name_form")]
        public string NameForm { get; set; }
        [Column("description_form")]
        public string DescriptionForm { get; set; }
        [Column("config_form")]
        public string ConfigForm { get; set; }
        [Column("state")]
        public bool State { get; set; }
        [Column("created_date")]
        public DateTime CreatedDate { get; set; }
        [Column("updated_date")]
        public DateTime UpdatedDate { get; set; }

    }
}
