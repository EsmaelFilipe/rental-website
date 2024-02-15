import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import RentalDetailsPage from './pages/RentalDetailsPage';
import RentalsListPage from './pages/RentalsListPage';
import rentals from "./assets/data.json";

function App() {

  return (

      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/rentals/:id' element={<RentalDetailsPage rentals={rentals}/>} />
          <Route path='/rentals/' element={<RentalsListPage/>}/>
        </Routes>
      </div>
  )
}

export default App
