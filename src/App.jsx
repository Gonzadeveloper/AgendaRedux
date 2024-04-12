import Navbar from './Components/Navbar/Navbar'
import UserList from'./Components/Users/UserList'
import './App.css'
// redux
import { Provider } from 'react-redux';
import store from './Redux';
//routes
import {Routes, Route } from 'react-router-dom'
import Detail from './Components/Detail/Detail';

function App() {
  return (
    <div>
      <Provider store={store}>
          <Navbar/>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/Detail" element={<Detail/>}/>
        </Routes>
      </Provider>
      </div>
  )
}

export default App
