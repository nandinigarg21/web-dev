url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_YmDDOQ53V2ORAoTPnzY4M8vJOBhlmqbFi6NNmUBp";

const data = {
      "AUD": 1.499530299,
      "BGN": 1.8159102914,
      "BRL": 5.675890728,
      "CAD": 1.3674902515,
      "CHF": 0.9035601313,
      "CNY": 7.26957113,
      "CZK": 23.3735231151,
      "DKK": 6.9382011568,
      "EUR": 0.9301501723,
      "GBP": 0.7880001144,
      "HKD": 7.8111514875,
      "HRK": 6.6708409896,
      "HUF": 367.0646784606,
      "IDR": 16370.852968544,
      "ILS": 3.7653607238,
      "INR": 83.4196298669,
      "ISK": 138.8359799715,
      "JPY": 161.4800511881,
      "KRW": 1384.0810167659,
      "MXN": 18.2566235269,
      "MYR": 4.7171007348,
      "NOK": 10.6624718455,
      "NZD": 1.6437402813,
      "PHP": 58.7880566132,
      "PLN": 4.0090407568,
      "RON": 4.6283506954,
      "RUB": 87.8426943018,
      "SEK": 10.5702017728,
      "SGD": 1.3556602244,
      "THB": 36.7988155002,
      "TRY": 32.5235854344,
      "USD": 1,
      "ZAR": 18.597672041
    }

// url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency=" + currency
// let response = await fetch(url)
// let rJson = await response.json()  
  
const key = Object.keys(data);

var first = document.getElementById("first");
var second = document.getElementById("second")

for(var i=0 ; i< Object.keys(data).length ; i++){
  var options = key[i];
  var option = document.createElement("option");
  option.textContent = options;
  option.value=options;
  first.appendChild(option);
  }

for(var i=0 ; i< Object.keys(data).length ; i++){
    var options = key[i];
    var option = document.createElement("option");
    option.textContent = options;
    option.value=options;
    second.appendChild(option);
    }

var button = document.getElementById("button");
button.addEventListener("click",(e)=>{
  e.preventDefault()
  const value = parseInt(document.querySelector("input[name='input']").value);
  const c1 = document.querySelector("select[name='first']").value;
  const c2 = document.querySelector("select[name='second']").value;
  let cv= (value/data[c1]*data[c2]);
  let cvs = cv.toString();
  const output = document.querySelector(".output");
  output.innerHTML = cv;

  
  
});
