import React from "react";
import Navbar from "./Navbar";
function Car(props) {
    const items = [
        {
            event: {
                title: 'Business conference 2024',
                desc: 'Speaker giving a talk on corporate business conference. Unrecognizable people in audience at conference hall. Business and Entrepreneurship event.',
                image: 'https://www.shutterstock.com/image-photo/speaker-giving-talk-on-corporate-600nw-481869205.jpg',
            },
        },
        {
            event: {
                title: "Healthcare Summit 2024",
                desc: "Discussed the future of digital health, AI in medicine, and other advancements in healthcare.",
                image: 'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE=',
            },
        },
        {
            event: {
                title: 'Marketing Expo 2023',
                desc: 'A seminar covering the latest trends in digital marketing, consumer behavior, and brand strategy.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBHkITJb9K6vvZA-qLsh5CfFBnVZoJVnMaPw&s',
            },
        },
      ];
      
      const length = items.length;
      
      const sleep = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));
    const [activeIdx, setActiveIdx] = React.useState(0);
    const [isTicking, setIsTicking] = React.useState(false);
  
    const prevClick = () => {
        if (!isTicking) {
            setIsTicking(true);
            setActiveIdx((prevIdx) => (prevIdx - 1 + length) % length);
        }
    };
  
    const nextClick = () => {
        if (!isTicking) {
            setIsTicking(true);
            setActiveIdx((prevIdx) => (prevIdx + 1) % length);
        }
    };
  
    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);
  
    const currentItem = items[activeIdx].event;
  
    return (
        <div className="carousel__wrap" >
            <Navbar/>
            <div id="run">
          
                            <div className="carousel__inner" >
                <button className="carousel__btn carousel__btn--prev" onClick={prevClick}>
                    &#8249;
                </button>
                <div className="carousel__container">
                    <div className="carousel__slide-item">
                        <img
                            className="carousel__image"
                            src={currentItem.image}
                            alt={currentItem.title}
                        />
                    </div>
                
                <button className="carousel__btn carousel__btn--next" onClick={nextClick}>
                    &#8250;
                </button>
            </div>
            <div className="carousel__content">
                <h2>{currentItem.title}</h2>
                <p>{currentItem.desc}</p>
            </div>
            </div>
            </div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, deserunt ipsa delectus eos harum quam minus facilis impedit cumque consectetur nemo ducimus voluptate maiores vero eaque maxime repellat animi distinctio!</p>


   
   
   
   
            <footer className="footer">
                <p>&copy; 2024 Seminar Hall Management System. All Rights Reserved.</p>
            </footer>
        </div>
    );
  
  };
  export default Car ;