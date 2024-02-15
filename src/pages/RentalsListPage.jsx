/* eslint-disable react/jsx-key */
import rentalsData from "../assets/data.json";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RentalsListPage () {    

    return (
        <div className="page-container">
            <h2 className="list-title">Avaliable Rentals</h2>
            <Navbar/>
            {rentalsData.results.map((rental) => {
            return (
                
                <div className="rental-container" key={rental.id}>
                <img className="rental-image" src={rental.picture_url.url} alt="" />
                <Link to={`/rentals/${rental.id}`}>
                <h3>{rental.name}</h3>  
                </Link>
                <h3>{rental.city}, {rental.country}</h3>
                <h3>${rental.price}</h3>
                </div>
            )
            })}
            <Footer />
        </div>

    )
}

export default RentalsListPage