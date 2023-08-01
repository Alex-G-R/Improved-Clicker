
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
    up13,
    up14,
    up15,
    up16,
    up17,
    up18,
    automaticUpgrade1,
    automaticUpgrade2,
    automaticUpgrade3,
    automaticUpgrade4,
    automaticUpgrade5,
    automaticUpgrade6,
    automaticUpgrade7,
    automaticUpgrade8,
    automaticUpgrade9,
    automaticUpgrade10,
    automaticUpgrade11,
    automaticUpgrade12,
    automaticUpgrade13,
    automaticUpgrade14,
    automaticUpgrade15,
    automaticUpgrade16,
    automaticUpgrade17,
    automaticUpgrade18,
} from "./common.js";


let clicks = 0;
let allClick = 0;
let totalClick = 0;
let value = 1;


//reset system
const resetButton = document.getElementById("resetButton");
const currentMultiplayerShow = document.getElementById("multiplayer");
const newMultiplayerShow = document.getElementById("multiplayerAfter");

let currentMultiplayer = 1.00;
let newMultiplayer = 1.00;

function afterResetMultiplayer () {
    newMultiplayerShow.innerHTML = "After Reset: x"+newMultiplayer.toFixed(4)
}

resetButton.addEventListener("click", reset)

// any document click will result in incrementing total clicks and checking if upgrades are avelibable
document.addEventListener("click", e =>{
    totalClick += 1;
    document.getElementById("totalClicks").innerHTML = "All Clicks: "+totalClick;
    upgradeCheck(clicks)
    afterResetMultiplayer()
});
document.addEventListener("mouseup", e => {
    clickButton.style.backgroundColor="lawngreen"
});

// clickButton color change onClick
clickButton.addEventListener("mousedown", e => {
    clickButton.style.backgroundColor="rgb(81, 158, 5)"
})
clickButton.addEventListener("mouseup", e => {
    clicks += value * currentMultiplayer;
    document.getElementById("score").innerHTML = clicks.toFixed(2);

    allClick += 1;
    document.getElementById("allClicks").innerHTML = "Clicks: "+allClick;

    upgradeCheck(clicks)

    newMultiplayer = newMultiplayer + 0.00001
})

// page change
let currentPage = 1;
const pageButtonNext = document.querySelectorAll('.buttonPageNext')
const pageButtonPrevious = document.querySelectorAll('.buttonPagePrevious')

const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");
const pageThree = document.getElementById("pageThree");

const showPageNumber = document.querySelectorAll('.pageCounter');

pageButtonNext.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPage == 1) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'block';
            pageThree.style.display = 'none';
            changePage(2);
            currentPage = 2;
        } else if(currentPage == 2) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'none';
            pageThree.style.display = 'block';
            changePage(3);
            currentPage = 3;
        }
    });
});
pageButtonPrevious.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPage == 2) {
            pageOne.style.display = 'block';
            pageTwo.style.display = 'none';
            pageTwo.style.display = 'none';
            changePage(1);
            currentPage = 1;
        } else if(currentPage == 3) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'block';
            pageThree.style.display = 'none';
            changePage(2);
            currentPage = 2;
        }
    });
});
// page change in auto

let currentPageAuto = 1;
const pageButtonNextAuto = document.querySelectorAll('.buttonPageNextAuto')
const pageButtonPreviousAuto = document.querySelectorAll('.buttonPagePreviousAuto')

const autoPageOne = document.getElementById("autoPageOne");
const autoPageTwo = document.getElementById("autoPageTwo");
const autoPageThree = document.getElementById("autoPageThree");

const showPageNumberAuto = document.querySelectorAll('.pageCounter');

pageButtonNextAuto.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPageAuto == 1) {
            autoPageOne.style.display = 'none';
            autoPageTwo.style.display = 'block';
            autoPageThree.style.display = 'none';
            changePageAuto(2);
            currentPageAuto = 2;
        } else if(currentPageAuto == 2) {
            autoPageOne.style.display = 'none';
            autoPageTwo.style.display = 'none';
            autoPageThree.style.display = 'block';
            changePageAuto(3);
            currentPageAuto = 3;
        }
    });
});
pageButtonPreviousAuto.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPageAuto == 2) {
            autoPageOne.style.display = 'block';
            autoPageTwo.style.display = 'none';
            autoPageTwo.style.display = 'none';
            changePageAuto(1);
            currentPageAuto = 1;
        } else if(currentPageAuto == 3) {
            autoPageOne.style.display = 'none';
            autoPageTwo.style.display = 'block';
            autoPageThree.style.display = 'none';
            changePageAuto(2);
            currentPageAuto = 2;
        }
    });
});

// Upgrades
up1.addEventListener("click", e => {
    upgrade(100, 1, 0.0001)
})

up2.addEventListener("click", e => {
    upgrade(475, 5, 0.0002)
})

up3.addEventListener("click", e => {
    upgrade(900, 10, 0.0003)
})

up4.addEventListener("click", e => {
    upgrade(4250, 50, 0.0004)
})

up5.addEventListener("click", e => {
    upgrade(8000, 100, 0.0005)
})

up6.addEventListener("click", e => {
    upgrade(75000, 1000, 0.0006)
})

up7.addEventListener("click", e => {
    upgrade(700000, 10000, 0.0007)
})

