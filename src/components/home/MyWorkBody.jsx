import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom SCSS for this component
import '../../scss/myWork.scss'; // Importing the SCSS file

const imageSet1 = [
    '../gallery/leftImage/poza1.jpg',
    '../gallery/leftImage/poza2.jpg',
    '../gallery/leftImage/poza3.jpg',
];

const imageSet2 = [
    '../gallery/bottomRightImage/picture1.jpg',
    '../gallery/bottomRightImage/picture2.jpg',
    '../gallery/bottomRightImage/picture3.jpg',
];

const imageSet3 = [
    '../gallery/topRightImage/poza1.jpg',
      '../gallery/topRightImage/poza2.jpg',
      '../gallery/topRightImage/poza3.jpg',
];

const MyWorkBody = () => {
  const [image1, setImage1] = useState(imageSet1[0]);
  const [image2, setImage2] = useState(imageSet2[0]);
  const [image3, setImage3] = useState(imageSet3[0]);

  const navigate = useNavigate();

  useEffect(() => {
    const interval1 = setInterval(() => {
      setImage1(imageSet1[Math.floor(Math.random() * imageSet1.length)]);
    }, 3000);

    const interval2 = setInterval(() => {
      setImage2(imageSet2[Math.floor(Math.random() * imageSet2.length)]);
    }, 4000);

    const interval3 = setInterval(() => {
      setImage3(imageSet3[Math.floor(Math.random() * imageSet3.length)]);
    }, 5000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className="display-container">
      <div className="frame">
        <img src={image1} alt="Gallery" className="photo" />
        <div className="dim-overlay" onClick={() => navigate('/gallery')}>
          <span className="direction-arrow">→</span>
          <span className="caption-text">Gallery</span>
        </div>
      </div>

      <div className="frame">
        <img src={image2} alt="Campaigns" className="photo" />
        <div className="dim-overlay" onClick={() => navigate('/campaigns')}>
          <span className="direction-arrow">→</span>
          <span className="caption-text">Campaigns</span>
        </div>
      </div>

      <div className="frame">
        <img src={image3} alt="Music Videos" className="photo" />
        <div className="dim-overlay" onClick={() => navigate('/music-videos')}>
          <span className="direction-arrow">→</span>
          <span className="caption-text">Music Videos</span>
        </div>
      </div>
    </div>
  );
};

export default MyWorkBody;
