import React from 'react';
import Navbar from './Navbar';
import './Card.css';

function Card() {
  const data = [
    {
      image: 'https://3.imimg.com/data3/PJ/LO/MY-17250225/the-seminar-hall-500x500.png',
      title: 'IT',
      description: 'IT Park library',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/conference-hall-29526775.jpg',
      title: 'CSE',
      description: 'CSE Seminar hall',
    },
    {
      image: 'https://thumbs.dreamstime.com/b/conference-hall-7641763.jpg',
      title: 'MECH',
      description: 'Mech Seminar hall',
    },
  ];

  return (
    <>
      <Navbar />

      <div className="containerm">
        <div  id="card" className="row">
          {/* Loop through data and assign each image */}
          {data.map((item, index) => (
            <div id="" className="col-md-4" key={index}>
              <div className="image">
                <img src={item.image} className="hi" alt={`Image ${index + 1}`} />
                <h1 className="h1">{item.title}</h1>
              </div>
              <h1 className='desc'>{item.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
