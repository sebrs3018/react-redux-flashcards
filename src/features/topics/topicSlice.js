import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = {...action.payload, quizIds: []};  
        },
        addQuizId: (state, action) => {
            const { quizId, topicId } = action.payload;
            console.log(state.topics[topicId]);
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});
  
export const selectTopics = state => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;