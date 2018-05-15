using System.ComponentModel.DataAnnotations;

namespace LostInWoods.Models
{
    public class RegisterViewModel : BaseEntity
    {
        [Required]
        [MinLength(1)]
        public string TrailName {get; set;}

        [Required]
        [MinLength(10)]
        public string Description {get; set;}

        [Required]
        [Range(0,15000)]
        public int TrailLength {get; set;}

        [Required]
        [Range(0,int.MaxValue)]
        public int Elevation {get; set;}

        [Required]
        [Range(-180,180)]
        public float Log {get; set;}

        [Required]
        [Range(-90,90)]
        public float Lat {get; set;}
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