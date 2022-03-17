const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
	return res.json({ message: "Hello World" });
});

app.listen(3000, () => {
	console.log("Running on port 3000");
});
