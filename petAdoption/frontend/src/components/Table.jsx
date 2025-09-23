import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [pets, setpets] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPets = async () => {
      const response = await axios.get("http://localhost:3000/");
      setpets(response.data.pets);
    };
    fetchPets();
  }, []);

  return (
    <div className="main-table">
      <div>
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Type</th>
              <th>Breed</th>
              <th>Owner</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id}>
                <td>{pet.petName}</td>
                <td>{pet.petType}</td>
                <td>{pet.breed}</td>
                <td>{pet.userName}</td>
                <td>{pet.userEmail}</td>
                <td>{pet.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn"
          onClick={() => {
            navigate("/");
          }}
        >
          GoBack
        </button>
      </div>
    </div>
  );
};

export default Table;
