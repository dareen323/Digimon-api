function Digimon(image, level, name) {
	this.image = image;
	this.level = level;
	this.name = name;
}
let digimonArr = [];
fetch("https://digimon-api.vercel.app/api/digimon")
	.then((dataAPI) => dataAPI.json())
	.then((data) => {
		console.log(data);
		for (let i = 0; i < 20; i++) {
			let newDigimon = new Digimon(data[i].img, data[i].level, data[i].name);
			digimonArr.push(newDigimon);
		}
		console.log(digimonArr);

		digimonArr.map(render);

	});

let cardContainer = document.getElementById("cardDiv");

function render(digimonArr) {
	let card = document.createElement("div");
	cardContainer.append(card);

	let img = document.createElement("img");
	img.setAttribute("src", digimonArr.image);
	card.append(img);

	let cardText = document.createElement("div");
	card.append(cardText);

	let name1 = document.createElement("h4");
	name1.textContent = "Name: " + digimonArr.name;
	cardText.append(name1);

	let p = document.createElement("p");
	p.textContent = "Level: " + digimonArr.level;
	cardText.append(p);
}