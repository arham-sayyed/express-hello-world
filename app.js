const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 80;

app.listen(PORT, () => {
    console.log(`🚀 Server Started at port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("<h1 style='text-align: center;'>Hello World! <br> From Express.js </h1>");
});

app.get("/axios", async (req, res) => {
    try {
        const response = await getISS();
        res.json(response.iss_position);
    } catch (error) {
        console.log(error)
        res.status(500).send("Error fetching ISS location data");
    }
});

// Function to get ISS current location
async function getISS() {
    const response = await axios.get("http://api.open-notify.org/iss-now.json");
    return response.data;
}

// async function print() {
//     const ISS = await getISS()
//     console.log("longitude: ", ISS.data.iss_position.longitude)
//     console.log("latitude: ", ISS.data.iss_position.latitude)

// }