// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let newArr = moviesArray.map((eachDirector) => {
      return eachDirector.director;
    });
    return newArr;
  }
  
  // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
  function howManyMovies(moviesArray) {
    let moviesSteven = 0;
    let moviesDrama = moviesArray.filter((eachMovie) => {
      if (
        eachMovie.director === "Steven Spielberg" &&
        eachMovie.genre === "Drama"
      ) {
        moviesSteven++;
      }
    });
    return moviesSteven;
  }
  
  // Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    let sumScore = moviesArray.reduce((acc, eachMovie) => {
      if (eachMovie.score === undefined) {
        return acc;
      } else {
        return acc + eachMovie.score;
      }
    }, 0);
  
    let average = sumScore / moviesArray.length;
    return average.toFixed(2);
  }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    let sumScore = moviesArray.reduce((acc, eachMovie) => {
      if (eachMovie.score === undefined) {
        return acc;
      } else if (eachMovie.genre === "Drama") {
        return acc + eachMovie.score;
      } else {
        return 0;
      }
    }, 0);
    let average = sumScore / eachMovie.length;
  }
  
  // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
  function orderByYear(moviesArray) {
    let newArr = structuredClone(moviesArray);
    newArr = moviesArray.sort((elem2, elem1) => {
      if (elem2.year > elem1.year) {
        return -1;
      } else if (elem2.year < elem1.year) {
        return 1;
      } else {
        return 0;
      }
    });
    return newArr;
  }
  
  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(moviesArray) {
    let newArr = structuredClone(moviesArray);
    newArr = moviesArray.sort((elem2, elem1) => {
      if (elem2.title > elem1.title) {
        return 1;
      } else if (elem2.title < elem1.title) {
        return -1;
      } else {
        return 0;
      }
    });
    return newArr.slice(0, 20);
  }
  
  // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
  function turnHoursToMinutes(moviesArray) {}
  
  // BONUS - Iteration 8: Best yearly score average - Best yearly score average
  function bestYearAvg(moviesArray) {}
  