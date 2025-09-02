const http = require("http");
const fs = require('fs')
const express = require("express");
const app=express();
const fss = require('fs').promises;


//**************http.createServer

// const server = http.createServer((req,res)=>{
//     res.write('dkskdk')
//     res.end()
// });
// server.listen(4000)


//************express createServer

// const app = express();
// const port = 5000;
// app.get('/',(req,res)=>{
//     res.send('slsfllsflllllll')
// });
// app.listen(port,()=>{
//     console.log('dkjslfklfj')
// })







//********Synchronous: read and write

// fs.writeFileSync('test1.txt','hfjhjdkjhkjjkhhioiertoirtyho[jpiwpjjgsodrijiorofkiklgoiskkoiosokglskojkgrgnj');
// console.log('file writes')

// const aa = fs.readFileSync('test1.txt','utf-8');
// console.log(aa)



//***************Asynchronous: read and write
// fs.writeFile('tex.txt','sfkskjfhkshkfhkshkffh',(rr)=>{
// fs.writeFile('test.txt','at:1546:14at Object..j10)',(err)=>{
//     if(err){
//         console.error(err)
//         return;
//     }
//     console.log('file created')
// })

// fs.readFile('test.txt','Utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log(data)
// })




//Promise-based read and write Promise-based:

// async function write(){
//     try{
//         await fss.writeFile('text3.txt','kjsfdjksjdfksahdfhkjshdkfhjahsjdhfhkhfskasjfkhas');
//         console.log('file created')
//     }
//     catch(err){
//         console.log(err)
//     }
// }write()

// async function readfile(){
//     try{
//     const read = await fss.readFile('text3.txt','utf-8')
//     console.log(read)
//     }catch(err){
//        console.error(err);
       
//     }
// }readfile()



//************fs.unlink: Deletes a file. 

// fs.unlink('indexx.js',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })




let now=new Date()
let date=now.toLocaleString()
fs.writeFileSync('text.txt',`time and date: ${date}`)
const read=fs.readFileSync('text.txt','utf-8');
console.log(read)




//************fs.renameSync */

// fs.renameSync('test1.txt','tpp.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
// })


//**********middelware

// const app = express()
// const port = 5000
// app.use((req,res,next)=>{
//     console.log(`${req.method} `)
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('lsjls')
// })
// app.listen(port,()=>{
// console.log('nksdj')
// })


// const app = express()
// const port = 5000
// app.use((req,res,next)=>{
//     console.log(`${req.method}`)
//     next()
// })
// app.get('/',(req,res)=>{
//     res.send('lsfjsk')
// })
// app.listen(port,()=>{
//     console.log('sdjjkhs')
// })


//route params
// const app = express()

// app.get('/:id/:i',(req,res)=>{
//     const id = req.params.id;
//     const id2 = req.params.i;
//     console.log(id)
//     console.log(id2)
//     res.send('gfdgdsfs')
// }) 

// app.listen(5000,()=>{
//     console.log('dfjjks')
// })



// //query params
// app.get('/',(req,res)=>{
//     res.send('sdllksl')
//     const id1 = parseInt(req.query.a)
//     const id3 = parseInt(req.query.b)

//     console.log(id1)
//     console.log(id3)
//     console.log(id1+id3)

// })
// app.listen(5000,()=>{
//     console.log('rrrr')
// })


// app.get('/',(req,res)=>{
//     res.send('kjfdkj')
//     const a = parseInt(req.query.a)
//     const b= parseInt(req.query.b)
//     console.log(a)
//     console.log(b)
// })

// app.listen(3200,()=>{
//     console.log('lsj')
// })








