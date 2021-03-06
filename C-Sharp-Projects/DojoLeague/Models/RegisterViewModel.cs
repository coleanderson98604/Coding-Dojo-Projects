using System.ComponentModel.DataAnnotations;
using DojoLeague.Models;

namespace DojoLeague.Models
{
    public class RegisterViewDojo : BaseEntity
    {
        [Required]
        [MinLength(3)]
        public string Name {get; set;}

        [Required]
        [MinLength(4)]
        public string Location {get; set;}

        [MinLength(10)]
        public string Information {get; set;}

    }
    public class RegisterViewNinja : BaseEntity
    {
        [Required]
        [MinLength(3)]
        public string name {get; set;}

        [Required]
        [Range(1,10)]
        public int level {get; set;}

        [MinLength(10)]
        public string Description {get; set;}

        public int Dojo_id {get; set;}
    }


}
/*
	Useful Annotations and Examples:

	[Required] - Makes a field required.
	[RegularExpression(@"[0-9]{0,}\.[0-9]{2}", ErrorMessage = "error Message")] - Put a REGEX string in here.
	[MinLength(100)] - Field must be at least 100 characters long.
	[MaxLength(1000)] - Field must be at most 1000 characters long.
	[Range(5,10)] - Field must be between 5 and 10 characters.
	[EmailAddress] - Field must contain an @ symbol, followed by a word and a period.
	[DataType(DataType.Password)] - Ensures that the field conforms to a specific DataType
*/