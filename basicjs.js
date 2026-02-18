function tickUp() {
    let pastCounter = document.getElementById("counter").innerText;
    let updatedCounter = parseInt(pastCounter) + 1;
    document.getElementById("counter").innerText = updatedCounter;
}

function tickDown() {
    let pastCounter = document.getElementById("counter").innerText;
    let updatedCounter = parseInt(pastCounter) - 1;
    document.getElementById("counter").innerText = updatedCounter;
}

function runForLoop() {
    let counter = document.getElementById("counter").innerText;
    let loopcontent = "";
    for (let i=0; i <= counter; i++) {
        loopcontent += i + " ";
    }
    document.getElementById("forLoopResult").innerText = loopcontent;
}

function showOddNumbers() {
    let counter = document.getElementById("counter").innerText;
    let loopcontent = "";
    for (let i=0; i <= counter; i++) {
        if (i%2 == 1)
            loopcontent += i + " ";
    }
    document.getElementById("oddNumberResult").innerText = loopcontent;
}

function addMultiplesToArray() {
    let counter = document.getElementById("counter").innerText;
    const loopcontent = [];
    let index = 0;
    for (let i=1; i <= counter; i++) {
        if (i%5 ==0) {
            loopcontent[index] = i;
            index++;
        }
    }
    console.log(loopcontent.reverse());
}

function printCarObject() {
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;
    function Car(type, mpg, color) {
        this.type = type,
        this.milespergalon = mpg,
        this.color = color
    }
    const myCar = new Car(carType, carMPG, carColor)
    console.log(myCar);
}

function loadCar(carNum) {
    let cars;
    if (carNum == 1)
        cars = carObject1
    else if (carNum == 2)
        cars = carObject2
    else if (carNum == 3)
        cars = carObject3
    document.getElementById("carType").value = cars.cType;
    document.getElementById("carMPG").value = cars.cMPG;
    document.getElementById("carColor").value = cars.cColor;
}

function changeColor(color) {
    if (color == 1)
        document.getElementById("styleParagraph").style.color = "red";
    else if (color == 2)
        document.getElementById("styleParagraph").style.color = "green";
    else if (color == 3)
        document.getElementById("styleParagraph").style.color = "blue";
}