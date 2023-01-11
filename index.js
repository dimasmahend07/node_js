const express = require('express')
var cors = require('cors')
const app = express();
const port = 80;
app.use(express.json());
app.use(cors())

app.get("/getlist", (req, res) => {
    res.send({ sensor_suhu: [{ suhu: 38, waktu: "2023-01-01 09:00" }, { suhu: 41, waktu: "2023-01-02 10:00" }, { suhu: 39, waktu: "2023-01-03 11:00" }] })
});

app.get("/sensor1", (req, res) => {
    res.send("Halo!")
});
app.post("/sensorpost", (req, res) => {
    res.send(
        "suhu yang diterima adalah " +
        req.body.suhu + "\n" +
        "kelembapan yang diterima adalah " +
        req.body.kelembapan
    )
});
app.get("/sensor2", (req, res) => {
    res.send("sensor2")
});
app.get("/sensor3", (req, res) => {
    res.send({ sensor3: 100 })
})
app.listen(port, () => {
    console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});