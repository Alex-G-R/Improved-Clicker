
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

up13.addEventListener("click", e => {
    if(clicks >= 14000000000) {
        upgrade(14000000000, 500000000)
    }
})

up14.addEventListener("click", e => {
    if(clicks >= 60000000000) {
        upgrade(60000000000, 2000000000)
    }
})

up15.addEventListener("click", e => {
    if(clicks >= 300000000000) {
        upgrade(300000000000, 10000000000)
    }
})

up16.addEventListener("click", e => {
    if(clicks >= 1000000000000) {
        upgrade(1000000000000, 50000000000)
    }
})

up17.addEventListener("click", e => {
    if(clicks >= 9000000000000) {
        upgrade(9000000000000, 500000000000)
    }
})

up18.addEventListener("click", e => {
    if(clicks >= 150000000000000) {
        upgrade(150000000000000, 10000000000000)
    }
})

// auto upgrades
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

automaticUpgrade7.addEventListener("click", e => {
    if(clicks >= 500000) {
        clicks -= 500000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(10000);
    }
})

automaticUpgrade8.addEventListener("click", e => {
    if(clicks >= 2300000) {
        clicks -= 2300000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(50000);
    }
})

automaticUpgrade9.addEventListener("click", e => {
    if(clicks >= 7000000) {
        clicks -= 7000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(200000);
    }
})

automaticUpgrade10.addEventListener("click", e => {
    if(clicks >= 25000000) {
        clicks -= 25000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(800000);
    }
})

automaticUpgrade11.addEventListener("click", e => {
    if(clicks >= 150000000) {
        clicks -= 150000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(5000000);
    }
})

automaticUpgrade12.addEventListener("click", e => {
    if(clicks >= 600000000) {
        clicks -= 600000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(25000000);
    }
})

automaticUpgrade13.addEventListener("click", e => {
    if(clicks >= 10000000000) {
        clicks -= 10000000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(500000000);
    }
})

automaticUpgrade14.addEventListener("click", e => {
    if(clicks >= 40000000000) {
        clicks -= 40000000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(2000000000);
    }
})

automaticUpgrade15.addEventListener("click", e => {
    if(clicks >= 180000000000) {
        clicks -= 180000000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(10000000000);
    }
})

automaticUpgrade16.addEventListener("click", e => {
    if(clicks >= 800000000000) {
        clicks -= 800000000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(50000000000);
    }
})

automaticUpgrade17.addEventListener("click", e => {
    if(clicks >= 7000000000000) {
        clicks -= 7000000000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(500000000000);
    }
})

automaticUpgrade18.addEventListener("click", e => {
    if(clicks >= 120000000000000) {
        clicks -= 120000000000000
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade(10000000000000);
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
    clicks += 500000000000;
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

function changePageAuto (x) {
    showPageNumberAuto.forEach((page) => {
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

