import Base from './Base';

export default class MoviesAPI extends Base {
    list(params) {
        return this.apiClient.get(`movies`, {}, params );
    }

    // Remove from demo
    show(id, params) {
        return this.apiClient.get(`movies/${id}`, {}, params );
    }

    getCart(params) {
        if (process.env.BROWSER) {
            if (localStorage.movies) {
                return JSON.parse(localStorage.movies);
            }
        }

        return [];
    }

    addMovie(id) {
        if (process.env.BROWSER) {
            const movies  = localStorage.movies ? JSON.parse(localStorage.movies) : [];

            movies.push(id);
            localStorage.movies = JSON.stringify(movies);
        }
    }

    removeMovie(id) {
        if (process.env.BROWSER) {
            const movies  = localStorage.movies ? JSON.parse(localStorage.movies) : [];

            const newMovies = movies.filter( m => m !== id);
            localStorage.movies = JSON.stringify(newMovies);
        }
    }
}
