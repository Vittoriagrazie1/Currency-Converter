 async function convertCurrency (){
    const amount = 
    document.getElementById('amount').value;
    const from =
    document.getElementById('fromCurrency').value;
    const to = 
    document.getElementById('toCurrency').value;

    const apiKey = "cac653330e19bfdcb512703c";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;

   try {
    const response = await fetch(url);
    const data = await response.json(); 

    const rate = data.conversion_rates[to];
    const result = amount * rate;

    document.getElementById('result').textContent = `Converted Amount: ${result.toFixed(2)} ${to}`;
    alert( `Converted Amount: ${result.toFixed(2)} ${to}`)
    
    } catch (error) {
      document.getElementById('result').textContent =
      "something went wrong 😓";
      console.error("error fetching rate:",error);
    }
}
