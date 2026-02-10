


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

// export default featchData; //används en enda gång
// export {featchData} // används fler ggr