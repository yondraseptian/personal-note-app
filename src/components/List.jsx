import React from "react";
import "../styles/style.css";
import { CardNotes } from "./Elements/CardNotes";
export const List = ({ data, setData}) => {
  const handleDelete = (id) => {
    const updatedData = data.filter((note) => note.id !== id);
    setData(updatedData);
  };

  const handleArchive = (id) => {
    const UpdatedData = data.map(item => {
      if (item.id === id) {
        return { ...item, archived: !item.archived };
      }
      return item;
    });
    setData(UpdatedData);
  };
  // const hasArchived = data.some(item => item.archive);
  const ActiveList = data.filter((item) => !item.archived);
  const ArchivedList = data.filter((item) => item.archived);
  return (
    <>
      <h2>{ActiveList ? "Aktif" : "Arsip"}</h2>
      {ActiveList.length === 0 && (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
      <div className="notes-list">
        {ActiveList.map((note) => (
          <CardNotes
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            date={new Date(note.createdAt).toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            archived={() => handleArchive(note.id)}
            onDelete={() => handleDelete(note.id)}
            children="Arsipkan"
          />
        ))}
      </div>
      <h2>{ArchivedList ? "Arsip" : "Aktif"}</h2>
      {ArchivedList.length === 0 && (
        <p className="notes-list__empty-message">Tidak Ada Catatan</p>
      )}
      <div className="notes-list">
        {ArchivedList.map((note) => (
          <CardNotes
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            date={new Date(note.createdAt).toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            archived={() => handleArchive(note.id)}
            onDelete={() => handleDelete(note.id)}
            children="Pindahkan"
          />
        ))}
      </div>
    </>
  );
};
