const countries = [
    {
        "code": "USD",
        "name": "US Dollar"
    },
    {
        "code": "JPY",
        "name": "Japanese Yen"
    },
    {
        "code": "BGN",
        "name": "Bulgarian Lev"
    },
    {
        "code": "CZK",
        "name": "Czech Republic Koruna"
    },
    {
        "code": "DKK",
        "name": "Danish Krone"
    },
    {
        "code": "GBP",
        "name": "British Pound Sterling"
    },
    {
        "code": "HUF",
        "name": "Hungarian Forint"
    },
    {
        "code": "PLN",
        "name": "Polish Zloty"
    },
    {
        "code": "RON",
        "name": "Romanian Leu"
    },
    {
        "code": "SEK",
        "name": "Swedish Krona"
    },
    {
        "code": "CHF",
        "name": "Swiss Franc"
    },
    {
        "code": "ISK",
        "name": "Icelandic Króna"
    },
    {
        "code": "NOK",
        "name": "Norwegian Krone"
    },
    {
        "code": "HRK",
        "name": "Croatian Kuna"
    },
    {
        "code": "RUB",
        "name": "Russian Ruble"
    },
    {
        "code": "TRY",
        "name": "Turkish Lira"
    },
    {
        "code": "AUD",
        "name": "Australian Dollar"
    },
    {
        "code": "BRL",
        "name": "Brazilian Real"
    },
    {
        "code": "CAD",
        "name": "Canadian Dollar"
    },
    {
        "code": "CNY",
        "name": "Chinese Yuan"
    },
    {
        "code": "HKD",
        "name": "Hong Kong Dollar"
    },
    {
        "code": "IDR",
        "name": "Indonesian Rupiah"
    },
    {
        "code": "ILS",
        "name": "Israeli New Sheqel"
    },
    {
        "code": "INR",
        "name": "Indian Rupee"
    },
    {
        "code": "KRW",
        "name": "South Korean Won"
    },
    {
        "code": "MXN",
        "name": "Mexican Peso"
    },
    {
        "code": "MYR",
        "name": "Malaysian Ringgit"
    },
    {
        "code": "NZD",
        "name": "New Zealand Dollar"
    },
    {
        "code": "PHP",
        "name": "Philippine Peso"
    },
    {
        "code": "SGD",
        "name": "Singapore Dollar"
    },
    {
        "code": "THB",
        "name": "Thai Baht"
    },
    {
        "code": "ZAR",
        "name": "South African Rand"
    },
    {
        "code": "EUR",
        "name": "Euro"
    }
]

const fromAmountElement = document.querySelector('#amount');
const convertedAmountElement = document.querySelector('#convertedAmount');
const fromcurrencyElement = document.querySelector('#fromcurrency');
const tocurrencyElement = document.querySelector('#tocurrency');
const ResultElement = document.querySelector('#result');



countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    option1.value = country.code;
    option2.value = country.code;

    option1.textContent = (country.code + "  (" + country.name + ")");
    option2.textContent = (country.code + "  (" + country.name + ")");

    fromcurrencyElement.appendChild(option1);
    tocurrencyElement.appendChild(option2);


    fromAmountElement.value = "USD";
    tocurrencyElement.value = "INR";
    fromAmountElement.value = 1

})


// Fetching Data and Conversion

const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromcurrency = fromcurrencyElement.value;
    const tocurrency = tocurrencyElement.value;


    const response = await fetch('https://v6.exchangerate-api.com/v6/d90cc8503f76c5272d2c8985/latest/'.concat(fromcurrency));

    const data = await response.json();

    

    const conversionRate = data.conversion_rates[tocurrency];

    const convertedAmount = (amount * conversionRate);

    convertedAmountElement.value = convertedAmount;


    document.getElementById("main").innerHTML = "** 1 " + fromcurrency + " = " + tocurrency + " " + conversionRate;


}




