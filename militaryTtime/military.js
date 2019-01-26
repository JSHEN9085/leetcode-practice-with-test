//Give a string input with a time format of '5:30 PM',
//change the input to military time.
//example:
// "1:00 AM" => 0100
// "9:00 PM" => 2100

function mulitaryTime(time) {
  let clockNumber = time.split(' ')[0];
  let hour = clockNumber.split(':')[0];
  let min = clockNumber.split(':')[1];

  if (time.includes("P")) {
    hour = parseInt(hour) + 12;
    hour = hour.toString();
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  return hour + min;
}

module.exports = mulitaryTime;
