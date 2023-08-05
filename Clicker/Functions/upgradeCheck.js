import {
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
} from "../Common/constants.js";

export function upgradeCheck(clicks) {
    document.getElementById("score").innerHTML = clicks.toFixed(2);

    function checkUpgradeCondition(upgradeButton, upgradeCost) {
        if (clicks >= upgradeCost) {
            upgradeButton.style.backgroundColor = 'lightgreen';
        } else {
            upgradeButton.style.backgroundColor = 'red';
        }
    }

    checkUpgradeCondition(up1, 100);
    checkUpgradeCondition(up2, 475);
    checkUpgradeCondition(up3, 900);
    checkUpgradeCondition(up4, 4250);
    checkUpgradeCondition(up5, 8000);
    checkUpgradeCondition(up6, 75000);
    checkUpgradeCondition(up7, 700000);
    checkUpgradeCondition(up8, 3200000);
    checkUpgradeCondition(up9, 15000000);
    checkUpgradeCondition(up10, 50000000);
    checkUpgradeCondition(up11, 400000000);
    checkUpgradeCondition(up12, 3000000000);
    checkUpgradeCondition(up13, 14000000000);
    checkUpgradeCondition(up14, 60000000000);
    checkUpgradeCondition(up15, 300000000000);
    checkUpgradeCondition(up16, 1000000000000);
    checkUpgradeCondition(up17, 9000000000000);
    checkUpgradeCondition(up18, 150000000000000);

    function checkAutoUpgradeCondition(autoUpgradeButton, upgradeCost) {
        if (clicks >= upgradeCost) {
            autoUpgradeButton.style.backgroundColor = 'lightgreen';
        } else {
            autoUpgradeButton.style.backgroundColor = 'red';
        }
    }

    checkAutoUpgradeCondition(automaticUpgrade1, 75);
    checkAutoUpgradeCondition(automaticUpgrade2, 350);
    checkAutoUpgradeCondition(automaticUpgrade3, 1000);
    checkAutoUpgradeCondition(automaticUpgrade4, 3500);
    checkAutoUpgradeCondition(automaticUpgrade5, 10000);
    checkAutoUpgradeCondition(automaticUpgrade6, 60000);
    checkAutoUpgradeCondition(automaticUpgrade7, 500000);
    checkAutoUpgradeCondition(automaticUpgrade8, 2300000);
    checkAutoUpgradeCondition(automaticUpgrade9, 7000000);
    checkAutoUpgradeCondition(automaticUpgrade10, 25000000);
    checkAutoUpgradeCondition(automaticUpgrade11, 150000000);
    checkAutoUpgradeCondition(automaticUpgrade12, 600000000);
    checkAutoUpgradeCondition(automaticUpgrade13, 10000000000);
    checkAutoUpgradeCondition(automaticUpgrade14, 40000000000);
    checkAutoUpgradeCondition(automaticUpgrade15, 180000000000);
    checkAutoUpgradeCondition(automaticUpgrade16, 800000000000);
    checkAutoUpgradeCondition(automaticUpgrade17, 7000000000000);
    checkAutoUpgradeCondition(automaticUpgrade18, 120000000000000);
}
