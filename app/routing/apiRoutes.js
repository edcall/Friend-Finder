app.get("/api/userData/:userData", function (req, res) {
    // Grab the selected parameter
    var chosen = req.params.userData;
    console.log(chosen);

    // Filter to show only the selected character
    for (var i = 0; i < userData.length; i++) {
        if (chosen === userData[i].routeName) {
            return res.json(userData[i]);
        }
    }

    // Otherwise display "No character found"
    return res.send("No Data");
});
