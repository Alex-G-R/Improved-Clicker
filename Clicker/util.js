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

export function upgradeCheck (clicks) {
    if(clicks >= 100) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up1.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up1.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 475) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up2.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up2.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 900) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up3.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up3.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 4250) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up4.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up4.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    

    if(clicks >= 8000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up5.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up5.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    

    if(clicks >= 75000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up6.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up6.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 700000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up7.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up7.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 3200000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up8.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up8.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 15000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up9.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up9.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 50000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up10.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up10.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 400000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up11.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up11.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 3000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up12.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up12.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 14000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up13.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up13.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 60000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up14.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up14.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 300000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up15.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up15.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 1000000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up16.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up16.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 9000000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up17.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up17.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 150000000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up18.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        up18.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    // auto upgrades
    if(clicks >= 75) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade1.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade1.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 350) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade2.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade2.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 1000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade3.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade3.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 3500) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade4.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade4.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 10000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade5.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade5.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 60000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade6.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade6.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 500000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade7.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade7.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 2300000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade8.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade8.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    
    if(clicks >= 7000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade9.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade9.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
     
    if(clicks >= 25000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade10.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade10.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 150000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade11.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade11.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
   
    if(clicks >= 600000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade12.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade12.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 10000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade13.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade13.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 40000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade14.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade14.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 180000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade15.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade15.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 800000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade16.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade16.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 7000000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade17.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade17.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }

    if(clicks >= 120000000000000) {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade18.style.backgroundColor='lightgreen'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
    else {
        document.getElementById("score").innerHTML = clicks.toFixed(2);
        automaticUpgrade18.style.backgroundColor='red'
        document.getElementById("score").innerHTML = clicks.toFixed(2);
    }
}




