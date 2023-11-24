const req = new XMLHttpRequest();

function reqListener() {
  console.log(this.responseText);
  console.log(Date.now());
}

req.addEventListener('load', reqListener);

function ready() {
  req.open('GET', '/api/currentDate');
  req.send();

  // $('#datepicker').datepicker();
}

document.addEventListener('DOMContentLoaded', ready);
