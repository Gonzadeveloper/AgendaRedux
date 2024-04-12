import { configureStore } from '@reduxjs/toolkit';
// reducer
import usersReducer from './slices/users/index' //aca inportamos nuestra unica slice por ahora 

export default configureStore({
    reducer:{
        users: usersReducer,
    }
})