/* ===================================
   DOWRY CALCULATOR 3000™
   PART 1 - CORE SYSTEM
=================================== */

/* ===================================
   ELEMENTS
=================================== */

const genderSelection =
document.getElementById("genderSelection");

const mainForm =
document.getElementById("mainForm");

const maleBtn =
document.getElementById("maleBtn");

const femaleBtn =
document.getElementById("femaleBtn");

const character =
document.getElementById("character");

const head =
document.getElementById("head");

const heightSlider =
document.getElementById("height");

const skinToneSlider =
document.getElementById("skinTone");

/* ===================================
   GLOBAL DATA
=================================== */

let selectedGender = "";

/* ===================================
   INITIAL STATE
=================================== */

mainForm.style.display = "none";

/* ===================================
   GENDER SELECTION
=================================== */

maleBtn.onclick = function(){

    selectedGender = "Male";

    genderSelection.style.display =
    "none";

    mainForm.style.display =
    "block";

};

femaleBtn.onclick = function(){

    selectedGender = "Female";

    genderSelection.style.display =
    "none";

    mainForm.style.display =
    "block";

};

/* ===================================
   SKIN TONES
=================================== */

const skinTones = [

    "#f7e0c3",

    "#e8c095",

    "#cf9662",

    "#9f6c43",

    "#6a4327"

];

function updateSkinTone(){

    const tone =
    Number(
        skinToneSlider.value
    );

    head.style.background =
    skinTones[tone - 1];

}

skinToneSlider.addEventListener(

    "input",

    updateSkinTone

);

/* ===================================
   HEIGHT SYSTEM
=================================== */

function updateHeight(){

    const height =
    Number(
        heightSlider.value
    );

    const scale =
    height / 170;

    character.style.scale =
    scale;

}

heightSlider.addEventListener(

    "input",

    updateHeight

);

/* ===================================
   INITIAL LOAD
=================================== */

updateSkinTone();

updateHeight();

console.log(
"✅ Part 1 Loaded"
);
/* ===================================
   PART 2 - AVATAR SYSTEM
=================================== */

/* ===================================
   ELEMENTS
=================================== */

const hairSlider =
document.getElementById("hairSlider");

const hairLeft =
document.getElementById("hairLeft");

const hairMiddle =
document.getElementById("hairMiddle");

const hairRight =
document.getElementById("hairRight");

const degree =
document.getElementById("degree");

const degreeIcon =
document.getElementById("degreeIcon");

const team =
document.getElementById("team");

// const teamIcon =
// document.getElementById("teamIcon");

const liveRemark =
document.getElementById("liveRemark");

/* ===================================
   DEGREE ICONS
=================================== */

const degreeIcons = {

    "Computer Engineering":"💻",

    "Mechanical Engineering":"🔧",

    "Civil Engineering":"🏗️",

    "Electrical Engineering":"⚡",

    "BCom":"📊",

    "BBA":"💼",

    "BA":"📚",

    "BSc":"🔬",

    "MBA":"📈",

    "MBBS":"🩺",

    "Law":"⚖️",

    "CA":"🧮",

    "BSc":"🔬",
   
    "MSc":"🧪",

    "Other":"🎓"

};

/* ===================================
   TEAM ICONS
=================================== */

// const teamIcons = {

//     "Ferrari":"🔴",

//     "Mercedes":"⚫",

//     "Red Bull":"🐂",

//     "McLaren":"🟠",

//     "Williams":"🔵",

//     "Aston Martin":"🟢",

//     "Alpine":"💙",

//     "Haas":"⚪",

//     "RB":"🪽",

//     "Sauber / Audi":"⚙️"

// 

/* ===================================
   HAIR SYSTEM
=================================== */

