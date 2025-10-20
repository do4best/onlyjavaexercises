import http from 'http';

const PORT = 8000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/html')
    console.log("Hi from Server")
    res.end("<h1>Hello Friends</h1>")
})
server.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`)
})