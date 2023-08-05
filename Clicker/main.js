
import { upgradeCheck } from "./Functions/upgradeCheck.js";
import {
    clickButton,
} from "./Common/constants.js";


let clicks = 0;
let allClick = 0;
let totalClick = 0;
let value = 1;

// setings
const openSettings = document.getElementById("settings-button")
const settingsWin = document.getElementById("settings-gui")
let settingsStatus = 0;

openSettings.addEventListener("click", e => {
    if( settingsStatus == 0) {
        settingsWin.style.display = "block";
        settingsStatus = 1;
        langStatus = 0;
    } else if ( settingsStatus == 1){
        settingsWin.style.display = "none";
        languageWin.style.display = "none";
        settingsStatus = 0;
    }
});


// settings - language
const openLanguage = document.getElementById("language");
const languageWin = document.getElementById("language-gui");
let langStatus = 0;

openLanguage.addEventListener("click", e => {
    if( langStatus == 0) {
        languageWin.style.display = "block";
        langStatus = 1;
    } else if ( langStatus == 1){
        languageWin.style.display = "none";
        langStatus = 0;
    }
});

// settings - sound mute
const soundMuteButton = document.getElementById("sound");
let soundStatus = 0;

soundMuteButton.addEventListener("click", e => {
    if(soundStatus == 0) {
        soundMuteButton.style.backgroundColor = "green";
        soundStatus = 1;
    } else if (soundStatus == 1) {
        soundMuteButton.style.backgroundColor = "rgb(162, 77, 77)";
        soundStatus = 0;
    }
});

//reset system
const resetButton = document.getElementById("resetButton");
const currentMultiplayerShow = document.getElementById("multiplayer");
const newMultiplayerShow = document.getElementById("multiplayerAfter");

let currentMultiplayer = 1.00;
let newMultiplayer = 1.00;

function afterResetMultiplayer () {
    newMultiplayerShow.innerHTML = "After Reset: x"+newMultiplayer.toFixed(4);
}

resetButton.addEventListener("click", reset)

function reset() {
    clicks = 0;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
    value = 1;
    document.getElementById("clickValue").innerHTML = "Click Value: " + value;

    currentMultiplayer = newMultiplayer;
    currentMultiplayerShow.innerHTML = "Current Multiplayer: x" + currentMultiplayer.toFixed(4)

    automaticValue = 0;
    controlNumber = 0;
    stopIncrement();
    gainPerSecond.innerHTML = "Gain per sec: 0"; 

    autoPageOne.style.display = 'block';
    autoPageTwo.style.display = 'none';
    autoPageThree.style.display = 'none';
    changePageAuto(1);
    currentPageAuto = 1;
    updateAutoButtonColors()

    pageOne.style.display = 'block';
    pageTwo.style.display = 'none';
    pageThree.style.display = 'none';
    changePage(1);
    currentPage = 1;
    updateButtonColors()

    if(soundStatus == 0) {
        document.getElementById("resetMusic").play();
    }
}

// pop up collectables system
const yellowSquare = document.getElementById("yellow-square");
yellowSquare.addEventListener("click", onClickYellowSquare);

import {
    getRandomPosition,
    hideYellowSquare
} from "./Functions/pop-up-collectables-functions.js";

function showYellowSquare() {
    const yellowSquare = document.getElementById("yellow-square");
    const position = getRandomPosition();
    yellowSquare.style.left = position.x + "px";
    yellowSquare.style.top = position.y + "px";
    yellowSquare.style.display = "flex";

    const randomDuration = Math.floor(Math.random() * 6000) + 5000; // Between 5 to 10 seconds
    setTimeout(hideYellowSquare, randomDuration);
}

function onClickYellowSquare() {
    clicks = clicks + value * currentMultiplayer * Math.floor(Math.random()*14)
    hideYellowSquare();
    document.getElementById("score").innerHTML = clicks.toFixed(2);
    if(soundStatus == 0) {
        document.getElementById("bonus").play();
    }
}

setInterval(showYellowSquare, 10000); // Repeat the process every 10 seconds

// any document click will result in incrementing total clicks and checking if upgrades are avelibable
document.addEventListener("click", e =>{
    totalClick += 1;
    document.getElementById("totalClicks").innerHTML = "All Clicks: "+totalClick;
    const clicks = parseFloat(document.getElementById("score").innerHTML);
    upgradeCheck(clicks);
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

    if(soundStatus == 0) {
        document.getElementById("clickMusic").play();
    }
})

// page change
let currentPage = 1;
const pageButtonNext = document.querySelectorAll('.buttonPageNext')
const pageButtonPrevious = document.querySelectorAll('.buttonPagePrevious')

const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");
const pageThree = document.getElementById("pageThree");

const showPageNumber = document.querySelectorAll('.pageCounter');

function changePage (x) {
    showPageNumber.forEach((page) => {
        page.innerHTML = "Current page: "+x
    });
}

function updateButtonColors() {
    if (currentPage === 1) {
        // On page one - set previous button color to red - next button to default
        pageButtonPrevious.forEach(button => button.style.backgroundColor = 'red');
        pageButtonNext.forEach(button => button.style.backgroundColor = '');
    } else if (currentPage === 2) {
        // On page two - set previous button color to rgb(165, 236, 177) - next button to default
        pageButtonPrevious.forEach(button => button.style.backgroundColor = 'rgb(165, 236, 177)');
        pageButtonNext.forEach(button => button.style.backgroundColor = '');
    } else if (currentPage === 3) {
        // On page three - set next button color to red, previous button to rgb(165, 236, 177)
        pageButtonPrevious.forEach(button => button.style.backgroundColor = 'rgb(165, 236, 177)');
        pageButtonNext.forEach(button => button.style.backgroundColor = 'red');
    }
}

