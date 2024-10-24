// Wait until the animation completes (5 seconds) to show the number
setTimeout(() => {
    const numberElement = document.querySelector('.progress-number');
    numberElement.classList.add('show'); // Show the hidden number
  }, 5000); // Matches the animation duration
  setTimeout(() => {
    const numberElement = document.querySelector('.l');
    numberElement.classList.add('hide'); // Show the hidden number
  }, 5000); // Matches the animation duration