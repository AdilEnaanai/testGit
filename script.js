// Select your canvas element from the DOM
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load the image
const image = new Image();
image.src = 'image.jpg'; // Replace with the path to your image

// Image properties
let imageWidth = 200; // Adjust as per your image size
let imageHeight = 150; // Adjust as per your image size
let x1 = 0;

// Adjust image height (y-coordinate) to center it
const y = (canvas.height - imageHeight) / 2;

image.onload = function () {
    // Animation function
    function animate() {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the image repeatedly to create an infinite loop
        let tempX = x1;
        while (tempX < canvas.width) {
            ctx.drawImage(image, tempX, y, imageWidth, imageHeight);
            tempX += imageWidth;
        }

        // Move the image to the right
        x1 += 2; // Adjust speed

        // Reset position to loop seamlessly
        if (x1 >= imageWidth) x1 = 0;

        // Request the next frame
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
};
