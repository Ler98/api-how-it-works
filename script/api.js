//api.js hämtar data från API/JSON


export async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error.message);
        return []
    }
}

//1.fetchData är funktionsnamnet och används bara här och när funktionen anropas.

//fetc(url) hämtar data från nätet
//await response.json() skickar tillbaka datan till den som anropade functionen

//ibland går det fel ex fel url eller nätverksproblem:
//catch(error) fångar felet
//console.error(error.merrage) visar felet i konsolen
//return [] skickar tillbaka en tom lista istället för att sidan kraschar 



// export default featchData; //används en enda gång
// export {featchData} // används fler ggr