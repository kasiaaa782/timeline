
window.onload = () => {
  setCurrentDate();
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
  var date = '10.06.2021';
  document.getElementById("date").innerHTML = date;
}
console.log(screen.width)