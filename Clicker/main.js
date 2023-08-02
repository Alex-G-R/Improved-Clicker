
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

// setings
const openSettings = document.getElementById("settings-button")
const settingsWin = document.getElementById("settings-gui")
let settingsStatus = 0;

openSettings.addEventListener("click", e => {
    if( settingsStatus == 0) {
        settingsWin.style.display = "block";
        settingsStatus = 1;
    } else if ( settingsStatus == 1){
        settingsWin.style.display = "none";
        settingsStatus = 0;
    }
});


// language
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

// sound mute
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

// pop up collectables system
const yellowSquare = document.getElementById("yellow-square");
yellowSquare.addEventListener("click", onClickYellowSquare);

function getRandomPosition() {
    const winWidth = window.innerWidth - 70;
    const winHeight = window.innerHeight - 70;
    const randomX = Math.floor(Math.random() * winWidth);
    const randomY = Math.floor(Math.random() * winHeight);
    return { x: randomX, y: randomY};
}

function showYellowSquare() {
    const yellowSquare = document.getElementById("yellow-square");
    const position = getRandomPosition();
    yellowSquare.style.left = position.x + "px";
    yellowSquare.style.top = position.y + "px";
    yellowSquare.style.display = "flex";

    const randomDuration = Math.floor(Math.random() * 6000) + 5000; // Between 5 to 10 seconds
    setTimeout(hideYellowSquare, randomDuration);
}

function hideYellowSquare() {
    const yellowSquare = document.getElementById("yellow-square");
    yellowSquare.style.display = "none";
}

function onClickYellowSquare() {
    clicks = clicks + value * currentMultiplayer * Math.floor(Math.random()*14)
    hideYellowSquare();
    if(soundStatus == 0) {
        document.getElementById("bonus").play();
    }
}

setInterval(showYellowSquare, 10000); // Repeat the process every 10 seconds

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
    autoUpgrade(2300000,25000, 0.0007)
})
automaticUpgrade9.addEventListener("click", e => {
    autoUpgrade(7000000,100000, 0.0008)
})
automaticUpgrade10.addEventListener("click", e => {
    autoUpgrade(25000000,400000, 0.0009)
})
automaticUpgrade11.addEventListener("click", e => {
    autoUpgrade(150000000,2500000, 0.001)
})
automaticUpgrade12.addEventListener("click", e => {
    autoUpgrade(600000000,12000000, 0.003)
})
automaticUpgrade13.addEventListener("click", e => {
    autoUpgrade(10000000000,250000000, 0.006)
})
automaticUpgrade14.addEventListener("click", e => {
    autoUpgrade(40000000000,1000000000, 0.009)
})
automaticUpgrade15.addEventListener("click", e => {
    autoUpgrade(180000000000,5000000000, 0.01)
})
automaticUpgrade16.addEventListener("click", e => {
    autoUpgrade(800000000000,25000000000, 0.03)
})
automaticUpgrade17.addEventListener("click", e => {
    autoUpgrade(7000000000000,50000000000, 0.07)
})
automaticUpgrade18.addEventListener("click", e => {
    autoUpgrade(120000000000000,500000000000, 0.2)
})

//cheats
//export const cheat = document.getElementById("cheat");
//export const cheat2 = document.getElementById("cheat2");
//cheat.addEventListener("click", e => {
//    clicks += 100000;
//    document.getElementById("score").innerHTML = clicks.toFixed(2);
//})
//cheat2.addEventListener("click", e => {
//    clicks += 500000000000;
//    document.getElementById("score").innerHTML = clicks.toFixed(2);
//})


// Automatic incremenatation functions
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
        if(soundStatus == 0) {
            document.getElementById("upgradeMusic").play();
        }
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
