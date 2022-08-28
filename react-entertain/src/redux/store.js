import {configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import videoReducer from './videoSlice'
import videouploadReducer from './updateSlice'
import videolistReducer from './listSlice'

export const store = configureStore({
    reducer:{
        user : userReducer,
        uservideo : videoReducer,
        uservideoupdate : videouploadReducer,
        uservideolist : videolistReducer
    }
});