import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const userSlice = createSlice({ // al estar exportando esta variable queda visible para fetchAllUsers u otro componente que este fuera de este componente  
    name: "users",
    initialState: {
        list: [],
    },
    reducers: {
        //setUserList va a setear el estado de list 
        setUserList: (state, action) => { // state (es nuestro estado de arriba vacio), y una accion que tiene la propiedad payload (setUserList es nuestra action)
            state.list = action.payload;
        },
        removeUser: (state, action) => {
            state.list = state.list.filter(user => user.id !== action.payload);
        },
        // Nuevo reducer para establecer la carta seleccionada
        setSelectedCard(state, action) {
            state.selectedCard = action.payload;
        },
        // Nuevo reducer para limpiar la carta seleccionada
        clearSelectedCard(state) {
            state.selectedCard = null;
        },
    }
});

export const { setUserList, removeUser, setSelectedCard, clearSelectedCard } = userSlice.actions;
//aca estamos exportando las actions 

export default  userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => { // pasamos por parametro el dispatch porque son quienes se encargan de ejecutar a al action 

    axios
    .get('https://reqres.in/api/users?per_page=12')
    .then((response) => {
        dispatch(setUserList(response.data.data)); //  con setUserList le damos la informacion al estado inicial, si no hubieramos pasado por parametro arriba el dispatch no hubieramos podido ejecutar la action 
    })
    .catch((error) => console.log(error));
};