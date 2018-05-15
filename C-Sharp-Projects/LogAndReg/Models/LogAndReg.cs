using System.ComponentModel.DataAnnotations;

namespace LogAndReg.Models{
	public class User{

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
	[Required]
	[RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters")]
	[MinLength(2)]
	public string FName{get; set;}
	
	[Required]
	[RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Only letters")]
	[MinLength(2)]
	public string LName{get; set;}

	[Required]
	[DataType(DataType.EmailAddress)]
	[RegularExpression(@"[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", ErrorMessage = "Must be a valid email")]
	public string Email{get; set;}

	[Required]
	[MinLength(8)]
	[DataType(DataType.Password)]
	public string Password{get; set;}



	}
}
