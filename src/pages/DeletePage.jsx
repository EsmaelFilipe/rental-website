import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../assets/data.json';

function EditProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the project by id from the local data
    const rental = data.results.find(rental => rental.id === parseInt(id));
    if (rental) {
      setTitle(rental.title);
      setDescription(rental.description);
    }
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    
    const updatedRentals = data.results.map(rental => {
      if (rental.id === parseInt(id)) {
        return { ...rental, title, description };
      }
      return rental;
    });

    // Update the local JSON file
    // You need to implement a way to save this data to your local JSON file
    // This could be done using Node.js on the server or using browser APIs such as localStorage
    // Here, we're assuming localStorage for simplicity
    localStorage.setItem('data', JSON.stringify({results: updatedRentals}));

    navigate("/rentals");
  };

  const deleteProject = () => {
    const updatedRentals = data.results.filter(rental => rental.id !== parseInt(id));
    
    // Update the local JSON file
    localStorage.setItem('data', JSON.stringify({results: updatedRentals}));

    navigate("/rentals");
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Rental</button>
      </form>
      <button onClick={deleteProject}>Delete Rental</button>
    </article>
  );
}

export default EditProjectPage;