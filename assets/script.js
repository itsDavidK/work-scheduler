//global variables
var day = moment();
var time = moment().format("HH"); //HH is military time so I had to change the HTML data-state to numbers equaling military time to make it easier
var timeSet = $("textarea");
var saveData = ["tacos", "", "", "", "", "", "", "", "",]; //9 empty strings for the hours on the schedule.

$("#currentDay").text(day.format("dddd MMM Do, YYYY"));

//for loop using var time for setting the background color of the description past, present, and future.
for (let i = 0; i < timeSet.length; i++)
{
    if (time > timeSet[i].dataset.state)
    {
        timeSet[i].classList.add("past");
        timeSet[i].classList.remove("present");
        timeSet[i].classList.remove("future");
    }
    else if (time == timeSet[i].dataset.state)
    {
        timeSet[i].classList.remove("past");
        timeSet[i].classList.add("present");
        timeSet[i].classList.remove("future");
    }
    else
    {
        timeSet[i].classList.remove("past");
        timeSet[i].classList.remove("present");
        timeSet[i].classList.add("future");
    } 
}

//when the time is > timeSet.length by default will make 9am "future", this way it sets it to the past to fix the bug
if (time > timeSet.length)
{
    timeSet[0].classList.add("past");
    timeSet[0].classList.remove("future");  
}

//storeData() puts the data in the localstorage using JSON to turn the user's input into a string data type.
function storeData()
{
    localStorage.setItem("saveData", JSON.stringify(saveData));
}

//displayData() goes through the timeSet[] to display the saved data from the localstorage
function displayData()
{

    for (let i = 0; i < timeSet.length; i++)
    {
        saveData = JSON.parse(localStorage.getItem("saveData"));
        timeSet[i].value = saveData[i];
    }
}

displayData();


//all the button events
$("#0").on("click", function(event)
{
    saveData.splice(0, 1, timeSet[0].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#1").on("click", function(event)
{
    saveData.splice(1, 1, timeSet[1].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#2").on("click", function(event)
{
    saveData.splice(2, 1, timeSet[2].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#3").on("click", function(event)
{
    saveData.splice(3, 1, timeSet[3].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#4").on("click", function(event)
{
    saveData.splice(4, 1, timeSet[4].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#5").on("click", function(event)
{
    saveData.splice(5, 1, timeSet[5].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#6").on("click", function(event)
{
    saveData.splice(6, 1, timeSet[6].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#7").on("click", function(event)
{
    saveData.splice(7, 1, timeSet[7].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})

$("#8").on("click", function(event)
{
    saveData.splice(8, 1, timeSet[8].value)
    $(".msg").text("Appointment Added to localStorage! ✔️");
    storeData();
})