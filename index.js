const con = document.querySelector(".con");
const card = document.querySelector(".card");

con.addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth / 2-e.pageX) /10;
    let yAxis = (window.innerHeight / 2-e.pageY) /10;
    console.log("hey");
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`    ;
});

con.addEventListener("mouseenter" , e=>{
    card.style.transition= `none`
})

con.addEventListener("mouseleave", (e)=>{
    card.style.transition= `0.5s all ease`
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
});