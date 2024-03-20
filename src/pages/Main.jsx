import React, { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import '../styles/style.css'
import { List } from '../components/List'
import { getInitialData } from '../utils'
import { FormInput } from '../components/FormInput'


export const Main = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const handleaddNote = (newNote) => {
    setData([...data, newNote]);
  };
  useEffect(() => {
    const initialData = async () => {
      try {
        const data = await getInitialData()
        setData(data)
      } catch (error) {
        setError(error)
      }
    }
    initialData()
  },[])
  const handleSearch = (term) => {
    setSearchTerm(term)
  }
  const filteredNotes = data.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
        <Header handleSearch={handleSearch}/>
        <div className='note-app__body'>
        <FormInput onAddNote={handleaddNote} />
        <List data={filteredNotes} setData={setData}/>
        </div>
    </div>
  )
}
