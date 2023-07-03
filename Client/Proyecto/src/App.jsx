import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [usuarioData, setUsuarioData] = useState([]);

const api =  axios.create({
    baseURL: "http://localhost:5000"
  })
/* Codigo que consulta la Api 
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await api.get('/api');
      const datos = res.data
      setBackendData(datos);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);
*/

// Nuevo codigo
const fethUsuarios = async () =>
{
  try{
    const res = await api.get('/usuarios');
    const data = res.data.data;
    console.log(res.data.data);
    setUsuarioData(data);
  }catch (error){
    console.log(error)
  }
}
useEffect(() => {
  fethUsuarios();
}, []);

/*Codigo que ya funciona en el return cuando uso arrays
 
{console.log(backendData)}
  {backendData.users ? (
    backendData.users.map((user, id) => (
      <p key={id}>{user}</p>
    ))
  ) : (
    <p>Loading...</p>
  )}
*/
return (
  <React.Fragment>
    {console.log(usuarioData)}
    {usuarioData.length ? (
      usuarioData.map((item,id) => (
        <p key={id}>Bienvenido: {item.nombre}, {item.apellido}. Tu edad es: {item.edad}. Y tu genero es: {item.sexo}</p>
      ))
    ): (
      <p>No se han cargado los datos correctamente</p>
    )}
  </React.Fragment>
);
}

export default App;
