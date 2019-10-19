// declaring constants from id's
const $hours = $('#hours')
const $minutes = $('#minutes')
const $seconds = $('#seconds')
const $distance =$('#distance')
const $submitRun =$('#submitRun');
const $weight = $('#weight');
const $repetitions = $('#repetitions')
const $submitBench =$('#submitBench');
let newTime;
let newPress;

// function to take the values from the forms and create a new object to store in the databes
function formatTime(){
  // get the values from the forms
  const hours = $hours.val().trim();
  const minutes = $minutes.val().trim();
  const seconds = $seconds.val().trim();
  const distance = $distance.val().trim()
// create a string from the entered values
    newTime =`${hours}h${minutes}m${seconds}s`;
    //creating a newRun object
    const newRun = {
        time: newTime,
        distance: distance
    };
    //send newRun object to the database.
      postRun(newRun);

    }

//function to post a run log to the mongo database.
function postRun(newRun) {
    // post newRun object and reload the page if there is an error show it in console.
    $.post('/api/run', newRun)
      .then((data) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

//function to post a bench press log to the mongo database.
function postBench() {
  //create a newPress object from the input form data
  newPress = {
    weight: $weight.val().trim(),
    repetitions: $repetitions.val().trim()
  }
  // post newPress object and reload the page if there is an error show it in console.
  $.post('/api/bench', newPress)
  .then((data) => {
    window.location.reload(true);
  })
  .catch((err) => {
    console.log(err);
  });
}

// when submits button are clicked run the functions to format time and post it and to post the bench presses.
$submitRun.on('click', formatTime);
$submitBench.on('click', postBench);
