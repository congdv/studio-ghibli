import { put } from 'redux-saga/effects';

export const MovieTypes = {
  ALL_MOVIES: 'movie/ALL_MOVIES',
};

export const movieInitialState = {
  loaded: false,
};

export const movieReducer = (state = {}, action) => {
  switch (action.type) {
    case MovieTypes.ALL_MOVIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

function* fetchMovies() {
  try {
    const movies = yield fetch('https://ghibliapi.herokuapp.com/films').then((response) => response.json());
    yield put({ type: MovieTypes.ALL_MOVIES, payload: { movies, loaded: true } });
  } catch (error) {
    console.error(error);
  }
}

export default fetchMovies;
