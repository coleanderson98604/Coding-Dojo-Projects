using System.ComponentModel.DataAnnotations;

namespace LostInWoods.Models{
	public abstract class BaseEntity {}
	public class Trail : BaseEntity{
		public int id {get; set;}
		public string TrailName {get; set;}
		public string Description {get; set;}
		public int TrailLength {get; set;}
		public int Elevation {get; set;}
		public float Log {get; set;}
		public float Lat {get; set;}
	}
}
