import { all } from 'redux-saga/effects';
import fetchMovies from './movies';

export default function* rootSaga() {
  yield all([fetchMovies()]);
}
