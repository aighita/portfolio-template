import React from 'react'

// Components

// Configuration variables
import { mainBody, musicVideos }  from "../editable-stuff/config.js"
import Content from '../components/home/Content.jsx';
import MusicVideosBody from '../components/home/MusicVideosBody.jsx';

const MusicVideos = React.forwardRef((props, ref) => {
    return (
        <>
        {musicVideos.show && (
          <MusicVideosBody
            ref={ref}
        />
        )}
        {true && (
          <Content
            heading={"Videos"}
          />
        )}
      </>
    );
});

export default MusicVideos;
