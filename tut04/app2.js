 const http = require('http');


 const server = http.createServer((req, res)=>{



             if(req.url ==='/')
             {
                     res.setHeader('Content-Type','text/html');
      res.write('<html>');
  res.write('<head><title>Welcomre to home section </title></head>');
  res.write('<body>');
  res.write('<h1>Hello ji</h1>');
  res.write('</body>');
  res.write('</html>');
 return res.end();

             }

             else if(req.url==='/products')
             {

                                 res.setHeader('Content-Type','text/html');
      res.write('<html>');
  res.write('<head><title>products</title></head>');
  res.write('<body>');
  res.write('<h1>welcome to product section</h1>');
  res.write('</body>');
  res.write('</html>');
  return res.end();

             }




        res.setHeader('Content-Type','text/html');
      res.write('<html>');
  res.write('<head><title>general</title></head>');
  res.write('<body>');
  res.write('<h1>what u want sir</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();

 })

      const PORT = 3000;
    server.listen(PORT ,()=>{
                  console.log("server started");
    })