function updateHair(){

    const value =
    Number(
        hairSlider.value
    );

    /* Full Hair */

    if(value >= 80){

        hairMiddle.style.width =
        "50px";

        hairLeft.style.width =
        "30px";

        hairRight.style.width =
        "30px";

        hairLeft.style.left =
        "75px";

        hairRight.style.left =
        "155px";

        liveRemark.innerHTML =
        "💇 Hairline still under warranty.";

    }

    /* Slight Recession */

    else if(value >= 60){

        hairMiddle.style.width =
        "35px";

        hairLeft.style.width =
        "30px";

        hairRight.style.width =
        "30px";

        hairLeft.style.left =
        "80px";

        hairRight.style.left =
        "150px";

        liveRemark.innerHTML =
        "🙂 Minor hair recession detected.";

    }

    /* Visible Bald Spot */

    else if(value >= 40){

        hairMiddle.style.width =
        "15px";

        hairLeft.style.width =
        "30px";

        hairRight.style.width =
        "30px";

        hairLeft.style.left =
        "88px";

        hairRight.style.left =
        "142px";

        liveRemark.innerHTML =
        "😬 Genetics have entered the chat.";

    }

    /* Middle Gone */

    else if(value >= 20){

        hairMiddle.style.width =
        "0px";

        hairLeft.style.width =
        "28px";

        hairRight.style.width =
        "28px";

        hairLeft.style.left =
        "95px";

        hairRight.style.left =
        "137px";

        liveRemark.innerHTML =
        "📉 Hairline currently following the stock market.";

    }

    /* Solar Panel */

    else{

        hairMiddle.style.width =
        "0px";

        hairLeft.style.width =
        "12px";

        hairRight.style.width =
        "12px";

        hairLeft.style.left =
        "105px";

        hairRight.style.left =
        "125px";

        liveRemark.innerHTML =
        "☀️ Solar panel mode activated.";

    }

}

/* ===================================
   DEGREE ICON UPDATE
=================================== */

function updateDegree(){

    degreeIcon.textContent =
    degreeIcons[
        degree.value
    ];

}

/* ===================================
   TEAM ICON UPDATE
=================================== */

// function updateTeam(){

//     teamIcon.textContent =
//     teamIcons[
//         team.value
//     ];

// }

/* ===================================
   EXTRA LIVE REMARKS
=================================== */

function updateLiveStatus(){

    const degreeValue =
    degree.value;

    const teamValue =
    team.value;

    if(degreeValue === "BCom"){

        liveRemark.innerHTML =
        "📊 Future billionaire according to LinkedIn.";

    }

    if(degreeValue === "MBA"){

        liveRemark.innerHTML =
        "📈 Candidate says synergy without laughing.";

    }

    if(degreeValue === "Mechanical Engineering"){

        liveRemark.innerHTML =
        "🔧 Can explain torque for 40 minutes.";

    }

    if(teamValue === "Ferrari"){

        liveRemark.innerHTML =
        "🔴 Ferrari fan detected. Emotional damage expected.";

    }

    if(teamValue === "Mercedes"){

        liveRemark.innerHTML =
        "⚫ Still mentally living in 2020.";

    }

    if(teamValue === "Red Bull"){

        liveRemark.innerHTML =
        "🐂 Candidate wins arguments using DRS.";

    }

}

/* ===================================
   EVENTS
=================================== */

hairSlider.addEventListener(

    "input",

    updateHair

);

degree.addEventListener(

    "change",

    function(){

        updateDegree();

        updateLiveStatus();

    }

);

// team.addEventListener(

//     "change",

//     function(){

//         updateTeam();

//         updateLiveStatus();

//     }

// );

/* ===================================
   INITIAL LOAD
=================================== */

updateHair();

updateDegree();

updateTeam();

updateLiveStatus();

console.log(
"✅ Part 2 Loaded"
);
/* ===================================
   PART 3 - DOWRY ENGINE
=================================== */

