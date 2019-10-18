const $hours = $('#hours')
const $minutes = $('#minutes')
const $seconds = $('#seconds')
const $distance =$('#distance')
const $submitRun =$('#submitRun');
let newTime;

function formatTime(){
  const hours = $hours.val().trim();
  const minutes = $minutes.val().trim();
  const seconds = $seconds.val().trim();
  const distance = $distance.val().trim()

    newTime =`${hours}h${minutes}m${seconds}s`;
    const newRun = {
        time: newTime,
        distance: distance
    };
      postRun(newRun);

    }
    


function postRun(newRun) {
 
    $.post('/api/run', newRun)
      .then((data) => {
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }




$submitRun.on('click', postRun);