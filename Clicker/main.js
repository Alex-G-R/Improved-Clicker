const clickButton = document.getElementById("clickButton");
const up1 = document.getElementById("upgrade1");
const up2 = document.getElementById("upgrade2");
const up3 = document.getElementById("upgrade3");
const up4 = document.getElementById("upgrade4");
const up5 = document.getElementById("upgrade5");
const up6 = document.getElementById("upgrade6");
const cheat = document.getElementById("cheat");
const cheat2 = document.getElementById("cheat2");
const upgrades = document.querySelectorAll(".btnU");  
const automaticUpgrade1 = document.getElementById("automaticUpgrade1");
const automaticUpgrade2 = document.getElementById("automaticUpgrade2");
const automaticUpgrade3 = document.getElementById("automaticUpgrade3");
const automaticUpgrade4 = document.getElementById("automaticUpgrade4");
const automaticUpgrade5 = document.getElementById("automaticUpgrade5");
const automaticUpgrade6 = document.getElementById("automaticUpgrade6");
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let clicks = 0;
let allClick = 0;
let totalClick = 0;
let value = 1;
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// functions
function upgradeCheck () {
    if(clicks >= 100) {
        document.getElementById("score").innerHTML = clicks;
        up1.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up1.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 475) {
        document.getElementById("score").innerHTML = clicks;
        up2.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up2.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 900) {
        document.getElementById("score").innerHTML = clicks;
        up3.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up3.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 4250) {
        document.getElementById("score").innerHTML = clicks;
        up4.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up4.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }
    

    if(clicks >= 8000) {
        document.getElementById("score").innerHTML = clicks;
        up5.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up5.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }
    

    if(clicks >= 75000) {
        document.getElementById("score").innerHTML = clicks;
        up6.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up6.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }
    // auto upgrades
    if(clicks >= 75) {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade1.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade1.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 350) {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade2.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade2.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 1000) {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade3.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade3.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 3500) {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade4.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade4.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 10000) {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade5.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade5.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 60000) {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade6.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        automaticUpgrade6.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    
}
// Automatic incremenatation functions
let intervalId = null;
let automaticValue = 0;

function startIncrement() {
    intervalId = setInterval(() => {
      clicks = clicks + automaticValue;
      document.getElementById("score").innerHTML = clicks;
      upgradeCheck();
    }, 1000);
  };
  function stopIncrement() {
    clearInterval(intervalId);
  };
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// any document click will result in incrementing total clicks and checking if upgrades are avelibable
document.addEventListener("click", e =>{
    totalClick += 1;
    document.getElementById("totalClicks").innerHTML = "All Clicks: "+totalClick;
    upgradeCheck()
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

    upgradeCheck()
})

// Upgrades
up1.addEventListener("click", e => {
    if(clicks >= 100) {
        clicks -= 100
        document.getElementById("score").innerHTML = clicks;
        value += 1
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
    }
})

up2.addEventListener("click", e => {
    if(clicks >= 475) {
        clicks -= 475
        document.getElementById("score").innerHTML = clicks;
        value += 5
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
    }
})

up3.addEventListener("click", e => {
    if(clicks >= 900) {
        clicks -= 900
        document.getElementById("score").innerHTML = clicks;
        value += 10
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
    }
})

up4.addEventListener("click", e => {
    if(clicks >= 4250) {
        clicks -= 4250
        document.getElementById("score").innerHTML = clicks;
        value += 50
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
    }
})

up5.addEventListener("click", e => {
    if(clicks >= 8000) {
        clicks -= 8000
        document.getElementById("score").innerHTML = clicks;
        value += 100
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
    }
})

up6.addEventListener("click", e => {
    if(clicks >= 75000) {
        clicks -= 75000
        document.getElementById("score").innerHTML = clicks;
        value += 1000
        document.getElementById("clickValue").innerHTML = "Click Value: "+value;
    }
})

let controlNumber = 0;
automaticUpgrade1.addEventListener("click", e => {
    if(clicks >= 75) {
        clicks -= 75
        document.getElementById("score").innerHTML = clicks;

        if(controlNumber == 0) {
            controlNumber = 1
            automaticValue = automaticValue + 1;
            document.getElementById("clickValue").innerHTML = "Click Value: "+value;
            startIncrement();
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        } else {
            automaticValue = automaticValue + 1;
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        }
    }
})

automaticUpgrade2.addEventListener("click", e => {
    if(clicks >= 350) {
        clicks -= 350
        document.getElementById("score").innerHTML = clicks;

        if(controlNumber == 0) {
            controlNumber = 1
            automaticValue = automaticValue + 5;
            document.getElementById("clickValue").innerHTML = "Click Value: "+value;
            startIncrement();
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        } else {
            automaticValue = automaticValue + 5;
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        }
    }
})

automaticUpgrade3.addEventListener("click", e => {
    if(clicks >= 1000) {
        clicks -= 1000
        document.getElementById("score").innerHTML = clicks;

        if(controlNumber == 0) {
            controlNumber = 1
            automaticValue = automaticValue + 15;
            document.getElementById("clickValue").innerHTML = "Click Value: "+value;
            startIncrement();
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        } else {
            automaticValue = automaticValue + 15;
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        }
    }
})

automaticUpgrade4.addEventListener("click", e => {
    if(clicks >= 3500) {
        clicks -= 3500
        document.getElementById("score").innerHTML = clicks;

        if(controlNumber == 0) {
            controlNumber = 1
            automaticValue = automaticValue + 50;
            document.getElementById("clickValue").innerHTML = "Click Value: "+value;
            startIncrement();
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        } else {
            automaticValue = automaticValue + 50;
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        }
    }
})

automaticUpgrade5.addEventListener("click", e => {
    if(clicks >= 10000) {
        clicks -= 10000
        document.getElementById("score").innerHTML = clicks;

        if(controlNumber == 0) {
            controlNumber = 1
            automaticValue = automaticValue + 150;
            document.getElementById("clickValue").innerHTML = "Click Value: "+value;
            startIncrement();
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        } else {
            automaticValue = automaticValue + 150;
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        }
    }
})

automaticUpgrade6.addEventListener("click", e => {
    if(clicks >= 60000) {
        clicks -= 60000
        document.getElementById("score").innerHTML = clicks;

        if(controlNumber == 0) {
            controlNumber = 1
            automaticValue = automaticValue + 1000;
            document.getElementById("clickValue").innerHTML = "Click Value: "+value;
            startIncrement();
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        } else {
            automaticValue = automaticValue + 1000;
            let gainPerSecond = document.getElementById("gain");
            gainPerSecond.innerHTML = "Gain per sec: "+automaticValue
        }
    }
})

//cheats
cheat.addEventListener("click", e => {
    clicks += 1000;
    document.getElementById("score").innerHTML = clicks;
})
cheat2.addEventListener("click", e => {
    clicks += 1000000;
    document.getElementById("score").innerHTML = clicks;
})



