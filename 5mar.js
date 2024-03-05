console.log("March_5 Java Script.");

// Types of Error and Error Handling

setTimeout(()=>{
    console.log("Hey I'm accessing your computer without permission")

},1000);
try{
    console.log("Learning");
}
catch(error){
    console.log(Congratulationsss);
}


setTimeout(()=>{
    console.log("Let's enter");

},2000);
setTimeout(()=>{
    console.log("Entering your database");

},3000);
setTimeout(()=>{
    console.log("Hacked!");

},4000);


try{
    throw"Javaline";
    console.log("Hello");
}
catch(err){
    console.log("Caught", err);
}
finally{
    console.log("HAH! It's hectic");
}
console.log("END");

try{
    throw{name:"Robin", message:"Choooper-Chan"};
    // throw new Error("A stick");
    console.log("Nico Robin");
}
catch(error){
    console.log("Caught", error.name,error.message);
}
finally{
    console.log("One piece is best");
}

// (Syntax Error, TypeError, URL error)
try{
    let url="https://www.youtube.com/watch?v=_am9rKw4vWw"
    fetch(url).then((response)=>{})
    console.log("Hello");
}
catch(error){
    console.log("Caught", error.name,error.message);
}
finally{
    console.log("End");
}
