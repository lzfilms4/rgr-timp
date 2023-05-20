import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchPersons = createAsyncThunk(
  // запрос
  'persons/fetchPersons',
  async (persons, thunkAPI) => {
    const { data } = await axios.get('https://bright-wasp-long-johns.cyclic.app/person/findall');
    return data;
  },
);

const initialState = {
  persons: [],
};

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPersons.fulfilled, (state, action) => {
      state.persons = action.payload;
    });
  },
});

export default personsSlice.reducer;
