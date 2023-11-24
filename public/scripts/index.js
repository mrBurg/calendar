const req = new XMLHttpRequest();

function reqListener() {
  console.log(this.responseText);
}

req.addEventListener('load', reqListener);

function ready() {
  req.open('GET', 'http://localhost:443/api/currentDate');
  req.send();

  // $('#datepicker').datepicker();
}

document.addEventListener('DOMContentLoaded', ready);
