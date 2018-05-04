using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            IEnumerable<Artist> MountVernon = Artists.Where(artist => artist.Hometown == "Mount Vernon");

            //Who is the youngest artist in our collection of artists?
            IEnumerable<Artist> YoungOne = Artists.Where(artist => artist.Age == Artists.Min(age => age.Age));
            //Display all artists with 'William' somewhere in their real name
            IEnumerable<Artist> Williams = Artists.Where(artist => artist.RealName.Contains("William"));
            //Display the 3 oldest artist from Atlanta
            IEnumerable<Artist> OldiesAtlanta = Artists.Where(artist => artist.Hometown == "Atlanta" ).OrderBy(age => age.Age).Take(3);
            //Display all groups with names less than 8 characters in length
            IEnumerable<Group> GroupsWithLessThan8 = Groups.Where( groups => groups.GroupName.Length < 8);
            //(Optional) Display the Group Name of all groups that have members that are not from New York City
            var NYsucks = Groups.Join(Artists, groups => groups.Id, artist => artist.GroupId, (groups, artist) => 
            {
            if(artist.Hometown != "New York City"){
                return groups.GroupName;
            }
            else
            {
                return null;
            }
            }).Distinct();
            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
        }
    }
}
