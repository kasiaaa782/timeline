window.onload = () => {
  setCurrentDate();
  setProgressBar();
  setIcons();
  markIcons();
  setMobileContent();
}

var tabContent = [
  ['02.06.2021', 'LOREM IPSUM DOLOR', 'fas fa-heartbeat'],
  ['11.06.2021', 'LOREM IPSUM DOLOR', 'fas fa-flask'],
  ['15.06.2021', 'LOREM IPSUM DOLOR', 'far fa-calendar-plus'],
  ['22.06.2021', 'LOREM IPSUM DOLOR', 'fas fa-graduation-cap'],
  ['30.06.2021', 'LOREM IPSUM DOLOR', 'fas fa-gamepad']
];
var tabDate = [];
var tabName = [];
var item;
var date;

for (var i = 0; i < tabContent.length; i++) {
  tabDate.push(tabContent[i][0]);
  tabName.push(tabContent[i][1]);
}

/**
 * Comment: Get id from mouseover function to decide which popover to show
 */ 
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

markIcons = () => {
  var progressBar = $('#progress-bar').outerWidth();
  var heartbeat = $('#heartbeat').outerWidth();
  var flask = $('#flask').outerWidth();
  var calendar = $('#calendar').outerWidth();
  var graduation = $('#graduation').outerWidth();
  var gamepad = $('#gamepad').outerWidth();

  (progressBar >= heartbeat) ? $('.icon0').addClass('wrapper__axis--circle-marked') : '';
  (progressBar >= flask) ? $('.icon1').addClass('wrapper__axis--circle-marked') : '';
  (progressBar >= calendar) ? $('.icon2').addClass('wrapper__axis--circle-marked') : '';
  (progressBar >= graduation) ? $('.icon3').addClass('wrapper__axis--circle-marked') : '';
  (progressBar == gamepad) ? $('.icon4').addClass('wrapper__axis--circle-marked') : '';
}

setMobileContent = () => {
  for(var i=0; i<tabContent.length; i++){
    $('#date' + i).html(tabDate[i]);
    $('#text' + i).html(tabName[i]);
  }
}
