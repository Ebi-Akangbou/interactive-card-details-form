var errors =document.querySelectorAll(".error")
var errors =document.querySelectorAll(".error")
var hero = document.querySelector(".hero")
hero.style.display="none";
const form = document.querySelector("#form").addEventListener("submit", (event)=>{
    event.target
const form = document.querySelector("#form");
const name = document.querySelector("#name").value;
    const nameInput = document.querySelector("#name");
const number = document.querySelector("#number").value;
const numberInput = document.querySelector("#number");
const month =  document.querySelector("#month").value;
const monthInput =  document.querySelector("#month");
const monthValue=["01","02", "03","04","05","06","07","08","09", "10", "11", "12"];
const year =  document.querySelector("#year").value;
const yearInput =  document.querySelector("#year");
const currentYear =  new Date;
const currentYearValue = String(currentYear.getFullYear())
 const currentYearValueTenses = (currentYearValue.slice(2, 4));
const code =  document.querySelector("#code").value;
const codeInput =  document.querySelector("#code");




if(name===""){
    event.preventDefault();
    errors[0].textContent="Can't be blank"
    nameInput.style.border="2px groove hsl(0, 100%, 66%)";
    
}else if(name.length<=3){
    event.preventDefault();
    errors[0].textContent="Invalid name"
    nameInput.style.border="2px groove hsl(0, 100%, 66%)";
}
else{
    errors[0].textContent="";
    nameInput.style.border="2px groove #000";
    const bottomLeft = document.querySelector(".bottom-left").textContent=name;
bottomLeft;
}
if(number ===""){
    event.preventDefault();
    errors[1].textContent="Can't be blank"
    numberInput.style.border="2px groove hsl(0, 100%, 66%)";


}else if(number.length<=15||number.length>16 ){
    event.preventDefault();
    errors[1].textContent="invalid"
    numberInput.style.border="2px groove hsl(0, 100%, 66%)";
}else{
    errors[1].textContent="";
    numberInput.style.border="2px groove #000";
    const center = document.querySelector(".center")
    center.textContent=number;
}
if(!monthValue.includes(month)){
    event.preventDefault();
    errors[2].textContent="Invalid date"
    monthInput.style.border="2px groove hsl(0, 100%, 66%)";
}else{
    errors[2].textContent="";
    monthInput.style.border="2px groove #000";
    const bottomRight = document.querySelector(".bottom-right").textContent=month +"/" + year;
bottomRight;
}
if(year===""){
    event.preventDefault();
    errors[2].textContent="Can't be blank"
    yearInput.style.border="2px groove hsl(0, 100%, 66%)";
}else if(year.length===3){
    event.preventDefault();
    errors[2].textContent="Invalid date"
    yearInput.style.border="2px groove hsl(0, 100%, 66%)";

}else if(year>=currentYearValueTenses){ 
    errors[2].textContent="";
    yearInput.style.border="2px groove #000";
    const bottomRight = document.querySelector(".bottom-right").textContent=month +"/" + year;
bottomRight;
    
    
}else if(!year.length<=3){
    event.preventDefault();
    errors[2].textContent="Invalid date"
    yearInput.style.border="2px groove hsl(0, 100%, 66%)";
}
else{
    event.preventDefault();
    errors[2].textContent="Invalid date"
    yearInput.style.border="2px groove hsl(0, 100%, 66%)";
    
}
if(code===""){
    event.preventDefault();
    errors[3].textContent="Can't be blank"
    codeInput.style.border="2px groove hsl(0, 100%, 66%)";

}else if(code.length<=2 || code.length>3){
    event.preventDefault();
    errors[3].textContent="Invalid code"
    codeInput.style.border="2px groove hsl(0, 100%, 66%)";
}
else{
    errors[3].textContent=""
    codeInput.style.border="2px groove #000";
    const centerLeft = document.querySelector(".center-left").textContent=code;
centerLeft;
}
if(name.length>3 && number.length===16 && monthValue.includes(month) && code.length===3 && year>=currentYearValueTenses && year.length===2){
    event.preventDefault();
    form.style.display="none"
    hero.style.display="grid";
    

}else{
    
}
} );


 
