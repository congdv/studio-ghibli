import { combineReducers } from 'redux';

import { movieReducer } from './movies';

export const rootReducers = combineReducers({ movie: movieReducer });
