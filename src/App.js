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
    <div className='container'>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <section>
        <InspirationalQuote/>
      </section>
      <section>
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