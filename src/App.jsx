import Navbar from './Components/Navbar/Navbar'
import UserList from'./Components/Users/UserList'
import './App.css'
// redux
import { Provider } from 'react-redux';
import store from './Redux';

function App() {


  return (
    <>
    <Provider store={store}>
      <Navbar/>
      <UserList/>
    </Provider>
    </>
  )
}

export default App
