import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicSlice';

// const createQuiz = createAction('quizzes/createQuiz');
export const createQuiz = (quiz) => {
    return (dispatch, getState) => {
        dispatch(addQuiz(quiz));
        dispatch(addQuizId({ quizId: quiz.id , topicId: quiz.topicId }));
    }
} 

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    },
    // extraReducers: {
    //     [createQuiz]: (state, action) => {
    //         addQuiz(action.payload);
    //         addQuizId(quiz.id);
    //     }
    // }
});

export const { addQuiz } = quizzesSlice.actions;
export const quizzesSelector = state => state.quizzes.quizzes;
export default quizzesSlice.reducer;