 const maths = require('./math.js');
 const fs = require('fs');
 const os = require('os');
 console.log(os.cpus().length)

//  console.log(maths.add(10, 3)); 
//  console.log(maths.subtract(10, 3));
// //  fs.writeFileSync("output.txt", "Hello, World!");
// //create a file called output.txt with the content "Hello, World! file should be async"
//     fs.writeFile("output.txt", "Hello, World async !", (err) => {
//         if (err) {
//             console.error("Error writing file:", err);
//         } else {
//             console.log("File written successfully!");
//         }
//     }   
// );

// // Read the file asynchronously and log its content
// fs.readFile("reading.txt" , "utf-8", (err , dat)=>{

//  if(err) {
//      console.error("Error reading file:", err);
//  } else {
//      console.log("File content:", dat);
//  }  



// });