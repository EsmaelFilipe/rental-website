import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { createContext, useContext, useState } from 'react';
import rentalsData from "../assets/data.json"

const RentalContext = createContext();

export const useRentalContext = () => useContext(RentalContext);

export const RentalProvider = ({ children }) => {
  const [rentals, setRentals] = useState(rentalsData.results);

  const deleteRental = (id) => {
    const updatedRentals = rentals.filter(rental => rental.id !== parseInt(id));
    setRentals(updatedRentals);
    localStorage.setItem('rentalsData', JSON.stringify({ results: updatedRentals }));
  };

  return (
    <RentalContext.Provider value={{ rentals, deleteRental }}>
      {children}
    </RentalContext.Provider>
  );
};

RentalProvider.propTypes = {
  children: PropTypes.node // Validate 'children' prop to be a React node
};

export default RentalProvider;
