const reviews = [

    {
        name: "Teszt Elek",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi iste ullam laudantium iusto perspiciatis eaque cum blanditiis in cupiditate temporibus quisquam at exercitationem eius illum aperiam, minus, quod tempore? Debitis exercitationem asperiores natus facilis fugiat neque, consequuntur temporibus magni blanditiis commodi quae fugit saepe, dolores unde. Molestiae illo quam fugiat? Quae, porro soluta beatae odio illum nihil! Velit beatae molestiae fugit asperiores accusantium corrupti esse repellat, nobis cum dolorem molestias optio odit pariatur illum qui cumque impedit quod ex!"
    },
    {
        name: "Török Bálint",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi iste ullam laudantium iusto perspiciatis eaque cum blanditiis in cupiditate temporibus quisquam at exercitationem eius illum aperiam, minus, quod tempore? Debitis exercitationem asperiores natus facilis fugiat neque, consequuntur temporibus magni blanditiis commodi quae fugit saepe, dolores unde. Molestiae illo quam fugiat? Quae, porro soluta beatae odio illum nihil! Velit beatae molestiae fugit asperiores accusantium corrupti esse repellat, nobis cum dolorem molestias optio odit pariatur illum qui cumque impedit quod ex!"
    },
    {
        name: "Szent Endre",
        job: "Manuális tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum excepturi iste ullam laudantium iusto perspiciatis eaque cum blanditiis in cupiditate temporibus quisquam at exercitationem eius illum aperiam, minus, quod tempore? Debitis exercitationem asperiores natus facilis fugiat neque, consequuntur temporibus magni blanditiis commodi quae fugit saepe, dolores unde. Molestiae illo quam fugiat? Quae, porro soluta beatae odio illum nihil! Velit beatae molestiae fugit asperiores accusantium corrupti esse repellat, nobis cum dolorem molestias optio odit pariatur illum qui cumque impedit quod ex!"
    }

];

//Eltárolom változókba azokat a html elemeket, melyeket használni akarok
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");

//Kiindulópont felvétele -> ez fogja jelölni, hogy a tömbön belül melyik elem legyen a kezdő érték (melyik embert lássuk először).
let current = 0;

//Kiinduló elem (ember) betöltése
window.addEventListener("load", () =>   {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;

})

//Irunk egy függvényt, amivel ki tudjuk választani a következő emberünket és a hozzá köthető adatokat.
function showPerson(person) {

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
    
}

//Gombnyomásra ugorjunk a következő emberre.

nextBtn.addEventListener("click", () => {

    //A kiinduló értéket növeljük 1-el -> lépünk egyet előre az objektumok között.
    current++;

    if (current > reviews.length - 1)    {

        current = 0;

    }
    showPerson(current);

})

//Gombnyomásra ugorjunk vissza az előző emberre.

prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0) {
        current = reviews.length - 1;
    }
    showPerson(current);
    
})