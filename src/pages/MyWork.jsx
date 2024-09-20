import React from "react";

// Components of the page
import MyWorkBody from '../components/home/MyWorkBody.jsx'; // Import MyWorkBody


// Configuration variables
import {
    myWork // Ensure you are importing the right config for MyWorkBody
} from '../editable-stuff/config.js';

const MyWork = React.forwardRef((props, ref) => {
    return (
      <>
        {myWork.show && ( // Assuming myWork controls visibility now
          <MyWorkBody
          style={{
            width: "100%"
          }}
            // Pass in necessary props to MyWorkBody, modify as needed
            backgroundPhoto={myWork.backgroundPhoto} // Assuming there's a background photo for MyWork
            icons={myWork.icons}  // Pass icons if relevant
            ref={ref}
          />
        )}
      </>
    );
});

// Exporting the MyWork page
export default MyWork;