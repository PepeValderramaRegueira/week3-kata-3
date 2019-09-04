var whatTimeIsIt = function(angle) {
  
  if (angle in [0, 360]) return "12:00";

  let minutes = (60 * angle) / 30;
  let hours = Math.floor(minutes / 60);
  let totalMinutes = Math.floor(minutes - hours * 60);

  return `${hours === 0 ? "12" : hours < 10 ? "0" + hours : hours}:${
    totalMinutes < 10 ? "0" + totalMinutes : totalMinutes
  }`;
};

console.log(whatTimeIsIt(29.961765603752273));
