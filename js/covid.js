const APIURL = "https://corona.lmao.ninja/v2/countries/india";

async function getRecords(url){
   const response = await fetch(url);
   const resData = await response.json();
   //console.log(resData);
   showRecords(resData);
}

getRecords(APIURL);

function showRecords(record){
console.log(record);
document.getElementById("main").innerHTML =
`
<div class="case-container">
<h2 class="cases">CASES</h2>
<div class="total-case">
    <h3 class="total-case1">Total Cases</h3>
    <div class="record-cases">${record.cases}</div>
</div>
<div class="cases-per-million">
    <h3 class="cases-per-million1">Cases per Million</h3>
    <div class="record-per-million">${record.casesPerOneMillion}</div>
</div>
<div class="cases-reported-today">
    <h3 class="cases-reported-today1">Cases reported Today</h3>
    <div class="record-today-cases">${record.todayCases}</div>
</div>
<div class="total-recovered">
    <h3 class="total-recovered1">Total Recovered</h3>
    <div class="recovered">${record.recovered}</div>
</div>
<div class="recovered-per-million">
    <h3 class="recovered-per-million1">Recovered per Milllion</h3>
    <div class="recovered-per-one-million">${record.recoveredPerOneMillion}</div>
</div>
<div class="today-recovered">
    <h3 class="today-recovered1">todayRecovered</h3>
    <div class="today-recovered2">${record.todayRecovered}</div>
</div>
<div class="death-per-million">
    <h3 class="death-per-million1">DeathPerMillion</h3>
    <div class="death-per-one-million">${record.deathsPerOneMillion}</div>
</div>
</div>
`    
}