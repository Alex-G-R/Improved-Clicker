


import { upgradeCheck } from "./util.js";
import {
    clickButton,
    up1,
    up2, 
    up3, 
    up4, 
    up5, 
    up6, 
    up7, 
    up8, 
    up9, 
    up10,
    up11,
    up12,
    automaticUpgrade1,
    automaticUpgrade2,
    automaticUpgrade3,
    automaticUpgrade4,
    automaticUpgrade5,
    automaticUpgrade6,
} from "./common.js";


let clicks = 0;
let allClick = 0;
let totalClick = 0;
let value = 1;

// any document click will result in incrementing total clicks and checking if upgrades are avelibable
document.addEventListener("click", e =>{
    totalClick += 1;
    document.getElementById("totalClicks").innerHTML = "All Clicks: "+totalClick;
    upgradeCheck(clicks)
});
document.addEventListener("mouseup", e => {
    clickButton.style.backgroundColor="lawngreen"
});

// clickButton color change onClick
clickButton.addEventListener("mousedown", e => {
    clickButton.style.backgroundColor="rgb(81, 158, 5)"
})
clickButton.addEventListener("mouseup", e => {
    clicks += value;
    document.getElementById("score").innerHTML = clicks;

    allClick += 1;
    document.getElementById("allClicks").innerHTML = "Clicks: "+allClick;

    upgradeCheck(clicks)
})

// page change
let currentPage = 1;
const pageButtonNext = document.querySelectorAll('.buttonPageNext')
const pageButtonPrevious = document.querySelectorAll('.buttonPagePrevious')

const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");

const showPageNumber = document.querySelectorAll('.pageCounter');

pageButtonNext.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPage == 1) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'block';
            changePage(2);
            currentPage = 2;
        }
    });
});
pageButtonPrevious.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPage == 2) {
            pageOne.style.display = 'block';
            pageTwo.style.display = 'none';
            changePage(1);
            currentPage = 1;
        }
    });
});

// Upgrades
up1.addEventListener("click", e => {
    if(clicks >= 100) {
        upgrade(100, 1)
    }
})

up2.addEventListener("click", e => {
    if(clicks >= 475) {
        upgrade(475, 5)
    }
})

up3.addEventListener("click", e => {
    if(clicks >= 900) {
        upgrade(900, 10)
    }
})

up4.addEventListener("click", e => {
    if(clicks >= 4250) {
        upgrade(4250, 50)
    }
})

up5.addEventListener("click", e => {
    if(clicks >= 8000) {
        upgrade(8000, 100)
    }
})

up6.addEventListener("click", e => {
    if(clicks >= 75000) {
        upgrade(75000, 1000)
    }
})

up7.addEventListener("click", e => {
    if(clicks >= 700000) {
        upgrade(700000, 10000)
    }
})

up8.addEventListener("click", e => {
    if(clicks >= 3200000) {
        upgrade(3200000, 50000)
    }
})

up9.addEventListener("click", e => {
    if(clicks >= 15000000) {
        upgrade(15000000, 250000)
    }
})

up10.addEventListener("click", e => {
    if(clicks >= 50000000) {
        upgrade(50000000, 1000000)
    }
})

up11.addEventListener("click", e => {
    if(clicks >= 400000000) {
        upgrade(400000000, 10000000)
    }
})

up12.addEventListener("click", e => {
    if(clicks >= 3000000000) {
        upgrade(3000000000, 100000000)
    }
})

let controlNumber = 0;
automaticUpgrade1.addEventListener("click", e => {
    if(clicks >= 75) {
        clicks -= 75
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(1);
    }
})

automaticUpgrade2.addEventListener("click", e => {
    if(clicks >= 350) {
        clicks -= 350
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(5);
    }
})

automaticUpgrade3.addEventListener("click", e => {
    if(clicks >= 1000) {
        clicks -= 1000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(15);
    }
})

automaticUpgrade4.addEventListener("click", e => {
    if(clicks >= 3500) {
        clicks -= 3500
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(50);
    }
})

automaticUpgrade5.addEventListener("click", e => {
    if(clicks >= 10000) {
        clicks -= 10000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(150);
    }
})

automaticUpgrade6.addEventListener("click", e => {
    if(clicks >= 60000) {
        clicks -= 60000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(1000);
    }
})


//cheats
export const cheat = document.getElementById("cheat");
export const cheat2 = document.getElementById("cheat2");
cheat.addEventListener("click", e => {
    clicks += 1000;
    document.getElementById("score").innerHTML = clicks;
})
cheat2.addEventListener("click", e => {
    clicks += 1000000;
    document.getElementById("score").innerHTML = clicks;
})


// Automatic incremenatation functions
let intervalId = null;
let automaticValue = 0;

function startIncrement() {
  intervalId = setInterval(() => {
    clicks = clicks + automaticValue;
    document.getElementById("score").innerHTML = clicks;
    upgradeCheck(clicks);
  }, 1000);
};
function stopIncrement() {
  clearInterval(intervalId);
};

// functions
function changePage (x) {
    showPageNumber.forEach((page) => {
        page.innerHTML = "Current page: "+x
    });
}

function upgrade (cost, addVal) {
    clicks = clicks - cost;
    document.getElementById("score").innerHTML = clicks;
    value += addVal;
    document.getElementById("clickValue").innerHTML = "Click Value: "+value;
}

function automaticUpgrade (x) {
    if(controlNumber == 0) {
        controlNumber = 1
        automaticValue = automaticValue + x;
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
        startIncrement();
        let gainPerSecond = document.getElementById("gain");
        gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
    } else {
        automaticValue = automaticValue + x;
        let gainPerSecond = document.getElementById("gain");
        gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
    }
}

