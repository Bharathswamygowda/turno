$(document).ready(function() {
    $('select').niceSelect();
  });



// Load
var rangeSlider = document.getElementById('slider-range');
var rangeSliderValueElement = document.getElementById('slider-range-value');


noUiSlider.create(rangeSlider, {
start: [500],
step: 500,
range: {
'min': [500],
'max': [50000]
}
});

rangeSlider.noUiSlider.on('update', function (values, handle) {
rangeSliderValueElement.innerHTML = values[handle];
});

// Driving Range
var drivingrange = document.getElementById('driving-range');

noUiSlider.create(drivingrange, {
start: [1],
step: 5,
range: {
'min': [0],
'max': [500]
}
});

var drivingrangeValueElement = document.getElementById('driving-range-value');


drivingrange.noUiSlider.on('update', function (values, handle) {
drivingrangeValueElement.innerHTML = values[handle];
});

// Fule Range
var fulerange = document.getElementById('fule-range');
var fulerangeValueElement = document.getElementById('fule-range-value');

noUiSlider.create(fulerange, {
start: [100],
step: 100,
range: {
'min': [100],
'max': [1000]
}
});

fulerange.noUiSlider.on('update', function (values, handle) {
    fulerangeValueElement.innerHTML = values[handle];
});




// Month Range
var monthrange = document.getElementById('month-range');
var monthrangeValueElement = document.getElementById('month-range-value');

noUiSlider.create(monthrange, {
start: [26],
step: 1,
range: {
'min': [0],
'max': [31]
}
});

monthrange.noUiSlider.on('update', function (values, handle) {
monthrangeValueElement.innerHTML = values[handle];
});


// Maintenance Cost per Month
var maintenancerange = document.getElementById('Maintenance-range');
var maintenancerangeValueElement = document.getElementById('Maintenance-range-value');

noUiSlider.create(maintenancerange, {
start: [3000],
step: 1000,
range: {
'min': [3000],
'max': [100000]
}
});

maintenancerange.noUiSlider.on('update', function (values, handle) {
maintenancerangeValueElement.innerHTML = values[handle];
});


// modal

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
