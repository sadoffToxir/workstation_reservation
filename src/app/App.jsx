import React from 'react';
import './App.css';
import { Workstation } from './components/Workstation';

function App() {
  const mockData = [{
    id: '1',
    deskNumber: 15,
  }, {
    id: '2',
    deskNumber: 5,
  }, {
    id: '3',
    deskNumber: 10,
  }]

  return (
    <div className='app-container'>
      <h1 className='workstations-heading'>Workstations:</h1>
      <div className='workstations-container'>
        {
          mockData.map((el) => {
            return <Workstation key={el.id} data={el} />
          })
        }
      </div>
    </div>
  );
}

export default App;
