import React from 'react';
import { Link } from 'react-router-dom';

function ResultPageYes() {
  return (
    <div className='container-img'>
      <img
        src="/images/Screenshot (3).png"
        alt="ResultPageYes"
        className='Screenshot-img'
      />

      <div className='text-1'>
        <p>There is a possibility of developing breast cancer</p>
      </div>

      {/* Using Link to go to homepage */}
      <Link to="/home">
        <button className="nxxt-btn">Click</button>
      </Link>
    </div>
  );
}

export default ResultPageYes;
