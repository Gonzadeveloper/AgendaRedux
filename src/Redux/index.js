import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/users/index'


export default configureStore({
    reducer:{
        users
    }
})