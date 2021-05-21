var container=document.querySelector(".container")
console.log(container);
var temp;
for(let i=0;i<81;i++){
    temp = document.createElement('div')
    temp.classList.add('particle')
    container.appendChild(temp)
}
const tl=anime.timeline({loop:true})
tl.add({
    targets:".particle",
    scale:0.1,
    delay:anime.stagger(100,{grid:[9,9],from:0}),
    duration:500,
    easing:"easeInOutQuad",
    backgroundColor:"#fff"
}).add({
    targets:".particle",
    scale:1,
    delay:anime.stagger(100,{grid:[9,9],from:0}),
    duration:500,
    easing:"easeInOutQuad",
    backgroundColor:"#dc143c"
},"-=150")
