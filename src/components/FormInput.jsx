import React, { useState } from "react";
import { Input } from "./Elements/Input";
import { Button } from "./Elements/Button";

export const FormInput = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [remainingChars, setRemainingChars] = useState(50);

  const handleTitleChange = (e) => {
    const inputTitle = e.target.value;
    if (inputTitle.length <= 50) {
      setTitle(inputTitle);
      setRemainingChars(50 - inputTitle.length);
      return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim() === "" || body.trim() === "") {
      alert("Please fill in all fields.");
      return
    }
    const id = new Date().getTime();
    let currentDate = new Date().toLocaleString();
    const newNote = {
      id: id,
      title: title, 
      body: body, 
      archived: false,
      createdAt : currentDate
    };
    onAddNote(newNote);
    setTitle(title);
    setBody(body);
  };

  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <p className="note-input__title__char-limit">sisa karakter: {remainingChars}</p>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="ini adalah judul"
          name="title"
          value={title}
          onchange={handleTitleChange}
        />
        <textarea
          className="note-input__body"
          placeholder="tulisankan catatanmu disini"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <Button type="submit">Buat</Button>
      </form>
    </div>
  );
};