function calculateDowry(){

    let value = 0;

    /* =====================
       INPUTS
    ===================== */

    const age =
    Number(
        document.getElementById("age").value
    );

    const salary =
    Number(
        document.getElementById("salary").value
    );

    const backlogs =
    Number(
        document.getElementById("backlogs").value
    );

    const degreeValue =
    document.getElementById("degree").value;

    const wealth =
    document.getElementById("wealth").value;

    const cooking =
    document.getElementById("cooking").value;

    const gym =
    document.getElementById("gym").value;

    const teamValue =
    document.getElementById("team").value;

    const driverValue =
    document.getElementById("driver").value;

    const hair =
    Number(
        document.getElementById("hairSlider").value
    );

    /* =====================
       AGE
    ===================== */

    if(selectedGender === "Male"){

        value +=
        (age - 21) * 100000;

    }

    if(selectedGender === "Female"){

        value +=
        (age - 18) * 100000;

    }

    /* =====================
       SALARY
    ===================== */

    value += salary * 20;

    if(salary >= 50000)
        value += 500000;

    if(salary >= 100000)
        value += 1500000;

    if(salary >= 200000)
        value += 3000000;

    if(salary >= 500000)
        value += 10000000;

    /* =====================
       DEGREE
    ===================== */

    const degreeScores = {

        "Computer Engineering":1500000,

        "Mechanical Engineering":1000000,

        "Civil Engineering":700000,

        "Electrical Engineering":1200000,

        "BCom":500000,

        "BBA":600000,

        "BA":250000,

        "BSc":700000,

        "MBA":2500000,

        "MBBS":6000000,

        "Law":3500000,

        "CA":5000000,

        "BSc":1000000,

        "MSc":1800000,

        "Other":100000

    };

    value +=
    degreeScores[degreeValue] || 0;

    /* =====================
       BACKLOGS
    ===================== */

    value -=
    backlogs * 300000;

    if(backlogs === 0)
        value += 1000000;

    /* =====================
       HAIR BONUS
    ===================== */

    value += hair * 25000;

    /* =====================
       COOKING
    ===================== */

    const cookingScores = {

        "Can't Boil Water":-1500000,

        "Burnt Maggi Expert":-750000,

        "Maggi Specialist":0,

        "Tea & Maggi Expert":300000,

        "Basic Indian Meals":1000000,

        "Can Feed Entire Family":2000000,

        "MasterChef Material":5000000

    };

    value +=
    cookingScores[cooking] || 0;

    /* =====================
       GYM
    ===================== */

    const gymScores = {

        "Never":-500000,

        "Sometimes":0,

        "Weekly":500000,

        "Daily":1000000,

        "Lives In Gym":2000000

    };

    value +=
    gymScores[gym] || 0;

    /* =====================
       WEALTH
    ===================== */

    const wealthScores = {

        "Student":0,

        "Middle Class":500000,

        "Upper Middle Class":1500000,

        "Owns One Plot":5000000,

        "Owns Multiple Plots":15000000,

        "Builder Uncle":50000000,

        "Political Connections DLC":100000000

    };

    value +=
    wealthScores[wealth] || 0;

    /* =====================
       F1 TEAM
    ===================== */

    // switch(teamValue){

    //     case "Ferrari":

    //         value -= 500000;

    //         break;

    //     case "Mercedes":

    //         value += 200000;

    //         break;

    //     case "Red Bull":

    //         value += 500000;

    //         break;

    //     case "McLaren":

    //         value += 300000;

    //         break;

    //     case "Williams":

    //         value += 100000;

    //         break;

    //     case "Aston Martin":

    //         value -= 100000;

    //         break;

    // }

    /* =====================
       DRIVER
    ===================== */

    // switch(driverValue){

    //     case "Lewis Hamilton":

    //         value += 700000;

    //         break;

    //     case "Max Verstappen":

    //         value += 800000;

    //         break;

    //     case "Charles Leclerc":

    //         value -= 300000;

    //         break;

    //     case "Fernando Alonso":

    //         value += 400000;

    //         break;

    //     case "Lance Stroll":

    //         value -= 2500000;

    //         break;

    // }

    /* =====================
       SPECIAL COMBOS
    ===================== */

    if(
        degreeValue ===
        "Computer Engineering"
        &&
        salary === 0
    ){

        value -= 2000000;

    }

    if(
        degreeValue ===
        "Mechanical Engineering"
        &&
        gym ===
        "Lives In Gym"
    ){

        value += 2000000;

    }

    if(
        degreeValue ===
        "MBA"
        &&
        hair < 25
    ){

        value += 1500000;

    }

    if(
        teamValue ===
        "Ferrari"
        &&
        backlogs >= 5
    ){

        value -= 1500000;

    }

    return value;

}

