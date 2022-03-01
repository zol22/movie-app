import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = []

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state,action) => {
        state = action.payload;
    },
  },
  extraReducers: {
        [HYDRATE]: (state, action) => { 
            state = action.payload.movie
        }
  }
});

export const { addMovie} = movieSlice.actions;
export const selectMovie = (state) => state.movie


export default movieSlice.reducer;