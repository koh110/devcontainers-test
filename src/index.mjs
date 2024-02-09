import http from 'node:http'

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, () => {
  console.log(`(#${process.pid}) Listening on`, server?.address())
})
