/// Replace with your Pixabay API key
const apiKey = 'YOUR_API_KEY';
 
// Function to fetch images based on a search query
async function fetchImages(query) {
    try {
        const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&per_page=10`);
        const data = await response.json();
 
        if (data.totalHits > 0) {
            console.log('Images:', data.hits);
            return data.hits; // Array of image objects
        } else {
            console.log('No images found for the query:', query);
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
 
// Example usage: Search for images related to 'cats'
fetchImages('cats');

