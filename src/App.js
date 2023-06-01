import React from 'react';
import "./App.css";
import InspirationalQuote from './InspirationalQuote';
import DateRow from './DateRow';
import TodoListSection from './TodoListSection';
import NotesSection from './NotesSection';
import TomorrowTaskSection from './TomorrowTaskSection';

function App() {
  return (
<div className='container'>
    <header className='header'><h1>TODO LIST</h1></header>
        <div className='item'><InspirationalQuote/></div>
        <div className='item'><DateRow/></div>
    <main>
        <div className="item ToDoListSection"><TodoListSection/></div>
        <div className="item TomorrowTaskSection"><TomorrowTaskSection/></div>
    </main>
    <footer className='item'><NotesSection/></footer>
</div>
  );
}

export default App;