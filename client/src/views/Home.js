import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NoteCard from "../components/NoteCard/NoteCard";

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
<h1 className="app-header">Home</h1>
{
  notes.map((note, index)=>{
    const{_id, title, content, category}=note;
return (<NoteCard key={_id}  title={title} content={content} category={category}/>)
  })
}
 
  
  </div>);
};

export default Home;
