//---------------------------------Day-05 QNo-01----------------------------------------
//https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


//--------------------------------Class - Movie-------------------------------------

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”    

//------------------------------------------------------------------------------------------------
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getPG(movies) {
      return movies.filter((movie) => {
        return movie.rating.startsWith("PG");
      });
    }
  }
  
  let movie1 = new Movie("Avatar", "20th Century Fox", "PG13");
  let movie2 = new Movie("The Dark Knight", "Warner Bros. Pictures", "PG13");
  let movie3 = new Movie("Joker", "Warner Bros. Pictures", "R");
  let movie4 = new Movie("The Martian", "Scott Free Productions", "PG13");
  let movie5 = new Movie("Catch Me If You Can", "Amblin Entertainment", "PG13");
  let movie6 = new Movie("IT", "New Line Cinema", "R");
  let movie7 = new Movie("Avatar", "20th Century Fox", "PG13");
  let movie8 = new Movie("Casino Royale", "Eon Productions", "PG13");
  
  console.log(
    movie1.getPG([movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8])
  );
  console.log(movie8);

//------------------------------------------------------------------------------------------------