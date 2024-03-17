import React from "react";
import "./NoteCard.css";
import DeleteIcon from "./delete-icon.png";
import axios from "axios";

const NoteCard = ({ _id, title, content, category, loadNotes }) => {
  const deleteNote = async () =>{
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${_id}`, {})
    alert(response.data.message)
    loadNotes();
    
  }
  return (
    <div className="note-card">
      <h2 className="note-card-title">{title}</h2>
      <p className="note-card-content">{content}</p>
      <span className="note-card-category">{category}</span>
      <img src={DeleteIcon} 
      alt="delete-icon" 
      onClick={deleteNote} 
      className="delete-icon" />
    </div>
  );
};

export default NoteCard;
