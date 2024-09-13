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
    if (req.url === '/api/urls' && req.method === 'GET') {
        const filePath = path.join(__dirname, 'urls.json');

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read file' }));
                return;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });

    // PHOTOSHOOTS
    } else if(req.url === '/api/gallery' && req.method === 'GET') {
        const photoshootsDir = path.join(__dirname, 'gallery');

        // Read the directories inside the 'gallery' folder
        fs.readdir(photoshootsDir, { withFileTypes: true }, (err, folders) => {
            if (err) {
                console.error('Error reading directory:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read directory' }));
                return;
            }

            // Initialize an object to hold the folder names and their respective images
            let galleryData = {};

            // Filter only directories and process each one
            const directoryPromises = folders
                .filter(dirent => dirent.isDirectory())
                .map(dirent => {
                    const folderName = dirent.name;
                    const folderPath = path.join(photoshootsDir, folderName);

                    return new Promise((resolve, reject) => {
                        // Read the contents of each folder
                        fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
                            if (err) {
                                console.error(`Error reading directory ${folderPath}:`, err);
                                reject(err);
                                return;
                            }

                            // Filter only image files (.jpg, .png, etc.)
                            const imageFiles = files
                                .filter(file => file.isFile() && (file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith('.webp')))
                                .map(file => file.name);

                            // Assign the folder name as the key and the array of images as the value
                            galleryData[folderName] = imageFiles;
                            resolve();
                        });
                    });
                });

            // Once all folders are processed, send the data as JSON
            Promise.all(directoryPromises)
                .then(() => {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(galleryData));
                })
                .catch((error) => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Failed to process gallery folders' }));
                });
        });

    // CAMPAIGNS
    } else if(req.url === '/api/campaigns' && req.method === 'GET') {
        const campaignsDir = path.join(__dirname, 'campaigns');

        fs.readdir(campaignsDir, { withFileTypes: true }, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read directory' }));
                return;
            }

            const fileNames = files
                .filter(dirent => dirent.isFile())
                .map(dirent => dirent.name);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(fileNames));
        });

    // BRANDS
    } else if (req.url === '/api/brands' && req.method === 'GET') {
        const campaignsDir = path.join(__dirname, '../portfolio-template/public/brands/');

        fs.readdir(campaignsDir, { withFileTypes: true }, (err, files) => {
            if (err) {
                console.error(`Error reading directory ${campaignsDir}:`, err);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Failed to read directory' }));
                return;
            }

            const basePath = '/brands/';

            const fileUrls = files
                .filter(dirent => (dirent.name.endsWith('.png') || dirent.name.endsWith('.svg')))
                .map(dirent => basePath + dirent.name);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(fileUrls));
        });

    // OTHER REQUESTS
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: `Not Found: ${req.url}` }));
    }
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
