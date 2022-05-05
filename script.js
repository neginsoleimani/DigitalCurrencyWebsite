let all = document.getElementById("all")
let hotest = document.getElementById("hotest")
let myChoice = document.getElementById("myChoice")
let mostProfit = document.getElementById("mostProfit")
let mostLoss = document.getElementById("mostLoss")
let tableContainer = document.querySelector(".table-container")
let baseTable = document.getElementById("baseTable")
let myChoiceContainer = document.querySelector(".Mychoice-container")
let notFound = document.querySelector(".notFound")

all.addEventListener("click", addAll)
hotest.addEventListener("click", addHotest)
myChoice.addEventListener("click", addMyChoice)
mostProfit.addEventListener("click", addMostProfit)
mostLoss.addEventListener("click", addMostLoss)

function addAll() {
    all.classList.add("active")
    myChoice.classList.remove("active")
    mostLoss.classList.remove("active")
    mostProfit.classList.remove("active")
    hotest.classList.remove("active")
    baseTable.style.display = "block"
    myChoiceContainer.style.display = "none"
    notFound.style.display = "none"
}


function addHotest() {
    all.classList.remove("active")
    myChoice.classList.remove("active")
    mostLoss.classList.remove("active")
    mostProfit.classList.remove("active")
    hotest.classList.add("active")
    baseTable.style.display = "none"
    myChoiceContainer.style.display = "none"
    notFound.style.display = "flex"
}


function addMyChoice() {
    all.classList.remove("active")
    myChoice.classList.add("active")
    mostLoss.classList.remove("active")
    mostProfit.classList.remove("active")
    hotest.classList.remove("active")
    baseTable.style.display = "none"
    myChoiceContainer.style.display = "flex"
    notFound.style.display = "none"

}

function addMostProfit() {
    all.classList.remove("active")
    myChoice.classList.remove("active")
    mostLoss.classList.remove("active")
    mostProfit.classList.add("active")
    hotest.classList.remove("active")
    baseTable.style.display = "none"
    myChoiceContainer.style.display = "none"
    notFound.style.display = "flex"
}

function addMostLoss() {
    all.classList.remove("active")
    myChoice.classList.remove("active")
    mostLoss.classList.add("active")
    mostProfit.classList.remove("active")
    hotest.classList.remove("active")
    baseTable.style.display = "none"
    myChoiceContainer.style.display = "none"
    notFound.style.display = "flex"
}


fetch("https://api.wallex.ir/v1/markets")
    .then((response) => response.json())
    .then((data) => {
        data = data.result.symbols;
        console.log(data)
        var coins = [
            "BTCTMN",
            "ETHUSDT",
            "LTCUSDT",
            "DASHUSDT",
            "ADAUSDT",
            "CAKEUSDT",
            "ATOMUSDT",
            "BCHUSDT",
            "BNBUSDT",
            "EOSUSDT",
            "LINKUSDT",
            "SANDUSDT",
        ];

        coins = coins.map((coin) => {
            return {
                name: data[coin].faBaseAsset,
                price: Math.round(data[coin].stats.askPrice),
                high: data[coin].stats["24h_ch"] + "%",
                low: Math.round(data[coin].stats["24h_quoteVolume"]),
                week: data[coin].stats["7d_ch"] + "%",
            };
        });

        coins.forEach((coin) => {
            var tag = createTag(coin);
            document.querySelector("table tbody").appendChild(tag);
        });

    });

function createTag(coin) {
    var newTr = document.createElement("tr");
    Object.values(coin).forEach((element) => {
        var newTd = document.createElement("td");
        var newBtn = document.createElement("button");
        newTd.innerHTML = element;
        newTr.appendChild(newTd);
    });
    return newTr;
};





// let chart = document.getElementById("chart").getContext("2d")
// let char1 = new Chart(chart,{
//     type:"line",
//     data:{
//         labels:[
//             "BTCUSDT",
//             "ETHUSDT",
//             "LTCUSDT",
//             "DASHUSDT",
//             "ADAUSDT",
//             "CAKEUSDT",
//             "ATOMUSDT",
//             "BCHUSDT",
//             "BNBUSDT",
//             "EOSUSDT",
//             "LINKUSDT",
//             "SANDUSDT",
//           ],
//         datasets:[{
//             label:"Digital Currency",
//             data:["16","20","89","120","200"],
//             backgroundColor:["blue"],
//         }]
//     }
// })