/* ===================================
   FORMAT MONEY
=================================== */

function formatMoney(value){

    const sign =
    value < 0 ? "-" : "";

    value =
    Math.abs(value);

    if(value >= 10000000){

        return sign +
        "₹" +
        (value / 10000000)
        .toFixed(2)
        +
        " Crore";

    }

    if(value >= 100000){

        return sign +
        "₹" +
        (value / 100000)
        .toFixed(2)
        +
        " Lakh";

    }

    return sign +
    "₹" +
    value.toLocaleString();

}

console.log(
"✅ Part 3 Loaded"
);
/* ===================================
   PART 4 - ROAST DATABASE
=================================== */

/* ===================================
   DEGREE ROASTS
=================================== */

const degreeRoasts = {

"Computer Engineering":[

"Built 14 projects. Employer still unconvinced.",

"Currently debugging both code and career.",

"Startup coming soon™."
],

"Mechanical Engineering":[

"Can explain torque for 45 minutes. Nobody asked.",

"Gym membership stronger than placement record.",

"Owns more tools than social skills."
],

"Civil Engineering":[

"Building roads. Career road still under construction.",

"Infrastructure improving faster than placements."
],

"Electrical Engineering":[

"May shock relatives during wedding discussions.",

"Candidate occasionally speaks in circuit diagrams."
],

"BCom":[

"Future billionaire according to LinkedIn.",

"Employment status currently buffering.",

"Excel warrior unlocked."
],

"BBA":[

"Business plans exceed available business.",

"Future Shark Tank contestant."
],

"BA":[

"Committee still asking what the plan is.",

"Strong theoretical foundations."
],

"BSc":[

"Scientist by qualification. Family still confused.",

"Research funding unavailable."
],

"MBA":[

"Paid lakhs to learn synergy.",

"Can convert any conversation into a meeting."
],

"MBBS":[

"Hasn't slept since admission.",

"Family now treats candidate as Google."
],

"Law":[

"Already prepared objections.",

"Can argue professionally."
],

"CA":[

"Calculating taxes even during festivals.",

"Every relative wants free advice."
],

"BSc":[
"Scientist by qualification, unemployed by tradition.",
"Research paper pending. Family pressure active."
],

"MSc":[
"Overqualified for relatives, underpaid by industry.",
"Added two more years just to avoid adulthood."
],

"Other":[

"Committee unable to identify species.",

"Further classification required."
]

};

/* ===================================
   TEAM ROASTS
=================================== */

const teamRoasts = {

"Ferrari":[

"We are checking.",

"Trusts Ferrari strategy voluntarily.",

"Experiences emotional damage every Sunday.",

"Next year is definitely Ferrari's year."
],

"Mercedes":[

"Still mentally living in 2020.",

"Hamilton dominance flashbacks detected."
],

"Red Bull":[

"Winning addiction detected.",

"DRS activated during arguments."
],

"McLaren":[

"Candidate recently discovered happiness.",

"Years of suffering finally rewarded."
],

"Williams":[

"Underdog enjoyer detected.",

"Character development specialist."
],

"Aston Martin":[

"Alonso hopium levels critical.",

"Trusting development plan."
],

"Haas":[

"Nobody knows why you're here. Respect."
],

"RB":[

"Committee forgot this team existed."
],

"Alpine":[

"French chaos enthusiast."
],

"Sauber / Audi":[

"Investing in future potential."
]

};