up8.addEventListener("click", e => {
    upgrade(3200000, 50000, 0.0008)
})

up9.addEventListener("click", e => {
    upgrade(15000000, 250000, 0.0009)
})

up10.addEventListener("click", e => {
    upgrade(50000000, 1000000, 0.001)
})

up11.addEventListener("click", e => {
    upgrade(400000000, 10000000, 0.003)
})

up12.addEventListener("click", e => {
    upgrade(3000000000, 100000000, 0.005)
})

up13.addEventListener("click", e => {
    upgrade(14000000000, 500000000, 0.007)
})

up14.addEventListener("click", e => {
    upgrade(60000000000, 2000000000, 0.008)
})

up15.addEventListener("click", e => {
    upgrade(300000000000, 10000000000, 0.009)
})

up16.addEventListener("click", e => {
    upgrade(1000000000000, 50000000000, 0.01)
})

up17.addEventListener("click", e => {
    upgrade(9000000000000, 500000000000, 0.08)
})

up18.addEventListener("click", e => {
    upgrade(150000000000000, 10000000000000, 0.5)
})

// auto upgrades
let controlNumber = 0;
automaticUpgrade1.addEventListener("click", e => {
    autoUpgrade(75,1, 0.0001)
})
automaticUpgrade2.addEventListener("click", e => {
    autoUpgrade(350,5, 0.00015)
})
automaticUpgrade3.addEventListener("click", e => {
    autoUpgrade(1000,15, 0.0002)
})
automaticUpgrade4.addEventListener("click", e => {
    autoUpgrade(3500,50, 0.0003)
})
automaticUpgrade5.addEventListener("click", e => {
    autoUpgrade(10000,150, 0.0004)
})
automaticUpgrade6.addEventListener("click", e => {
    autoUpgrade(60000,1000, 0.0005)
})
automaticUpgrade7.addEventListener("click", e => {
    autoUpgrade(500000,10000, 0.0006)
})
automaticUpgrade8.addEventListener("click", e => {
    autoUpgrade(2300000,50000), 0.0007
})
automaticUpgrade9.addEventListener("click", e => {
    autoUpgrade(7000000,200000, 0.0008)
})
automaticUpgrade10.addEventListener("click", e => {
    autoUpgrade(25000000,800000, 0.0009)
})
automaticUpgrade11.addEventListener("click", e => {
    autoUpgrade(150000000,5000000, 0.001)
})
automaticUpgrade12.addEventListener("click", e => {
    autoUpgrade(600000000,25000000, 0.003)
})
automaticUpgrade13.addEventListener("click", e => {
    autoUpgrade(10000000000,500000000, 0.006)
})
automaticUpgrade14.addEventListener("click", e => {
    autoUpgrade(40000000000,2000000000, 0.009)
})
automaticUpgrade15.addEventListener("click", e => {
    autoUpgrade(180000000000,10000000000, 0.01)
})
automaticUpgrade16.addEventListener("click", e => {
    autoUpgrade(800000000000,50000000000, 0.03)
})
automaticUpgrade17.addEventListener("click", e => {
    autoUpgrade(7000000000000,500000000000, 0.07)
})
automaticUpgrade18.addEventListener("click", e => {
    autoUpgrade(120000000000000,10000000000000, 0.2)
})

//cheats
export const cheat = document.getElementById("cheat");
export const cheat2 = document.getElementById("cheat2");
cheat.addEventListener("click", e => {
    clicks += 1000;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
})
cheat2.addEventListener("click", e => {
    clicks += 500000000000;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
})


// Automatic incremenatation functions
let intervalId = null;
let automaticValue = 0;

function startIncrement() {
  intervalId = setInterval(() => {
    clicks = clicks + automaticValue * currentMultiplayer;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
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

function changePageAuto (x) {
    showPageNumberAuto.forEach((page) => {
        page.innerHTML = "Current page: "+x
    });
}

function upgrade (cost, addVal, progress) {
    if(clicks >= cost) {
        clicks = clicks - cost;
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        value += addVal;
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
        newMultiplayer = newMultiplayer + progress
    }
}


let gainPerSecond = document.getElementById("gain");
gainPerSecond.innerHTML = "Gain per sec: 0"; 


function autoUpgrade (cost, gain, progress) {
    if(clicks >= cost) {
        clicks -= cost
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        newMultiplayer = newMultiplayer + progress;
        if (controlNumber == 0) {
            controlNumber = 1;
            automaticValue = automaticValue + gain;
            document.getElementById("clickValue").innerHTML = "Click Value: " + value;
            startIncrement();
            gainPerSecond.innerHTML = "Gain per sec: " + automaticValue;
        } else {
            automaticValue = automaticValue + gain;
            gainPerSecond.innerHTML = "Gain per sec: " + automaticValue;
        }
    }
}


function reset() {
    clicks = 0;
    value = 1;
    document.getElementById("clickValue").innerHTML = "Click Value: " + value;

    currentMultiplayer = newMultiplayer;
    currentMultiplayerShow.innerHTML = "Current Multiplayer: x" + currentMultiplayer.toFixed(4)

    automaticValue = 0;
    controlNumber = 0;
    stopIncrement();
    gainPerSecond.innerHTML = "Gain per sec: 0"; 
}
