let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let startButton = document.getElementById('start');

let botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg"

let beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg"

let spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg"

let closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg"

let numClosedDoors = 3;

let openDoor1;

let openDoor2;

let openDoor3;

let currentlyPlaying = true;

 

const isBot = (door) => {

    if (door.src === botDoorPath) {

        return true;

    } else {

        return false;

    }

}

 

const isClicked = (door) => {

    if (door.src === closedDoorPath) {

        return false;

    } else {

        return true;

    }

}

 