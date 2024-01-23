import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Journal = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim() !== '') {
      setJournalEntries([...journalEntries, { id: Date.now(), text: newEntry }]);
      setNewEntry('');
    }
  };

  const deleteEntry = (id) => {
    setJournalEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  return (
    <div>
      <h1 className='mb-4 text-4xl font-bold'>Journal App</h1>

      <div className='w-full h-screen p-4'>
        <div
          contentEditable
          role='textbox'
          aria-multiline='true'
          className='w-5/6 h-screen p-2 border border-gray-300 rounded'
          onInput={(e) => setNewEntry(e.target.textContent)}
        />
      </div>

      <button onClick={addEntry} className='p-2 mt-2 text-white bg-blue-500 rounded'>
        Save Entry
      </button>

      <ul className='mt-4'>
        {journalEntries.map((entry) => (
          <li key={entry.id} className='flex items-center justify-between p-2 mb-2 border'>
            <span>{entry.text}</span>
            <button onClick={() => deleteEntry(entry.id)} >
            <FaTrash/>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;
