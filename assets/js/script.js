//shows today's date
var todaysDate = moment().format("dddd, MMMM Do YYYY");

//hours
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");

const showText = document.querySelector(".show-message");

var hour = moment().hours();
var userInfo;
var timeLinked;

//Made the time and date show according to the current Date and time and updates by seconds
var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").text(todaysDate + " at " + momentNow.format("hh:mm:ss A"));
}, 100);

function times() {
  console.log("Current Hour " + hour);
  var time8 = JSON.parse(localStorage.getItem("8 AM"));
  eightAm.val(time8);

  var time9 = JSON.parse(localStorage.getItem("9 AM"));
  nineAm.val(time9);

  var time10 = JSON.parse(localStorage.getItem("10 AM"));
  tenAm.val(time10);

  var time11 = JSON.parse(localStorage.getItem("11 AM"));
  elevenAm.val(time11);

  var time12 = JSON.parse(localStorage.getItem("12 PM"));
  twelvePm.val(time12);

  var time1 = JSON.parse(localStorage.getItem("1 PM"));
  onePm.val(time1);

  var time2 = JSON.parse(localStorage.getItem("2 PM"));
  twoPm.val(time2);

  var time3 = JSON.parse(localStorage.getItem("3 PM"));
  threePm.val(time3);

  var time4 = JSON.parse(localStorage.getItem("4 PM"));
  fourPm.val(time4);

  var time5 = JSON.parse(localStorage.getItem("5 PM"));
  fivePm.val(time5);

  var time6 = JSON.parse(localStorage.getItem("6 PM"));
  sixPm.val(time6);
}

//time blocks will be color coded. depending what time it is at the moment
function timeline() {
  $(".description").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    //console.log(timeTest);
    console.log(hour);
    //Look for the current time and then will say past time, present time or future time
    if (hour > timeTest) {
      $(this).addClass("past");
    } else if (hour < timeTest) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

//This mesage will show when the user description has been entered and saved to localStorage
function showMessageSaved() {
  let pText = document.createElement("p");
  showText.appendChild(pText);
  pText.textContent = "Appointment added to localStorage!";
  //show the message for 1.5 seconds
  setTimeout(function () {
    pText.style.display = "none";
  }, 1500);
}

//will add the function timeline() in order to be able to make it work
//this will run after loading the whole file
$(document).ready(function () {
  //This is to make the functions work right after loading the html
  times();
  timeline();

  //to save the texts under the descriptions to localStorage
  $(".saveBtn").on("click", function () {
    userInfo = $(this).siblings(".description").val().trim();
    console.log(userInfo + " - userinfo");
    timeLinked = $(this).siblings(".hour").text().trim();
    console.log(timeLinked + " - timelinked");
    localStorage.setItem(timeLinked, JSON.stringify(userInfo));
    //when the saveBtn is clicked, then the message will show that it has been saved to localStorage
    showMessageSaved();
  });

  //this is to clear the data in all the descriptions
  $(".clear-storage").on("click", function () {
    //this is to clear the data in the localStorage
    localStorage.clear();
    //This will go back to the original times
    times();
  });
});