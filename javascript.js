document.addEventListener('DOMContentLoaded', function () {
    createNewGrid(); // Initial grid creation

    // Function to create a new grid based on user input
    function createNewGrid() {
        const container = document.getElementById('gridContainer');
        const newSize = prompt('Enter the number of squares per side (max 100):');
        
        // Validate user input
        const validatedSize = parseInt(newSize);
        if (isNaN(validatedSize) || validatedSize <= 0 || validatedSize > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        // Clear existing grid
        container.innerHTML = '';

        // Create a new grid
        for (let i = 0; i < validatedSize; i++) {
            for (let j = 0; j < validatedSize; j++) {
                const square = document.createElement('div');
                square.classList.add('gridSquare');
                square.style.width = (960 / validatedSize) + 'px'; // Adjust the width based on the container size
                square.style.height = (960 / validatedSize) + 'px'; // Adjust the height based on the container size
                container.appendChild(square);
            square.addEventListener('mouseover', function (){
                changeColor(square);
            });
            }
        }
    function changeColor(element) {
        const randomColor = getRandomColor();
        element.style.backgroundColor = randomColor;
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}});