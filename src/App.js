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
    <header className='header'><h1>TODO LIST</h1>
    <DateRow/></header>
        <div className='item'><InspirationalQuote/></div>
    <main>
        <div className="item ToDoListSection"><TodoListSection/></div>
        <div className="item TomorrowTaskSection"><TomorrowTaskSection/></div>
    </main>
    <footer className='item Notes'><NotesSection/></footer>
</div>
  );
}

export default App;