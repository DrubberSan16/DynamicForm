using System.ComponentModel.DataAnnotations.Schema;

namespace BackForm.Models
{
    [Table("tb_data_form")]
    public class DataForm
    {
        [Column("id")]
        public long Id { get; set; }
        [Column("id_form")]
        public long IdForm { get; set; }
        [Column("data_form")]
        public string DataFrm { get; set; }
        [Column("state")]
        public bool State { get; set; }
        [Column("created_date")]
        public DateTime CreatedDate { get; set; }
        [Column("updated_date")]
        public DateTime UpdatedDate { get; set; }

    }
}
