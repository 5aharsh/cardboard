function showClock() {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  // Set to true to use a 12 hour date format
  var format_12hour = true;

  var d = new Date();
  var mm = months[d.getMonth()];
  var dd = d.getDate();
  var min = (mins = ('0' + d.getMinutes()).slice(-2));
  var hh = d.getHours();
  var ampm = '';

  if (format_12hour) {
    ampm = hh >= 12 ? ' pm' : ' am';
    hh = hh % 12;
    hh = hh ? hh : 12; //show mod 0 as 12
  }

  document.getElementById('hour').innerText = hh;
  document.getElementById('min').innerText = min + ampm;

  //document.getElementById('month').innerText = mm;
  //document.getElementById('day').innerText = dd;
}

setTimeout(showClock, 1000);