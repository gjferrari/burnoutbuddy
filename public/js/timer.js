console.log('hello');

const timer = document.querySelector('#timer');

let timeLeft = 300 // 5 min timer
    // let timerContent = ''
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      console.log(timeLeft);
      timer.textContent = timeLeft;
      if (timeLeft > 1) {
        // Set timerContent to show the remaining seconds
        // timerContent= timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        // timerContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerContent` to an empty string
        // timerContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);