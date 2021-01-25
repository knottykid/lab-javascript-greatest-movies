// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayOfMovies) {
  const directors = arrayOfMovies.map(function (element) {
    return element.director;
  });
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  let arrayOfDirectors = arrayOfMovies.map(function (movies) {
    return movies.director;
  });
  return arrayOfDirectors.filter(function (directorName, idx) {
    return arrayOfDirectors.indexOf(directorName) === idx;
  });
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  let arrayOfDrama = 0;
  arrayOfMovies.filter(function (element) {
    if (
      element.director === "Steven Spielberg" &&
      element.genre.includes("Drama")
    ) {
      arrayOfDrama += 1;
    }
  });
  return arrayOfDrama;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfAverage) {
  if (arrayOfAverage.length === 0) {
    return 0;
  }
  let sum = arrayOfAverage.reduce(function (acc, movie) {
    if (!movie.rate) {
      return acc;
    }
    return acc + movie.rate;
  }, 0);

  const rateOfMovies = sum / arrayOfAverage.length;
  const newAverage = rateOfMovies.toFixed(2);
  return parseFloat(newAverage);
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayAvgRateDrama) {
  let dramatica = 0;
  let dramaQueen = arrayAvgRateDrama.reduce(function (acc, movie) {
    if (!movie.genre.includes("Drama")) {
      return acc;
    }
    if (movie.genre.includes("Drama")) {
      dramatica += 1;
      return acc + movie.rate;
    }
  }, 0);
  if (dramaQueen === 0) {
    return 0;
  }

  return parseFloat((dramaQueen / dramatica).toFixed(2));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfYear) {
  let yearOfThe = arrayOfYear
    .map(function (element) {
      return element;
    })
    .sort(function (value1, value2) {
      if (value1.year < value2.year) {
        return -1;
      } else if (value1.year > value2.year) {
        return 1;
      } else if (value1.year === value2.year) {
        return value1.title.localeCompare(value2.title);
      }
    });
  return yearOfThe;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayAlpha) {
  const alphabeticOrder = arrayAlpha.map(function (element) {
    return element.title;
  });
  return alphabeticOrder.sort().slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayTime) {
  let timeFormat = arrayTime.map(function (element) {
    return element.duration;
  });
  return timeFormat;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arrayOfMovies) {}
