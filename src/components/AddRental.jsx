import { useState } from "react";

function AddRental (props) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [price, setPrice] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const newRental = {name, id, city, country, price};
        
        props.addRental(newRental);
       // reset the state 
          setName("");
          setId("");
          setCity("");
          setCountry("");
          setPrice("");
    }

    return (
      <div  className="flex flex-col justify-center">
        <div>
          <div className="container">
            <h2 className="mb-6 font-medium">Add Rental</h2>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="title"  value={name} name="title" type="text" onChange={(e)=> setName(e.target.value)}/>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Id" value={id} name="description" type="text" required onChange={(e)=> setId(e.target.value)} />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="city" value={city} name="city" type="text" required onChange={(e)=> setCity(e.target.value)}/>
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="country" value={country} name="country" type="text" required onChange={(e)=> setCountry(e.target.value)} />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="price" value={price} name="price" type="text" required onChange={(e)=> setPrice(e.target.value)} />
              </div>
              <div>
                <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Add Rental</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default AddRental;
