// Pozovi api i uzmi 100 objekta
// 2. Prikazi rezultate ispo search polja
// 3. Search kroz rezultate (moze da smanjuje broj kako kucash)
// const result = document.querySelector(".result");
const resultList = document.getElementById("result");
const search = document.getElementById("search");
let resultTwo = [];
search.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    console.log(searchString);
    const filtered = resultTwo.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
            // character.house.toLowerCase().in(searchString)
        )
    })
    displayResult(filtered)
})
async function getApi() {
    try {
        const res = await fetch(" http://hp-api.herokuapp.com/api/characters");
        resultTwo = await res.json();
        resultTwo = resultTwo.slice(0, 100);
        console.log(resultTwo)
        displayResult(resultTwo);
    } catch (err) {
        console.error(err);
    }
}


const displayResult = (results) => {
    const htmlString = results.map((result) => {
        return `<li class="result" >
            <p2>${result.name}</p2>
            <h2> ${result.house}</h2>
            </li> `;
    }).join('');
    resultList.innerHTML = htmlString;
};
getApi();
