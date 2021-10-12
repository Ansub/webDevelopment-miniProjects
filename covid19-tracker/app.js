
const cases = () => {
    fetch ('https://api.covid19api.com/summary')
    .then((res) => res.json())
    .then((data) =>  {
        document.getElementById('case-num').innerHTML = data.Global.TotalConfirmed
        document.getElementById('death-num').innerHTML = data.Global.TotalDeaths
        document.getElementById('recovered-num').innerHTML = data.Global.TotalRecovered
    })
}

document.getElementById("button").addEventListener("click", cases);

