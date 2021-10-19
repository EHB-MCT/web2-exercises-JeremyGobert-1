"use strict";



window.onload = () => {

    let SFW = document.getElementById('sfw');
    let NSFW = document.getElementById('nsfw');

    function getting(type) {
        async function getWaifu() {
            let response = await fetch(`https://api.waifu.pics/${type}/waifu`);
            if (response.status === 200) {
                return await response.json();
            } else {
                console.log('failed to get waifu');
            }
        }

        getWaifu().then(data => {
            let link = data.url;
            console.log(link);
            setHtmlData(link);
        });
    }
    SFW.addEventListener("click", (event) => {
        event.preventDefault();
        getting('sfw');
    });

    NSFW.addEventListener("click", (event) => {
        event.preventDefault();
        var warning = window.confirm("Bent u zeker?");
        if (warning) {
            var finalWarning = window.confirm("bent u HEEL zeker?");
            if (finalWarning) {
                alert("lol, deze functie staat als comment in code");
                /* getting('nsfw'); */
            } else {
                alert("toch nog opt nippertje verandert!");
            }
        } else {
            alert("goeie keuze!");
        }
    });

    function setHtmlData(img) {
        const resultElement = document.getElementById('img');
        let htmlString = `<img src="${img}" alt="">`;
        resultElement.innerHTML = htmlString;
    }
};