// console.log("welcome to ssi")
// console.log("hello everyone")

// //fileSystem(MODULE)(write operation)
//  const v=require('fs')
//  v.writeFileSync('demo.txt'," hello ssi  \n digital \n");
//  v.appendFileSync("demo.txt", " how is ur institude");

// //(readfile)
//  const a=require("fs")
//  const b= a.readFileSync("demo.txt");
//  const final = b.toString();
//  console.log(final);

 // //(readfile without converting into string )(utf-8)
//  const a=require("fs")
//  const b= a.readFileSync("demo.txt","Utf-8");
//  console.log(b);


// // //renamefile
// const e = require("fs");
// const f = e.renameSync("demo.txt", "text.txt");

// //delete file 
// const c = require("fs");
// const d=c.unlinkSync("text.txt");

//// windows version
// const a = require("os");
// const b = a.arch();
// console.log(b);


// const a = require("os");
// const b = a.freemem();
// console.log(b);

// //operating system
// const os = require("os");
// const total= os.totalmem();
// console.log(`${total/1024/1024/1024}`);
// const free=s.freemem();
// console.log(`${free/1024/1024/1024}`);
// console.log(`${total/1024/1024/1024-free/1024/1024/1024}`);

////dir
// const s=require("os")
// console.log(s.tmpdir())


////asystronice version
// const fs=require('fs');
// fs.writeFile("hello.txt"," stop it \n ",(err)=>{
// console.log(err)
// });

// //append file
// const a= require("fs");
// a.appendFile("hello.txt", "And Do Your Work Properly" , (err)=>{
//     console.log(err)
// });

// //readfile
// const b=require("fs");
// const c=require("fs");
// b.readFile("hello.txt", "utf-8", (err, data) => 
// c.appendFile("hello.txt", " with",(del) =>{
//     console.log(data)
//     console.log(del)
// }));

// //path 
// const path=require("path");
// console.log(path.dirname("C:/new nodejs/index.js"));
// console.log(path.extname("C:/new nodejs/index.js"));
// console.log(path.basename("C:/new nodejs/index.js"));
// console.log(path.parse("C:/new nodejs/index.js"));
// const mypath=path.parse("C:/new nodejs/index.js");
// console.log(mypath.name);
// console.log(mypath.root);

// //how to create and export your own module in node js:-(add)
// const add= require("C:/new nodejs/expo.js");
// console.log(add(5,4));

// //how to create and export your own module in node js:-(add, sub)
// const e= require("C:/new nodejs/expo.js");
// console.log(e.add(5,4));
// console.log(e.sub(5,4));

// //how to create and export your own module in node js:-without using module multipule time
// const {add, sub, mult}= require("C:/new nodejs/expo.js");
// console.log(add(5,4));
// console.log(sub(5,4));
// console.log(mult(5,4));

//chalk
// import chalk from 'chalk';
// import validator from 'validator';
//const a=validator.isAlpha("khushu172@gmail.com");
//const a=validator.isEmail("khushu172@gmail.com");
//const a=validator.isLowercase("khushu172@gmail.com");
//const a=validator.isNumeric("172");
// a=validator.isUppercase("KHUSHI");
//  const a=validator.isTime("23:01");
// console.log(a? chalk.green.inverse(a): chalk.red.inverse(a));
// console.log(chalk.red.inverse.underline('Hello world!'));
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));  

//nodemon
// console.log("hello khushi")
// let a=10 , b=20, c;
// c=a+b;
// console.log("addition is:"+c)

//conectivity with server with nodemon (http) [//localhost:8000]
// const http=require("http");
// const server =http.createServer((req,res)=>
// {
//     res.end("hello ssi digital indore");
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("i am 8000 listening")
// });

// //url 
// const http=require("http");
// const server =http.createServer((req,res)=>
// {
//     console.log(req.url);
//     res.end("hello ");
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("i am 8000 listening")
// });

////url different pages
// const http=require("http");
// const server =http.createServer((req,res)=>
// {   
//     if(req.url=="/")
//     {
//         res.end("i am home page")
//     }
//     else if(req.url=="/about")
//     {
//         res.end("i am about page")
//     }
//     else{
//         res.end("error")
//     }
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("i am 8000 listening")
// });

// //factorial , table [url]
// var http=require("http");
// var server =http.createServer((req,res)=>
// {   
//     if(req.url=="/")
//     {
//         res.end("i am home page")
//     }
//     else if(req.url=="/fact")
//     {   
//         let f=1;
//         for(i=1;i<=5;i++)
//         {
//             f=f*i;
//         }
//         res.end("fact is="+f)
//     }

//     else if(req.url=="/table")
//     {   
//         let t="";
//         for(i=1;i<=10;i++)
//         {
//             t+=4*i+"\n";
//         }
//         res.end(t)
//     }
//     else{
//         res.end("error")
//     }
// });
// server.listen(8000,"127.0.0.1",()=>{
//     console.log("i am 8000 listening")
// });

// //convert record in json [1) add in new file]
// const fs=require("fs");
// const a={name:"khushi", age:"20", city:"indore"};
// const data =JSON.stringify(a);
// fs.writeFile("json1.json" , data,(err)=>{
//     console.log("done")
// });

// //[2) read file]
// const fs=require("fs");
// const a={name:"khushi", age:"20", city:"indore"};
// const data =JSON.stringify(a);
// fs.readFile("json1.json","utf-8", (err,data)=>{
//     console.log(data);
// });

// //[3)again covert back to js object] (parse)
// const fs=require("fs");
// const a={name:"khushi", age:"20", city:"indore"};
// fs.readFile("json1.json","utf-8", (err,data)=>{
//     console.log(data);
//     const org=JSON.parse(data);
//     console.log(org)
// });


// //Events modules
// //EventEmitter = is a class.
// //emit= emit is used to trigger. 
// //on= on is used to add a callback function that,s going to be executed  when the event is trigger.
// const EventEmitter=require("events");
// const event= new EventEmitter();
// event.on("hello",()=>{
//     console.log("khushi bansal.");
// });
// event.emit("hello");


//streams in nodejs
//-> streams are object thet let you read data from a source or write data to a destination in a continuous fashion. 
//-> streamingmeans listening music or watching video in "real time" , insted of downloading a file to youe computer.
// 4 types of streams
//1) readable= stream which is used for read operation.
//2) writable= use to write
//3) duplex= used for both read and write
//4) transform=
