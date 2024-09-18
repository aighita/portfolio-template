import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Ensure you're using Bootstrap
import { Jumbotron } from '../components/home/migration.jsx';

// Components
import MainBody from '../components/home/MainBody.jsx'
import CampaignsContent from '../components/content/CampaignsContent.jsx';

// Configuration variables
import { mainBody, campaigns }  from "../editable-stuff/config.js"

const Campaigns = React.forwardRef((props, ref) => {
    return (
        <>
        {campaigns.show && (
          <MainBody
          gradient={mainBody.gradientColors2}
        //   backgroundPhoto ={mainBody.imagineMyWork}
          title={campaigns.heading}
          message={campaigns.message}
          icons={mainBody.icons}
          ref={ref}
        />
        )}
        {campaigns.show && (
          <CampaignsContent />
        )}
      </>
    );
});

// Function to extract the video ID from a YouTube URL
const extractVideoId = (url) => {
    try {
        const urlObj = new URL(url);
        return urlObj.searchParams.get('v'); // Extract the video ID from the URL
    } catch (error) {
        console.error('Invalid YouTube URL', url);
        return null; // Handle invalid URL
    }
};

export default Campaigns;
