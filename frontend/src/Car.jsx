import React from "react";
import Navbar from "./Navbar";
import './Car.css';
// import { useColorModeValue } from '@chakra-ui/react';

function Car() {
  const items = [
    {
      event: {
        title: 'Business conference 2024',
        desc: 'Speaker giving a talk on corporate business conference. Unrecognizable people in audience at conference hall. Business and Entrepreneurship event.',
        image: 'https://naipunnya.ac.in/wp-content/uploads/2022/08/Seminar-Hall-2.jpg',
      },
    },
    {
      event: {
        title: "Healthcare Summit 2024",
        desc: "Discussed the future of digital health, AI in medicine, and other advancements in healthcare.",
        image: 'https://www.shutterstock.com/image-photo/round-table-discussion-business-conference-600nw-2315079225.jpg',
      },
    },
    {
      event: {
        title: 'Marketing Expo 2023',
        desc: 'A seminar covering the latest trends in digital marketing, consumer behavior, and brand strategy.',
        image: 'https://img.freepik.com/premium-photo/audience-conference-hall-back-view-seminar-event-audience-meeting-crowds-seminar-audience_901408-8225.jpg',
      },
    },
  ];

  const length = items.length;

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [isTicking, setIsTicking] = React.useState(false);

  const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

  const nextClick = () => {
    if (!isTicking) {
      setIsTicking(true);
      setActiveIdx((prevIdx) => (prevIdx + 1) % length);
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextClick();
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  const currentItem = items[activeIdx].event;

  // Dynamic styles for light and dark mode
  // const backgroundColor = useColorModeValue("white", "#363535");
  // const textColor = useColorModeValue("black", "white");

  return (
    <div className="carousel__wrap" style={{ backgroundColor: "white", color: "black" }}>
      <Navbar />
      <div id="run">
        <div className="carousel__inner">
          <button className="carousel__btn carousel__btn--prev" onClick={() => setActiveIdx((activeIdx - 1 + length) % length)}>
            &#8249;
          </button>
          <div className="carousel__container">
            <div className="carousel__slide-item">
              <img
                id="caro"
                className="carousel__image"
                src={currentItem.image}
                alt={currentItem.title}
              />
            </div>
            <button className="carousel__btn carousel__btn--next" onClick={nextClick}>
              &#8250;
            </button>
          </div>
          <div className="carousel__content" style={{backgroundColor: "white", color: "black" }}>
            <h2>{currentItem.title}</h2>
            <p>{currentItem.desc}</p>
          </div>
        </div>
      </div>
      
      <footer className="footer" style={{ color: "white" }}>
        <p>&copy; 2024 Seminar Hall Management System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Car;