/* ===================================
   DRIVER ROASTS
=================================== */

const driverRoasts = {

"Lewis Hamilton":[

"Still counts Abu Dhabi 2021 manually.",

"Eight-time champion according to personal calculations."
],

"Charles Leclerc":[

"Trust issues with race engineers.",

"Pain tolerance level: Ferrari fan."
],

"Max Verstappen":[

"Probably overtook three people while filling this form.",

"Winning isn't enough. Must dominate."
],

"Lando Norris":[

"Almost won. Character development continues.",

"Professional almost merchant."
],

"Oscar Piastri":[

"Quietly stealing everyone's future."
],

"Fernando Alonso":[

"Has survived multiple F1 generations.",

"Never count him out."
],

"George Russell":[

"Complaint filed successfully.",

"Stewards have received your report."
],

"Carlos Sainz":[

"Smooth operator detected."
],

"Yuki Tsunoda":[

"Radio messages classified."
],

"Alex Albon":[

"Surviving impossible situations."
],

"Lance Stroll":[

"Psychological evaluation recommended.",

"We genuinely cannot explain this choice.",

"Daddy's credit card detected."
],

"Kimi Antonelli":[

"Age is merely a suggestion."
],

"Pierre Gasly":[

"Recovery arc complete."
],

"Nico Hulkenberg":[

"Podium loading..."
],

"Esteban Ocon":[

"Teammates nervous already."
]

};

/* ===================================
   FAMILY REACTIONS
=================================== */

const familyReactions = [

"✅ Rishta approved.",

"⚠️ Father checking salary again.",

"🏠 Needs own house.",

"👵 Mother impressed.",

"📋 Under review.",

"🚫 Rejected due to Ferrari support.",

"💼 Needs government job.",

"💰 Dowry negotiations entering overtime."
];

/* ===================================
   MEMES
=================================== */

const lowTierMemes = [

"Beta tumse na ho payega.",

"Committee shocked but not surprised.",

"Aap Mumbai aa rahe hain.",

"Market closed due to lack of interest."
];

const mediumTierMemes = [

"Potential hai bacche mein.",

"Aunty panel divided hai.",

"Market cautiously optimistic.",

"Theek hai... zyada uchhal mat."
];

const highTierMemes = [

"Baap re baap!",

"Aaj khush toh bahut hoge tum.",

"Mohalle mein discussion chal raha hai.",

"Candidate trending locally."
];

const godTierMemes = [

"System phaad diya.",

"Candidate ko Z+ security do.",

"Pura mohalla interested hai.",

"SEBI investigating unusual activity."
];

/* ===================================
   RANDOM PICKER
=================================== */

function randomItem(arr){

    return arr[
        Math.floor(
            Math.random() * arr.length
        )
    ];

}

/* ===================================
   ROAST PACKAGE
=================================== */

function generateRoasts(){

    const degreeValue =
    degree.value;

    const teamValue =
    team.value;

    const driverValue =
    document
    .getElementById("driver")
    .value;

    let roasts = [];

    roasts.push(
        randomItem(
            degreeRoasts[degreeValue]
        )
    );

    roasts.push(
        randomItem(
            teamRoasts[teamValue]
        )
    );

    roasts.push(
        randomItem(
            driverRoasts[driverValue]
        )
    );

    return roasts;

}

/* ===================================
   MEME SELECTOR
=================================== */

function getMeme(value){

    if(value < 0)
        return "💀 Candidate now comes with cashback offer.";

    if(value < 1000000)
        return randomItem(lowTierMemes);

    if(value < 5000000)
        return randomItem(mediumTierMemes);

    if(value < 15000000)
        return randomItem(highTierMemes);

    return randomItem(godTierMemes);

}

