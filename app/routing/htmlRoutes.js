app.get("/", function (req, res) {
    // Grab the selected parameter
    var chosen = req.params.character;
    console.log(chosen);

    // Filter to show only the selected character
    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    // Otherwise display "No character found"
    return res.send("No character found");
});
