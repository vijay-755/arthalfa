import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [uniqueWords, setUniqueWords] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchStr, setSearchStr] = useState('');
  const [replaceStr, setReplaceStr] = useState('');

  // Text input handler
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // Function to count unique words
  const calculateUniqueWords = (inputText) => {
    const words = inputText.toLowerCase().match(/\b\w+\b/g);
    const uniqueWordSet = new Set(words);
    return uniqueWordSet.size;
  };

  // Function to count characters excluding spaces and punctuation
  const calculateCharCount = (inputText) => {
    const chars = inputText.replace(/[^a-zA-Z0-9]/g, '');
    return chars.length;
  };

  // UseEffect to update stats in real-time as text changes
  useEffect(() => {
    setUniqueWords(calculateUniqueWords(text));
    setCharCount(calculateCharCount(text));
  }, [text]);

  // Function to handle the Replace All button click
  const handleReplaceAll = () => {
    setText((prevText) => prevText.replaceAll(searchStr, replaceStr));
  };

  return (
    <div className="App">
      <h1>Real-Time Text Analysis</h1>
      <textarea 
        rows="10" 
        cols="50" 
        value={text} 
        onChange={handleTextChange}
        placeholder="Type here..."
      />
      <div className="stats">
        <p>Unique Words: {uniqueWords}</p>
        <p>Character Count (Excluding Spaces & Punctuation): {charCount}</p>
      </div>
      <div className="replacement">
        <input 
          type="text" 
          placeholder="Search for" 
          value={searchStr} 
          onChange={(e) => setSearchStr(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Replace with" 
          value={replaceStr} 
          onChange={(e) => setReplaceStr(e.target.value)} 
        />
        <button onClick={handleReplaceAll}>Replace All</button>
      </div>
    </div>
  );
}

export default App;
