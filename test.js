const db = "https://chatgpt.com/";

// Create a Blob object
const blob = new Blob([db], { type: 'text/plain' });

// Create a Blob URL
const blobUrl = URL.createObjectURL(blob);

console.log(blobUrl);
