import React from 'react';
import Navbar from './Navbar';
import p1 from './assets/p1.jpg';
import p2 from './assets/p2.jpg';
import p3 from './assets/p3.jpg';
import './Events.css';  // Use the same CSS file as Card.jsx for consistent styling

function Events() {
    const data = [
        {
            image: p1,
            title: 'IT',
            description: 'Logo Design',
            id: "e1",
            hf: "https://forms.gle/eFmengrcaaGppNwY6"
        },
        {
            image: p2,
            title: 'CSE',
            description: 'Hackathon',
            id: "e2",
            hf: "https://forms.gle/eFmengrcaaGppNwY6"
        },
        {
            image: p3,
            title: 'MECH',
            description: 'Cloud Workshop',
            id: "e3",
            hf: "https://forms.gle/eFmengrcaaGppNwY6"
        },
    ];

    return (
        <>
            <Navbar />
            <div className="container-fluid mt-10" id="containerism">
                <div className="row justify-content-center text-center">
                    {data.map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                            <a href={item.hf} target="_blank" rel="noopener noreferrer">
                                <div className="card d-flex justify-content-center" id="image">
                                    <img src={item.image} id="hi" className="card-img-top" alt={item.title} />
                                    <div className="card-body">
                                        <h5 className="card-title" id="h1">{item.title}</h5>
                                    </div>
                                </div>
                            </a>
                            <p className="desc">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Events;
