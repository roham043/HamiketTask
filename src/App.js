import React from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';


function App() {
  return (
    <div className='flex flex-col justify-around items-center h-auto bg-white'>
      <div className=' w-1/2 p-5 flex flex-row mb-5 mt-5 rounded-lg justify-center items-center'>
        <Form />
      </div>
      <div className=' w-screen flex flex-col justify-center items-center '>
        <Table />
      </div>
    </div>
  );
}

export default App;
