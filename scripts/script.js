console.log("Hi Barbie! Hi Ken!");
// console.log(poppenButton);

//---------------- KLEDINGKAST OUTFITS ----------------//
var debutOutfit = document.querySelector("ul button:nth-of-type(1)");
var chirurgOutfit = document.querySelector("ul button:nth-of-type(2)");
var zwemmerOutfit = document.querySelector("ul button:nth-of-type(3)");
var presidentOutfit = document.querySelector("ul button:nth-of-type(4)");
var schermerOutfit = document.querySelector("ul button:nth-of-type(5)");
var pandemieOutfit = document.querySelector("ul button:nth-of-type(6)");

//---------------- INFORMATIE TEKST DETAIL ----------------//
var titelElement = document.querySelector("h2");
var tekstElement = document.querySelector("section:nth-of-type(2) p");

//---------------- STATUS OUTFIT ----------------//
var outfitSelected = "debut";


//---------------- FUNCTIONS ----------------//
function debutOutfitSelect() {
    if (outfitSelected == "debut") {
        console.log("debut outfit is geselecteerd");
        tekstElement.textContent = "Debut outfit from 1959. This is Barbie's first outfit. It's a black and white striped swimsuit. This is also shown in the Barbie movie starring Margot Robbie and Ryan Gosling."
    } else {
        console.log("debut outfit is niet meer geselecteerd");
    }
    

}

debutOutfit.addEventListener("click", debutOutfitSelect);

function chirurgOutfitSelect() {
    if (outfitSelected == "chirurg") {
        console.log("chirurg outfit is geselecteerd");
        tekstElement.textContent = "Barbie as a surgeon in 1973. At her debut, Barbie was marketed as a fashion model doll, but that changed in the early 1970s and the decision was made to give Barbie a series of careers. After noting a lack of women doctors during a hospital stay, surgeon Barbie was created in 1973 by Carol Spencer, who was one of the chief Barbie designers from 1963 to 1998."
    } else {
        console.log("chirurg outfit is niet meer geselecteerd");
    }
}

chirurgOutfit.addEventListener("click", chirurgOutfitSelect);


















// function popInfo() {
//     poppenButton[0].classList.add("hidden")
// }

// poppenButton[0].addEventListener("click", popInfo());

// poppenButton[0].onclick = popInfo


// function popInfo() {
//     poppenButton[0].classList.toggle("informatieOverMij")
// }

