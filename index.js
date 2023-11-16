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

//conectivity with server with nodemon (http)
const http=require("http");
const server =http.createServer((req,res)=>
{
    res.end("hello ssi digital indore");
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("i am 8000 listening")
});