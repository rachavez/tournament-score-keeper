const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080

// serve static assets normally
app.use(express.static(__dirname + '/public'))

// handle every other route with index.html, which will contain 
// a script tag to this application's Javascript file(s)
app.get('*', function (request, response) {
    response.sendFile( path.resolve(___dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)