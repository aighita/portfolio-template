const [urls, setUrls] = useState([]);

useEffect(() => {
    // Fetch the content from the Node.js server
    fetch('http://localhost:5000/api/urls')
        .then((response) => response.json())
        .then((data) => {
            console.log('Fetched URLs:', data); // Log the URLs to the console
            setUrls(data); // Set the URLs data in state
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);
