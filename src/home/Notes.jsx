import React ,{useState} from 'react'
import { FaTrash } from 'react-icons/fa';
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote('');
    }
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div>
      <h1 className='mb-4 text-4xl font-bold'>Notes App</h1>

      <div>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write something here ..."
          className='h-20 p-2 bg-transparent border border-gray-300 rounded w-96'
        /><br/>
        <button onClick={addNote} className='p-2 rounded bg-home-secondary hover:bg-secondary-2 hover:text-white'>
          Save Note
        </button>
      </div>

      <ul className='mt-4 w-96'>
        {notes.map((note) => (
          <li key={note.id} className='flex items-center justify-between p-2 mb-2 border rounded bg-secondary-3'>
            <span >{note.text}</span>
            <button onClick={() => deleteNote(note.id)}className='p-1 pl-2 pr-2 bg-transparent border-2 border-yellow-600 rounded hover:text-red-600' >
             <FaTrash/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes