const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware to verify the time of the request
app.use((req, res, next) => {
  const currentDay = new Date().getDay(); 
  const currentHour = new Date().getHours();

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= 9 &&
    currentHour <= 17
  ) {
    // Request is within working hours
    next();
  } else {
    // Request is outside working hours, send an error response
    res
      .status(403)
      .send(
        "The web application is only available during working hours (Monday to Friday, from 9 to 17)."
      );
  }
});

// Home page route
app.get("/", (req, res) => {
  res.render("home");
});

// Services page route
app.get("/services", (req, res) => {
  res.render("services");
});

// Contact us page route
app.get("/contact", (req, res) => {
  res.render("contact");
});

// app listening on port
const PORT = 3030; 

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
