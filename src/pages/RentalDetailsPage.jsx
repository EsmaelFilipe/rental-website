import { useParams } from "react-router-dom";
import rentalsData from "../assets/data.json";

function RentalDetailsPage () {
    const {id} = useParams()
    // eslint-disable-next-line react/prop-types

    const foundRental = rentalsData.results.find((rental) => {
        return rental.id == id
    })

    return (
        <section>
             {foundRental? (
             <div>
             <h2>{foundRental.name}</h2>
             <img src={foundRental.picture_url.url} alt="" />
             <p>{foundRental.city}, {foundRental.country}</p>
             <p> Your Hosts: {foundRental.host_name}, since {foundRental.host_since} </p>
             <p>Property Type: {foundRental.property_type}, accomodates: {foundRental.accommodates} people</p>
             <h2>${foundRental.price}</h2>
             <p>{foundRental.space}</p>
             <p>House Rules: {foundRental.house_rules}</p>
             <p>Cancellation Policy: {foundRental.cancellation_policy}</p>
                </div>) : (<p>This property does not exist.</p>)
                }

        </section>
    )
}

export default RentalDetailsPage;