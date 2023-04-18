const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 4242

app.use(express.static(path.resolve('public')));

// Set view engine
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// Routing file
let appRoutes = require('./routes/routes');
app.use('/', appRoutes);

io.on("connection", (socket) => {
    console.log('user connected');

    socket.on('message', (message) => {
        // while (history.length > historySize) {
        //   history.shift()
        // }
        // history.push(message)

        io.emit('message', message)
    })


    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
});

http.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});

