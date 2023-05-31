import React from 'react';
import "./App.css";
import InspirationalQuote from './InspirationalQuote';
import DateRow from './DateRow';
import TodoListSection from './TodoListSection';
import NotesSection from './NotesSection';
import TomorrowTaskSection from './TomorrowTaskSection';
import PrioritiesSection from './PrioritiesSection';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <h1>TO DO LIST</h1>
      </header>
      <section className='quote'>
        <InspirationalQuote/>
      </section>
      <section className='date'>
        <DateRow/>
      </section>
      <div className="flex-container">
        <div className="left-section">
          <PrioritiesSection/>
        </div>
        <div className="right-section">
          <TomorrowTaskSection/>
        </div>
      </div>
      <section>
        <NotesSection/>
      </section>
      <section>
        <TodoListSection/>
      </section>
    </div>
  );
}

export default App;