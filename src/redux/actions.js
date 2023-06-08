// actions.js

import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./actionsType";


// Action Creators
export const fetchData = () => ({
  type: FETCH_DATA,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});
