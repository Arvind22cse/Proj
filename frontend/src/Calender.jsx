// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import './Calender.css'; // Assuming styles are placed here

// const Calender = () => {
//   // Array of image URLs
//   const allImages = [
//     'https://www.kclas.ac.in/wp-content/uploads/2021/01/auditorium-kclas.jpg',
//     'https://3.imimg.com/data3/PJ/LO/MY-17250225/the-seminar-hall-500x500.png',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIX_al76EkBHcdjH0pnvQfcKsg3eMAOVbdBw&s',
//     // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzS9-9nbV0mvtMaldPDNzSnknI-irlIkCCg&s',
//     // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EDcxMEIMGyxjobVO1-PPZytkz0PwQMn_dA&s',
//     // 'https://amaindia.b-cdn.net/amain/wp-content/uploads/2022/06/DSC_1058.jpg',
//     // 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTHMi3Pb-PTTs-6uDWyT2fDOMUlJRcy4zKg&s',
//     // 'https://5.imimg.com/data5/SELLER/Default/2021/10/RS/JS/YH/9039090/seminar-hall-project.jpg'
//   ];

//   // State to control the number of displayed images
// //   const [visibleImages, setVisibleImages] = useState(3); // Initially show 3 images

// //   const handleSeeMore = () => {
// //     setVisibleImages((prev) => prev + 5); // Show 3 more images on each click
// //   };

//   return (
//     <div>
//       <Navbar />
//       <div className="calender__gallery">
//         {allImages.slice(0, visibleImages).map((image, index) => (
//           <div className="card" key={index}>
//             <img src={image} alt={`Gallery ${index + 1}`} className="card__image" />
//           </div>
//         ))}
//       </div>
// <h1>IT park Seminar hall</h1>
 

//     </div>
//   );
// };

// export default Calender;

import React from 'react';
import Navbar from './Navbar';
import './Calender.css'; // Assuming styles are placed here
import Calu from './Calu';
const Calender = () => {
  // Array of image URLs
  const allImages = [
    'https://www.kclas.ac.in/wp-content/uploads/2021/01/auditorium-kclas.jpg',
    'https://3.imimg.com/data3/PJ/LO/MY-17250225/the-seminar-hall-500x500.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIX_al76EkBHcdjH0pnvQfcKsg3eMAOVbdBw&s',
   
  ];

  return (
    <div>
      <Navbar />
      
      <div className="calender__gallery">
        {allImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} className="card__image" />
          </div>
        ))}
      </div>
    <center>  <h1>IT Park Seminar Hall</h1></center>
    <Calu/>
    </div>
  );
};

export default Calender;
