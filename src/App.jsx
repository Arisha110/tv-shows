import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ShowDetails from './components/ShowDetails'

function App() {

  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/show/:id' element={<ShowDetails/>}></Route>
    </Routes>
   </div>
  )
}

export default App