console.log(
"✅ Part 4 Loaded"
);
/* ===================================
   PART 5 - REPORT GENERATOR
=================================== */

/* ===================================
   MARKET SENTIMENT
=================================== */

function getMarketSentiment(value){

    if(value < 0)
        return "💀 MARKET COLLAPSE";

    if(value < 1000000)
        return "📉 BEARISH";

    if(value < 5000000)
        return "😐 STABLE";

    if(value < 15000000)
        return "📈 BULLISH";

    return "🚀 TO THE MOON";
}

/* ===================================
   AUNTY CONFIDENCE
=================================== */

function getAuntyConfidence(value){

    if(value < 0)
        return "2%";

    if(value < 1000000)
        return "25%";

    if(value < 5000000)
        return "55%";

    if(value < 15000000)
        return "82%";

    return "99%";
}

/* ===================================
   LONG REPORT
=================================== */

function generateParagraph(value){

    const name =
    document.getElementById("name").value
    || "Unknown Candidate";

    const degreeValue =
    degree.value;

    const teamValue =
    team.value;

    const driverValue =
    document
    .getElementById("driver")
    .value;

    const salary =
    Number(
        document
        .getElementById("salary")
        .value
    );

    const cooking =
    document
    .getElementById("cooking")
    .value;

    const gym =
    document
    .getElementById("gym")
    .value;

    const backlogs =
    Number(
        document
        .getElementById("backlogs")
        .value
    );

    return `

    After extensive investigation involving
    aunties, neighbours, WhatsApp groups,
    relatives and one suspicious uncle,
    the committee has concluded that
    ${name} possesses a ${degreeValue}
    background.

    Monthly income currently stands at
    ₹${salary.toLocaleString()}.

    Educational history includes
    ${backlogs} backlog(s).

    Cooking ability has been classified
    as "${cooking}" while gym attendance
    is rated "${gym}".

    Formula 1 affiliation has been linked
    to ${teamValue} with driver support
    for ${driverValue}.

    Based on currently available evidence,
    analysts remain cautiously optimistic
    regarding future market performance.

    `;
}

/* ===================================
   REPORT HTML
=================================== */

function generateReport(){

    const value =
    calculateDowry();

    const roasts =
    generateRoasts();

    const meme =
    getMeme(value);

    const sentiment =
    getMarketSentiment(value);

    const confidence =
    getAuntyConfidence(value);

    const familyReaction =
    randomItem(
        familyReactions
    );

    const name =
    document.getElementById("name")
    .value.trim()
    || "CANDIDATE";

    let roastHTML = "";

    roasts.forEach(function(roast){

        roastHTML += `

        <div class="roastBox">

            🤣 ${roast}

        </div>

        `;

    });

    return `

    <div class="resultPrice">

        ${formatMoney(value)}

    </div>

    <div class="marketBadge">

        💰 Dowry Value:
        <b>${formatMoney(value)}</b>

    </div>

    <div class="marketBadge">

        📊 Market Sentiment:
        <b>${sentiment}</b>

    </div>

    <div class="marketBadge">

        👵 Aunty Confidence:
        <b>${confidence}</b>

    </div>

    <div class="marketBadge">

        🏷 Candidate Code:
        <b>${name.toUpperCase()}</b>

    </div>

    <div class="roastBox">

        <h3>
            📋 Investigation Report
        </h3>

        <br>

        ${generateParagraph(value)}

    </div>

    ${roastHTML}

    <div class="roastBox">

        <h3>
            👨‍👩‍👧 Family Verdict
        </h3>

        <br>

        ${familyReaction}

    </div>

    <div class="roastBox">

        <h3>
            🎭 Meme Reaction
        </h3>

        <br>

        ${meme}

    </div>

    `;

}

/* ===================================
   LANCE STROLL SPECIAL
=================================== */

