function getDayName(a, b) {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(2016, a - 1, b).getDay();
  return day[date];
}

console.log(getDayName(5, 24)); // TUE
