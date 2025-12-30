import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate('/next');

       
    };

     return (
        <div className='container'>
        <div className='homepage-image'></div>
       
        <div className='container-text'>
        <div className='text-on-img'>
          <h1>Breast Tumor Prediction for Medical Practitioners<b></b></h1>

           <div className='description'>
             <p>Using patient data, this software helps medical professionals determine whether a breast tumor is benign or malignant.</p>
             <p>It is intended to assist clinical evaluation, early identification, and well-informed decision-making.</p>
             <p>The system does not take the role of established diagnostic methods or professional medical judgment; rather, it is a supportive tool.</p>
           </div>

           <button className='next-btn' onClick={nextPage}>
               Enter Patient Data
           </button>

           </div>
            
        </div>
      </div>

  )
}

export default HomePage;


