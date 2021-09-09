function display(country) {
    let country_name = country[0].name;
    let capital = country[0].capital;
    let population = country[0].population;
    let flag = country[0].flag;
    let currency_name = country[0].currencies[0].name;
    let symbol = country[0].currencies[0].symbol;
    let alt_name=country[0].altSpellings;
    let region=country[0].region;
    console.log(country_name, population, capital, currency_name, symbol,alt_name);
    let htmldata = `<div class="card" style="width: 30rem; ">
<img src="${flag}" class="card-img-top" alt="...">
<div class="card-body">
<h1 class="card-title text-center"><b><em>${country_name}</b></em></h1>
<p class="card-text"><b>CAPITAL</b>  :${capital}</p>
<p class="card-text"><b>ALSO KNOWN AS </b>  :${alt_name}</p>
<p class="card-text"><b>POPULATION</b> :${population}</p>
<p class="card-text"><b>CURRENCY </b>  :${currency_name}</p>
<p class="card-text"><b>SYMBOL </b>:${symbol}</p>
<p class="card-text"><b>CONTINENT</b>  :${region}</p>


</div>
</div>`
    document.querySelector("#result").innerHTML = htmldata
}

function fetchCountry() {
    let country_name = cntry.value;
    let url = `https://restcountries.eu/rest/v2/name/${country_name}?fullText=true`
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send();
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            if (request.status > 199 & request.status < 300) {
                let data = JSON.parse(request.responseText)
                display(data);
            }
        }
    }
}