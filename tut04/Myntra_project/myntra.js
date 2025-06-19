const http = require('http');


const server = http.createServer((req, res)=>
{

    

            res.setHeader('Content-Type','text/html');
            res.write(`
               <!DOCTYPE html>
<html lang="en">
<head>
   
    <title>Myntra clone </title>
</head>
<body>
` )
   
   if(req.url ==='/Men')
   {

      res.write(`
         
         <h1>Welcome to Mens section!</h1>
         
         `)
         return res.end();
   }

   else if(req.url ==='/Women')
   {
 res.write(`
         
         <h1>Welcome to Womens section!</h1>
         
         `)

         return res.end();
   }

    else if(req.url ==='/Kid')
   {
      res.write(`
         
         <h1>Welcome to Kid section!</h1>
         
         `) 

         return res.end();
   }

    else if(req.url ==='/Cart')
   {
       res.write(`
         
         <h1>Welcome to Cart section!</h1>
         
         `)

         return res.end();
   }
     
     else{
            res.write(`
         
         <section>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/Men">Men</a></li>
                <li><a href="/Women">Women</a></li>
                <li><a href="/Kid">Kids</a></li>
                <li><a href="/Cart">Cart</a></li>
               
            </ul>
        </nav>
    </section>
         
         `)

          return res.end();

     }
     

    
   res.write(`</body>
</html>`);

   return res.end();

    }
   
   );

const PORT = 4000;

 server.listen(4000 , ()=>{

    console.log("Server is on ");
 });
