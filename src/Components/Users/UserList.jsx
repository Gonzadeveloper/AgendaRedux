import React, { useEffect } from "react";
// redux
import { fetchAllUsers, removeUser, setSelectedCard, clearSelectedCard } from "../../Redux/slices/users";
import { useDispatch, useSelector } from "react-redux"; //estos hooks son necesarios para  trabajar con el store de Redux.
import { Link } from "react-router-dom";

const UserList = () =>{
    
    const { list: users } = useSelector(state => state.users); //con esa funcion tomamos solo parte del estado  de la store que es el slice de usuarios
    //aplica destrcuturar para traer solo la lista de usuarios

    const dispatch = useDispatch(); 

    //dispatch ejecuta la funcion que trajimos para  obtener los usuarios del store de Redux
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])

    const handleRemoveUser = (id) => {
        dispatch(removeUser(id));
    };

    const handleCardClick = (user) => {
      dispatch(clearSelectedCard()); // Limpiar la carta seleccionada anteriormente
      dispatch(setSelectedCard(user)); // Establecer la nueva carta seleccionada
      console.log(user)
    };

    return (
        <div className="container mt-4">
          <div className="row">
            {users.map((user, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card">
                  <button
                    className="btn btn-danger position-absolute top-0 end-0 m-2"
                    onClick={(e) => {
                      e.stopPropagation(); // Evita que el clic se propague al Link
                      handleRemoveUser(user.id); // Maneja el clic en el botón de cerrar
                    }}
                  >
                    X
                  </button >
                  <Link onClick={() => handleCardClick(user)} to={`/detail`} className="text-decoration-none text-reset"> 
                    <img src={user.avatar} alt="avatar" style={{ width:'100%'}} />
                    <div className="card-body">
                      <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
                      <p className="card-text">{user.email}</p>
                    </div>
                  </Link >
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
 
export default UserList;