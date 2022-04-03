

var updateTime = function() {

document.getElementById("currentDay").innerHTML = moment().format('MMMM Do YYYY, HH:mm:ss');
};

setInterval(updateTime, 1000);

var nowHour = moment().hours();
var thisHour = parseInt(nowHour, 10);
console.log(thisHour);


// color code the entry blocks for each hour with respect to past, present, future
// 0900
if (thisHour > 9) {
    $("#block9").addClass("past");
} else if (thisHour >= 9 && thisHour < 10) {
    $("#block9").addClass("present");
} else if (thisHour < 9) {
    $("#block9").addClass("future");
}

// 1000
if (thisHour > 10) {
    $("#block10").addClass("past");
} else if (thisHour >= 10 && thisHour < 11) {
    $("#block10").addClass("present");
} else if (thisHour < 10) {
    $("#block10").addClass("future");
}
// 1100
if (thisHour > 11) {
    $("#block11").addClass("past");
  } else if (thisHour >= 11 && thisHour < 12) {
    $("#block11").addClass("present");
  } else if (thisHour < 11) {
    $("#block11").addClass("future");
  }

// 1200
if (thisHour > 12) {
    $("#block12").addClass("past");
} else if (thisHour >= 12 && thisHour < 13) {
    $("#block12").addClass("present");
} else if (thisHour < 12) {
    $("#block12").addClass("future");
}

// 1300
if (thisHour > 13) {
    $("#block13").addClass("past");
} else if (thisHour >= 13 && thisHour < 14) {
    $("#block13").addClass("present");
} else if (thisHour < 13) {
    $("#block13").addClass("future");
}

// 1400
if (thisHour > 14) {
    $("#block14").addClass("past");
} else if (thisHour >= 14 && thisHour < 15) {
    $("#block14").addClass("present");
} else if (thisHour < 14) {
    $("#block14").addClass("future");
}

// 1500
if (thisHour > 15) {
    $("#block15").addClass("past");
} else if (thisHour >= 15 && thisHour < 16) {
    $("#block15").addClass("present");
} else if (thisHour < 15) {
    $("#block15").addClass("future");
}

// 1600
if (thisHour > 16) {
    $("#block16").addClass("past");
} else if (thisHour >= 16 && thisHour < 17) {
    $("#block16").addClass("present");
} else if (thisHour < 16) {
    $("#block16").addClass("future");
}

// 1700
if (thisHour > 17) {
    $("#block17").addClass("past");
} else if (thisHour >= 17 && thisHour < 18) {
    $("#block17").addClass("present");
} else if (thisHour < 17) {
    $("#block17").addClass("future");
}

// 1800
if (thisHour > 18) {
    $("#block18").addClass("past");
} else if (thisHour >= 18 && thisHour < 19) {
    $("#block18").addClass("present");
} else if (thisHour < 18) {
    $("#block18").addClass("future");
}

// following code from Brian Wood shared on Discord...I am still struggling to figure out how this works but I have a very general sense
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
// Save text in local storage
    localStorage.setItem(time, text);
});

$("#block9.description").val(localStorage.getItem("hour9"));

$("#block10.description").val(localStorage.getItem("hour10"));

$("#block11.description").val(localStorage.getItem("hour11"));

$("#block12.description").val(localStorage.getItem("hour12"));

$("#block13.description").val(localStorage.getItem("hour13"));

$("#block14.description").val(localStorage.getItem("hour14"));

$("#block15.description").val(localStorage.getItem("hour15"));

$("#block16.description").val(localStorage.getItem("hour16"));

$("#block17.description").val(localStorage.getItem("hour17"));

$("#block18.description").val(localStorage.getItem("hour18"));

