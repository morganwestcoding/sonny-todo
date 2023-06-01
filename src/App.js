import React from 'react';
import "./App.css";
import InspirationalQuote from './InspirationalQuote';
import DateRow from './DateRow';
import TodoListSection from './TodoListSection';
import NotesSection from './NotesSection';
import TomorrowTaskSection from './TomorrowTaskSection';

function App() {
  return (
    <div className='wrapper'>
      <header className='header'>
        <h1>TO DO LIST</h1>
      </header>
      <div className='quote'>
        <InspirationalQuote/>
      </div>
      <div className='date'>
        <DateRow/>
      </div>
        <div className="ToDoListSection">
          <TodoListSection/>
        </div>
        <div className="MonthPriorities">
          <TomorrowTaskSection/>
        </div>
      <footer className='footer'>
        <NotesSection/>
      </footer>
    </div>
  );
}

export default App;