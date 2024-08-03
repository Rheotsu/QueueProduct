const canvas = document.getElementById('queueCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 200;

let queue = [];
const queueSize = 5;
const elementWidth = 100;
const elementHeight = 50;

function drawQueue() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < queueSize; i++) {
        ctx.strokeRect(i * elementWidth, canvas.height / 2 - elementHeight / 2, elementWidth, elementHeight);
        if (queue[i] !== undefined) {
            ctx.fillText(queue[i], i * elementWidth + elementWidth / 2, canvas.height / 2);
        }
    }
}

function enqueue(element) {
    if (queue.length < queueSize) {
        queue.push(element);
        drawQueue();
    } else {
        alert('Queue is full');
    }
}

function dequeue() {
    if (queue.length > 0) {
        queue.shift();
        drawQueue();
    } else {
        alert('Queue is empty');
    }
}

function enqueueElement() {
    const elementInput = document.getElementById('elementInput');
    const element = elementInput.value;
    if (element) {
        enqueue(element);
        elementInput.value = '';
    }
}

function dequeueElement() {
    dequeue();
}


// Initial drawing of the empty queue
drawQueue();

// For demonstration purposes
enqueue('A');
enqueue('B');
dequeue();
enqueue('C');
