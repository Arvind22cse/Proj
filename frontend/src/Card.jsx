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
      <div className="container-fluid mt-7 " id="containerism">
        <div className="row justify-content-center text-center">
          {data.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div className="card d-flex justify-content-center" id="image">
                <img src={item.image} id="hi" className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title" id="h1">{item.title}</h5>
                </div>
              </div>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
