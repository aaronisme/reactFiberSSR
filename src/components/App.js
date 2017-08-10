import React from 'react';
import userApi from '../api/userApi';
import UserCard from './UserCard';
import userData from '../data/user.json'
import RecursiveDivs from './RecursiveDivs'

const depth = 4, breadth = 11;

const App = ({ userData }) => {
  return (
    <div>
      <RecursiveDivs depth={depth} breadth={breadth} />
    </div>
  )
}

export default App;