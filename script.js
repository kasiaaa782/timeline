
window.onload = () => {
  setCurrentDate();
  setProgressBar();
  setIcons();
}

var tabContent = [
  ['02.06.2021', 'LOREM IPSUM DOLAR', 'fas fa-heartbeat'],
  ['11.06.2021', 'LOREM IPSUM DOLAR', 'fas fa-flask'],
  ['15.06.2021', 'LOREM IPSUM DOLAR', 'far fa-calendar-plus'],
  ['22.06.2021', 'LOREM IPSUM DOLAR', 'fas fa-graduation-cap'],
  ['30.06.2021', 'LOREM IPSUM DOLAR', 'fas fa-gamepad']
];
var tabDate = [];
var tabName = [];
var item;
var date;

for (var i = 0; i < tabContent.length; i++) {
  tabDate.push(tabContent[i][0]);
  tabName.push(tabContent[i][1]);
}

//Get id from mouseover to decide which popover to show
getId = (item) => {
  $("#icon" + item).popover({ 
    trigger: "hover",
    placement: "top",
    content: tabName[item],
    title: tabDate[item]
  });
}

setCurrentDate = () => {
  date = '10.06.2021';
  $('#date').html(date);
}

setProgressBar = () => {
  var progressPercent = setWidthPercent(date);
  $('#progress-bar').width(progressPercent);
}

setIcons = () => {
  var heartbeat = setWidthPercent(tabDate[0]);
  var flask = setWidthPercent(tabDate[1]);
  var calendar = setWidthPercent(tabDate[2]);
  var graduation = setWidthPercent(tabDate[3]);
  var gamepad = setWidthPercent(tabDate[4]);

  $('#heartbeat').width(heartbeat);
  $('#flask').width(flask);
  $('#calendar').width(calendar);
  $('#graduation').width(graduation);
  $('#gamepad').width(gamepad);
}

setWidthPercent = (date) => {
  var day = date.substring(0,2);
  var percent = day * 100 / 30;
  return percent + '%';
}
