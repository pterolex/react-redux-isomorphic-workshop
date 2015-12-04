export default {
    formatMovie(movie) {
        return {
            id         : movie.imdbID,
            title      : movie.Title,
            pictureURL : movie.Poster,
            director   : movie.Director,
            plot       : movie.Plot,
            year       : movie.Year,
            language   : movie.Language,
            country    : movie.Country
        };
    }
};
