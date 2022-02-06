import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;
        }
    }
});

export const { addCard } = cardsSlice.actions; 
export const cardsSelector = state => state.cards.cards;
export default cardsSlice.reducer;