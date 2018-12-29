async function returnToChannels(confKey) {
    const check = document.getElementById('returnButton');
    check.addEventListener('click', async function(e){
        e.preventDefault();
        document.getElementById('returnButtons').style.opacity = 0;
        document.getElementById(confKey).style.display = "none";
        document.getElementById('mainHeader').style.display = "flex";
        document.getElementById('startButtons').style.opacity = 1;
    });
}

let flow;

document.getElementById('visHBO').style.display = "none";
document.getElementById('visNetflix').style.display = "none";
document.getElementById('visCW').style.display = "none";
document.getElementById('visFox').style.display = "none";
document.getElementById('returnButtons').style.opacity = 0;

document.getElementById("hboButton").addEventListener('click', function(event){
    console.log('VIEW HBO');
    document.getElementById('startButtons').style.opacity = 0;
    document.getElementById('mainHeader').style.display = "none";
    document.getElementById('visHBO').style.display = "flex";
    document.getElementById('returnButtons').style.opacity = 1;  // return to previous page

    returnToChannels('visHBO')
});


document.getElementById("netflixButton").addEventListener('click', (event) => {
    console.log('VIEW NETFLIX');
    document.getElementById('startButtons').style.opacity = 0;
    document.getElementById('mainHeader').style.display= "none";
    document.getElementById('visNetflix').style.display = "flex";
    document.getElementById('returnButtons').style.opacity = 1;  // return to previous page

    returnToChannels('visNetflix')
});

document.getElementById("cwButton").addEventListener('click', (event) => {
    console.log('VIEW CW');
    document.getElementById('startButtons').style.opacity = 0;
    document.getElementById('mainHeader').style.display = "none";
    document.getElementById('visCW').style.display = "flex";

    document.getElementById('returnButtons').style.opacity = 1;  // return to previous page

    returnToChannels('visCW')
});

document.getElementById("foxButton").addEventListener('click', (event) => {
    console.log('VIEW FOX');
    document.getElementById('startButtons').style.opacity = 0;
    document.getElementById('mainHeader').style.display = "none";
    document.getElementById('visFox').style.display = "flex";

    document.getElementById('returnButtons').style.opacity = 1;  // return to previous page

    returnToChannels('visFox')
});

document.getElementById("amcButton").addEventListener('click', (event) => {
    console.log('VIEW AMC');
    document.getElementById('startButtons').style.opacity = 0;
    document.getElementById('mainHeader').style.display = "none";

    document.getElementById('returnButtons').style.opacity = 1;  // return to previous page

    // returnToChannels('visHBO')
});
