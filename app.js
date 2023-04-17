const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');
const io = require('socket.io')(http);
const port = process.env.PORT || 4242

app.use(express.static(path.resolve('public')));


io.on("connection",(client)=>{
    console.log('user connected');
});

http.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
});

