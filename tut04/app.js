 const http = require('http');


 const server = http.createServer((req, res)=>{

        res.setHeader('Content-Type','text/html');
      res.write('<html>');
  res.write('<head><title>My Page</title></head>');
  res.write('<body>');
  res.write('<h1>Hello ji</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();

 })

      const PORT = 3000;
    server.listen(PORT ,()=>{
                  console.log("server started");
    })