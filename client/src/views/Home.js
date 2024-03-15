import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`);

    console.log(response.data.data);
    setNotes(response.data.data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {notes.map((note, index) => {
        return <div>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <p>{note.category}</p>
        </div>
      })}
    </div>
  );
};

export default Home;
