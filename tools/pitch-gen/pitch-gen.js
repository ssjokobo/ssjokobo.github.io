let boxes = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6'];
let colors = ['red', 'orange', 'yellow', 'green', 'red', 'orange', 'yellow', 'black'];
let index = 0;
let intervalId;
let bpm = 60; // Default BPM

const cycle = [
    'A#', 'D#', 'G#', 'C#', 'F#',
    'B', 'E', 'A', 'D', 'G', 'C', 'F',
    'Bb', 'Eb', 'Ab', 'Db', 'Gb'
];

function changeColor() {
    // Reset all boxes to black
    boxes.forEach(box => document.getElementById(box).style.backgroundColor = 'black');

    if (index == 3) {
        result.style.color = colors[index];
    } else if (index == 7) {
        result.style.color = colors[index];
        result.innerHTML = `${random(cycle)}`;
    } else if (index > 3) {
        // Change the box color according to the count
        document.getElementById(boxes[index - 1]).style.backgroundColor = colors[index];
    } else {
        // Change the box color according to the count
        document.getElementById(boxes[index]).style.backgroundColor = colors[index];
    }

    // Increment index and reset if necessary
    index = (index + 1) % colors.length;
}

function updateInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(changeColor, (60 / bpm) * 1000);
}

function random(type) {
    const num = Math.floor(Math.random() * type.length);
    return type[num]
}

document.getElementById('onOffSwitch').addEventListener('change', function(event) {
    isRunning = event.target.checked;
    if (isRunning) {
        updateInterval();
    } else {
        clearInterval(intervalId);
        // Reset all boxes to black when turned off
        boxes.forEach(box => document.getElementById(box).style.backgroundColor = 'black');
    }
});

document.getElementById('bpm').addEventListener('input', function(event) {
    bpm = event.target.value;
    document.getElementById('bpmValue').textContent = bpm;
    isRunning = document.getElementById('onOffSwitch').checked;
    if (isRunning) {
        updateInterval();
    } else {
        clearInterval(intervalId);
        // Reset all boxes to black when turned off
        boxes.forEach(box => document.getElementById(box).style.backgroundColor = 'black');
    }
});

result.innerHTML = `${random(cycle)}`;
updateInterval();