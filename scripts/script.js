console.log("Hi Barbie!");

//---------------- KLEDINGKAST OUTFITS ----------------//
var debutOutfit = document.querySelector("ul li:nth-of-type(1) button");
var chirurgOutfit = document.querySelector("ul li:nth-of-type(2) button");
var zwemmerOutfit = document.querySelector("ul li:nth-of-type(3) button");
var presidentOutfit = document.querySelector("ul li:nth-of-type(4) button");
var schermerOutfit = document.querySelector("ul li:nth-of-type(5) button");
var pandemieOutfit = document.querySelector("ul li:nth-of-type(6) button");

//---------------- DIAMANTEN STEENTJES ----------------//
var rozeDiamant = document.querySelector("section:nth-of-type(3) button:nth-of-type(1)");
var geleDiamant = document.querySelector("section:nth-of-type(3) button:nth-of-type(2)");

//---------------- GLITTER REGEN ----------------//
var glitterRegenBG = document.querySelector("header img:first-of-type");

//---------------- SFX ----------------//
var glitterSound = document.querySelector("audio:nth-of-type(1)");
var hiBarbieSound = document.querySelector("audio:nth-of-type(2)");
var barbiegirlSong = new Audio("sfx/song-barbie-girl.mp3");

var barbieMuziek = "uit";

//---------------- INFORMATIE TEKST DETAIL ----------------//
var titelElement = document.querySelector("h2");
var tekstElement = document.querySelector("section:nth-of-type(2) p");

//---------------- GIF ANIMATIE ----------------//
var margotGIF = document.querySelector("section:nth-of-type(2) button");
// het GIF plaatje valt soms weg en ik heb geen idee waar het dan aan ligt. Sam had mij geholpen en het gefixt en later deed 'ie het weer niet terwijl ik niks had veranderd ? Dus ik hoop dat die te zien is voor jullie!


//---------------- FUNCTIONS & EVENTLISTENERS ----------------//

//-- Barbie outfits
debutOutfit.addEventListener("click", function debutOutfitSelect() {
    console.log("debut outfit is geselecteerd");
    tekstElement.textContent = "Debut outfit from 1959. This is Barbie's (my) first outfit. It's a black and white striped swimsuit. This is also shown in the Barbie movie starring Margot Robbie and Ryan Gosling."
    glitterSound.play();

    margotGIF.classList.remove("hidden");
    glitterRegenBG.classList.add("hidden");
});

chirurgOutfit.addEventListener("click", function chirurgOutfitSelect() {
    console.log("chirurg outfit is geselecteerd");
    tekstElement.textContent = "Barbie as a surgeon in 1973. At her debut, Barbie was marketed as a fashion model doll, but that changed in the early 1970s and the decision was made to give Barbie a series of careers. After noting a lack of women doctors during a hospital stay, surgeon Barbie was created in 1973 by Carol Spencer, who was one of the chief Barbie designers from 1963 to 1998. Yay, thank you my dear Carol!"
    glitterSound.play();

    margotGIF.classList.add("hidden");
    glitterRegenBG.classList.add("hidden");
});

zwemmerOutfit.addEventListener("click", function zwemmerOutfitSelect() {
    console.log("zwemmer outfit is geselecteerd");
    tekstElement.textContent = "This is Barbie's outfit when she was a Olympic Swimmer in 2001. The reason for this outfit release was because of the 2000 Summer Olympics in Sydney, Australia."
    glitterSound.play();

    margotGIF.classList.add("hidden");
    glitterRegenBG.classList.add("hidden");
})

presidentOutfit.addEventListener("click", function presidentOutfitSelect() {
    console.log("president outfit is geselecteerd");
    tekstElement.textContent = "President Candidate Barbie debuted in 2004, an election year. The presidential election was between George W. Bush and John Kerry. As of 2020, this is the only presidential election since 1988 in which the Republicans won the popular vote."
    glitterSound.play();

    margotGIF.classList.add("hidden");
    glitterRegenBG.classList.add("hidden");
})

schermerOutfit.addEventListener("click", function schermerOutfit() {
    console.log("schermer outfit is geselecteerd");
    tekstElement.textContent = "In 2017 the first Barbie wearing a hijab got released. The hijabi is modeled after US Olympic fencer Ibtihaj Muhammad to honor Muhammad for embracing what makes her stand out and being an inspiration to many girls."
    glitterSound.play();

    margotGIF.classList.add("hidden");
    glitterRegenBG.classList.add("hidden");
})

pandemieOutfit.addEventListener("click", function pandemieOutfitSelect() {
    console.log("pandemie frontline worker outfit is geselecteerd");
    tekstElement.textContent = "A line of dolls to honor frontline workers during the pandemic in 2021. One of the dolls is modeled after Sarah Gilbert, a professor of vaccinology at Oxford University who cocreated the AstraZeneca vaccine. #ThankYouHeroes. Mattel, the toy manufacturer of Barbie, also donated and gave financial support to the First Responders Chidlren's Foundation."
    glitterSound.play();

    margotGIF.classList.add("hidden");
    glitterRegenBG.classList.add("hidden");
})

//--- Audio stukje uit de Barbie film als Easter Egg element
margotGIF.addEventListener("click", function hiBarbieKen() {
    console.log("Margot Robbie and Ryan Gosling saying hi to eachother");
    hiBarbieSound.play();
})

//--- Diamanten steentjes Easter Egg elementen
function glitterRegen() {
    if (glitterRegenBG.classList.contains("hidden")) { // Leo heeft mij geholpen met deze if else, ik kan zelf niet precies uitleggen wat "contains" in houdt.
        glitterRegenBG.classList.remove("hidden");
    } else {
        glitterRegenBG.classList.add("hidden");
    }
}

rozeDiamant.addEventListener("click", glitterRegen);



function barbieGirl() {
    if (barbieMuziek == "uit") {
        barbiegirlSong.play();
        barbieMuziek == "aan";

    } else {
        barbiegirlSong.pause();
        barbieMuziek == "uit"; // Het liedje wilt niet meer uit wanneer ik weer op de gele diamant klik, geen idee waarom niet.
    }
}

geleDiamant.addEventListener("click", barbieGirl);