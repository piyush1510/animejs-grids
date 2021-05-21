var container=document.querySelector(".container")
console.log(container);
var temp;
for(let i=0;i<225;i++){
    temp = document.createElement('div')
    temp.classList.add('particle')
    container.appendChild(temp)
}
const tl=anime.timeline({loop:true})
tl.add({
    targets:".particle",
    scale:0.1,
    delay:anime.stagger(50,{grid:[15,15],from:0}),
    duration:600,
    translateX:200,
    translateY:200,
    easing:"easeInOutQuad",
    backgroundColor:"#fff"
}).add({
    targets:".particle",
    scale:1,
    delay:anime.stagger(50,{grid:[15,15],from:0}),
    duration:600,
    translateX:0,
    translateY:0,
    easing:"easeInOutQuad",
    backgroundColor:"#444"
},"-=10")
