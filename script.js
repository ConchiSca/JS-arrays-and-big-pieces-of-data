const landenLijst = randomPersonData.map((randomPersonData) => {
    return randomPersonData.region;
})

console.log(landenLijst);


const steenbokVrouwen = randomPersonData.filter((randomPersonData) => {
        return randomPersonData.gender === "female"
    }).filter((randomPersonData) => {
        return randomPersonData.age > 30;
    });

console.log(steenbokVrouwen);



const landenLijstButton = document.querySelector("#landenLijstButton");
const steenbokVrouwenButton = document.querySelector("#steenbokVrouwenButton");

const addLandenLijstToDom = () => {
    const landenLijstUl = document.querySelector(".landenLijstUl");
    const getLandenLijst = landenLijst.forEach(regionList => {
        const li = document.createElement("li");
        const liContent = document.createTextNode('country : ${landenLijst.region}');
        li.appendChild(liContent);
        landenLijstUl.append(li);
    });
    
}

landenLijstButton.addEventListener("click", addLandenLijstToDom);

const addSteenbokVrouwenToDom = () => {
    const steenbokVrouwenUl = document.querySelector(".steenbokVrouwenUl");
    const getSteenbokVrouwen = steenbokVrouwen.forEach(womenList => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${randomPersonData.name}, ${randomPersonData.surname}`);
        li.appendChild(liContent);
        steenbokVrouwenUl.append(li);
    });
}

steenbokVrouwenButton.addEventListener("click", addSteenbokVrouwenToDom);


// vanaf hier heb ik wat hints nodig. in de vorige opdrachten is het uiteindelijk 
// goed gegaan maar nu niet. helaas kan ik het probleem niet vinden
// zonden naar de oplossing te kijken!
