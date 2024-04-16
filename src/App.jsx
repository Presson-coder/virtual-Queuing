import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Meals from './components/Meals';

const App = () => {
  return (
    <Router>
     <div className='mb-12 p-4'>
      <Navbar />
     </div>
     <div>
       <Meals/>
     </div>
    </Router>
  )
}

export default App