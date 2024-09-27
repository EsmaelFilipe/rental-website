import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import RentalDetailsPage from './pages/RentalDetailsPage';
import RentalsListPage from './pages/RentalsListPage';
import rentals from "./assets/data.json";
import ErrorPage from './pages/errorPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import EditProjectPage from './pages/DeletePage';
import ContactPage from './pages/ContactPage';

function App() {

  return (

      <div>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/rentals/:id' element={<RentalDetailsPage rentals={rentals}/>} />
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path='/rentals/' element={<RentalsListPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/edit' element={<EditProjectPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          
        </Routes>
      </div>
  )
}

export default App