pageButtonNext.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPage == 1) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'block';
            pageThree.style.display = 'none';
            changePage(2);
            currentPage = 2;
            updateButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
        } else if(currentPage == 2) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'none';
            pageThree.style.display = 'block';
            changePage(3);
            currentPage = 3;
            updateButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
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
            updateButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
        } else if(currentPage == 3) {
            pageOne.style.display = 'none';
            pageTwo.style.display = 'block';
            pageThree.style.display = 'none';
            changePage(2);
            currentPage = 2;
            updateButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
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

const showPageNumberAuto = document.querySelectorAll('.pageCounterAuto');

function changePageAuto (numberOfPage) {
    showPageNumberAuto.forEach((page) => {
        page.innerHTML = "Current page: "+numberOfPage
    });
}

function updateAutoButtonColors() {
    if (currentPageAuto === 1) {
        // On auto page one - set previous button color to red - next button to default
        pageButtonPreviousAuto.forEach(button => button.style.backgroundColor = 'red');
        pageButtonNextAuto.forEach(button => button.style.backgroundColor = '');
    } else if (currentPageAuto === 2) {
        // On auto page two - set previous button color to rgb(165, 236, 177) - next button to default
        pageButtonPreviousAuto.forEach(button => button.style.backgroundColor = 'rgb(165, 236, 177)');
        pageButtonNextAuto.forEach(button => button.style.backgroundColor = '');
    } else if (currentPageAuto === 3) {
        // On auto page three - set next button color to red - previous button to rgb(165, 236, 177)
        pageButtonPreviousAuto.forEach(button => button.style.backgroundColor = 'rgb(165, 236, 177)');
        pageButtonNextAuto.forEach(button => button.style.backgroundColor = 'red');
    }
}

pageButtonNextAuto.forEach((button) => {
    button.addEventListener("click", e => {
        if(currentPageAuto == 1) {
            autoPageOne.style.display = 'none';
            autoPageTwo.style.display = 'block';
            autoPageThree.style.display = 'none';
            changePageAuto(2);
            currentPageAuto = 2;
            updateAutoButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
        } else if(currentPageAuto == 2) {
            autoPageOne.style.display = 'none';
            autoPageTwo.style.display = 'none';
            autoPageThree.style.display = 'block';
            changePageAuto(3);
            currentPageAuto = 3;
            updateAutoButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
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
            updateAutoButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
        } else if(currentPageAuto == 3) {
            autoPageOne.style.display = 'none';
            autoPageTwo.style.display = 'block';
            autoPageThree.style.display = 'none';
            changePageAuto(2);
            currentPageAuto = 2;
            updateAutoButtonColors()
            if(soundStatus == 0) {
                document.getElementById("page").play();
            }
        }
    });
});

// Upgrades system

function upgrade(cost, addVal, progress) {
    if (clicks >= cost) {
        clicks = clicks - cost;
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        value += Number(addVal); // Convert addVal to a number using Number function
        document.getElementById("clickValue").innerHTML = "Click Value: " + value;
        newMultiplayer = newMultiplayer + progress;
        if (soundStatus == 0) {
            document.getElementById("upgradeMusic").play();
        }
    }
}

const upgradeButtonsContainer = document.querySelectorAll(".btnU");

upgradeButtonsContainer.forEach(button => {
    button.addEventListener("click", e => {
        const { cost, addval, progress } = e.target.dataset;
        upgrade(parseInt(cost), parseFloat(addval), parseFloat(progress));
    });
});


// auto upgrades
let gainPerSecond = document.getElementById("gain");
gainPerSecond.innerHTML = "Gain per sec: 0"; 
let controlNumber = 0;

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
            if(soundStatus == 0) {
                document.getElementById("upgradeMusic").play();
            }
        } else {
            automaticValue = automaticValue + gain;
            gainPerSecond.innerHTML = "Gain per sec: " + automaticValue;
            if(soundStatus == 0) {
                document.getElementById("upgradeMusic").play();
            }
        }
    }
}

const autoUpgradeButtonsContainer = document.querySelectorAll(".btnUA");

autoUpgradeButtonsContainer.forEach(button => {
    button.addEventListener("click", e => {
        const { cost, gain, progress } = e.target.dataset;
        autoUpgrade(parseInt(cost), parseFloat(gain), parseFloat(progress));
    });
});


// Auto upgrades - Automatic incremenatation functions
let intervalId = null;
let automaticValue = 0;

function startIncrement() {
  intervalId = setInterval(() => {
    clicks = clicks + automaticValue * currentMultiplayer;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
    upgradeCheck(clicks);
    if(soundStatus == 0) {
        document.getElementById("clickMusic").play();
    }
  }, 1000);
};
function stopIncrement() {
  clearInterval(intervalId);
};


// cheats, only for testing 
const cheat = document.getElementById("cheat");
const cheat2 = document.getElementById("cheat2");
cheat.addEventListener("click", e => {
    clicks += 100000;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
})
cheat2.addEventListener("click", e => {
    clicks += 500000000000;
    document.getElementById("score").innerHTML = clicks.toFixed(2);
})
