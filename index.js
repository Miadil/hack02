const express = require("express")
const database = require("./config/bd")
const app = express()

app.get("/", (req, res) => {
	// demander a la bdd
	//SELECT characters.*, houses.houseName FROM characters inner join houses on characters.houses_id = houses.id;
	database
		.query("SELECT * FROM characters")
		.then(([characters]) => res.json(characters))
		.catch((err) => {
			console.error(err)
			res.status(500).send("Error retrieving data from database")
		})
})

app.get("/house", (req, res) => {
	// demander a la bdd
	database
		.query("SELECT * FROM houses")
		.then(([houses]) => res.json(houses))
		.catch((err) => {
			console.error(err)
			res.status(500).send("Error retrieving data from database")
		})
})

app.listen(4242, console.log("http://localhost:4242"))
