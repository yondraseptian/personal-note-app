import React from "react";
import "../styles/style.css";
import { Input } from "./Elements/Input";
export const Header = ({handleSearch}) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <Input placeholder="Cari catatan..." onchange={e => handleSearch(e.target.value)} />
    </div>
  );
};
