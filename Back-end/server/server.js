const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the port
const port = 5000;

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set up CORS headers to allow your React app to make requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // YOUTUBE URLS
    // Check if the request is for the specific route "/api/urls"
    if (req.url === '/api/urls' && req.method === 'GET') {
        // Functionality: Read all youtube links inside the 'urls.json' file
        // and send the urls array to front-end. Used to display embedded youtube
        // videos for the 'Music Videos' section
        const filePath = path.join(__dirname, 'urls.json');

        // Read the urls.json file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read file' }));
                return;
            }

            // Send the JSON content
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data); // The content is already in JSON format
        });

    // PHOTOSHOOTS
    } else if(req.url === '/api/photoshoots' && req.method === 'GET') {
        // Functionality: Read the name of all directories inside the photoshoots
        // directory and send all of them to the front-end as array.
        const photoshootsDir = path.join(__dirname, 'photoshoots');

        // Read the directories inside the 'photoshoots' folder
        fs.readdir(photoshootsDir, { withFileTypes: true }, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read directory' }));
                return;
            }

            // Filter only directories and send their names
            const directories = files
                .filter(dirent => dirent.isDirectory()) // Only directories
                .map(dirent => dirent.name);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(directories));
        });
    
    // CAMPAIGNS
    } else if(req.url === '/api/campaigns' && req.method === 'GET') {
        // Functionality: Read the name of all files inside the campaigns
        // directory and send all of them to the front-end as array.
        const campaignsDir = path.join(__dirname, 'campaigns');

        // Read the files inside the 'campaigns' folder
        fs.readdir(campaignsDir, { withFileTypes: true }, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read directory' }));
                return;
            }

            // Filter only files and send their names
            const fileNames = files
                .filter(dirent => dirent.isFile()) // Only files
                .map(dirent => dirent.name);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(fileNames));
        });

    // BRANDS
    } else if (req.url === '/api/brands' && req.method === 'GET') {
        const campaignsDir = path.join(__dirname, 'brands');

        // Read the files inside the 'brands' folder
        fs.readdir(campaignsDir, { withFileTypes: true }, (err, files) => {
            if (err) {
                console.error(`Error reading directory ${campaignsDir}:`, err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read directory' }));
                return;
            }

            // Assuming the frontend will need a URL path to these files
            const basePath = '/brands/';

            // Filter only files and map their names to full URLs (check for .png and .svg extensions)
            const fileUrls = files
                .filter(dirent => (dirent.name.endsWith('.png') || dirent.name.endsWith('.svg'))) // Check for file extension
                .map(dirent => basePath + dirent.name); // Prepend the base URL

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(fileUrls));
        });

    // OTHER REQUESTS
    } else {
        // Handle requests to other routes or methods not yet implemented/not needed
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `Not Found: ${req.url}` }));
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
