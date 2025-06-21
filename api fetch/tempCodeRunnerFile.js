 = "https://catfact.ninja/fact"; // Alternative working API for cat facts

async function getData() {
    let response = await fetch(url);
    // console.log(response);
    let data = await response.json();
    console.log(data);
}

getData();