function strollEmergency(){

    const driverValue =
    document
    .getElementById("driver")
    .value;

    if(
        driverValue !==
        "Lance Stroll"
    ){
        return "";
    }

    return `

    <div class="roastBox">

        <h3>
            🚨 SPECIAL INVESTIGATION
        </h3>

        <br>

        FIA has been informed of
        your decision.

    </div>

    `;

}

console.log(
"✅ Part 5 Loaded"
);
/* ===================================
   PART 6 - EXECUTION SYSTEM
=================================== */

/* ===================================
   ELEMENTS
=================================== */

const calculateBtn =
document.getElementById("calculateBtn");

const loadingScreen =
document.getElementById("loadingScreen");

const resultCard =
document.getElementById("resultCard");

const resultContent =
document.getElementById("resultContent");

/* ===================================
   SOUND SYSTEM
=================================== */

const countingSound =
new Audio("sounds/counting.mp3");

const kachingSound =
new Audio("sounds/kaching.mp3");

const failSound =
new Audio("sounds/fail.mp3");

const policeSound =
new Audio("sounds/police.mp3");

/* ===================================
   LOADING MESSAGES
=================================== */

const loadingMessages = [

    "Checking salary...",

    "Consulting aunties...",

    "Reviewing WhatsApp groups...",

    "Checking hairline integrity...",

    "Analyzing cooking skills...",

    "Verifying F1 emotional damage...",

    "Checking Ferrari trauma...",

    "Generating judgement..."
];

/* ===================================
   SHOW LOADING
=================================== */

function startLoading(){

    resultCard.style.display =
    "none";

    loadingScreen.style.display =
    "block";

    countingSound.currentTime = 0;

    countingSound.play();

    const paragraphs =
    loadingScreen.querySelectorAll("p");

    paragraphs.forEach(function(p,index){

        p.innerHTML =
        loadingMessages[index]
        ||
        "Processing...";

    });

}

/* ===================================
   SHOW RESULT
=================================== */

function showResult(){

    const value =
    calculateDowry();

    loadingScreen.style.display =
    "none";

    resultCard.style.display =
    "block";

    let html =
    generateReport();

    html +=
    strollEmergency();

    resultContent.innerHTML =
    html;

    /* Sound Effects */

    if(value >= 2000000){

        kachingSound.play();

    }

    if(value < 0){

        failSound.play();

    }

    resultCard.scrollIntoView({

        behavior:"smooth"

    });

}

/* ===================================
   LEGAL AGE CHECK
=================================== */

function ageIsLegal(){

    const age =
    Number(
        document
        .getElementById("age")
        .value
    );

    if(
        selectedGender === "Male"
        &&
        age < 21
    ){
        return false;
    }

    if(
        selectedGender === "Female"
        &&
        age < 18
    ){
        return false;
    }

    return true;

}

/* ===================================
   BUTTON
=================================== */

calculateBtn.addEventListener(

    "click",

    function(){

        if(
            ageIsLegal() === false
        ){

            policeSound.currentTime = 0;

            policeSound.play();

            alert(
                "🚨 Illegal marriage age detected!"
            );

            return;

        }

        startLoading();

        setTimeout(

            function(){

                showResult();

            },

            3000

        );

    }

);

/* ===================================
   SAFETY CHECK
=================================== */

window.addEventListener(

    "load",

    function(){

        loadingScreen.style.display =
        "none";

        resultCard.style.display =
        "none";

    }

);

/* ===================================
   READY
=================================== */

console.log(
"✅ Part 6 Loaded"
);

console.log(
"💰 Dowry Calculator Ready"
);

console.log(
"🚔 Police Monitoring Active"
);

console.log(
"🏎 Ferrari Depression Module Enabled"
);
const status =
document.getElementById("status");

const backlogContainer =
document.getElementById("backlogContainer");

status.addEventListener(

    "change",

    function(){

        if(
            status.value ===
            "Working Professional"
        ){

            backlogContainer.style.display =
            "none";

        }

        else{

            backlogContainer.style.display =
            "block";

        }

    }

);
