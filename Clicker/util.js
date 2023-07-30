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

export function upgradeCheck (clicks) {
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

    if(clicks >= 700000) {
        document.getElementById("score").innerHTML = clicks;
        up7.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up7.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 3200000) {
        document.getElementById("score").innerHTML = clicks;
        up8.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up8.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 15000000) {
        document.getElementById("score").innerHTML = clicks;
        up9.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up9.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 50000000) {
        document.getElementById("score").innerHTML = clicks;
        up10.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up10.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 400000000) {
        document.getElementById("score").innerHTML = clicks;
        up11.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up11.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks;
    }

    if(clicks >= 3000000000) {
        document.getElementById("score").innerHTML = clicks;
        up12.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks;
    }
    else {
        document.getElementById("score").innerHTML = clicks;
        up12.style.backgroundColor='red'
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




