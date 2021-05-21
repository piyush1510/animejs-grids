var container=document.querySelector(".container")
console.log(container);
var temp,temp2;
for(let i=0;i<225;i++){
    temp = document.createElement('div')
    temp2 = document.createElement('div')
    temp.classList.add('particle')
    temp2.classList.add('particle2')
    temp.appendChild(temp2)
    container.appendChild(temp)
}
const tl=anime.timeline({loop:true})
tl.add({
    targets:".particle2",
    
    delay:anime.stagger(50,{grid:[15,15],from:0}),
    duration:600,
    easing:"easeInQuad",
    backgroundColor:"rgba(255, 255, 255,0.1)"
}).add({
    targets:".particle",
    
    delay:anime.stagger(50,{grid:[15,15],from:0}),
    duration:600,
    easing:"easeInQuad",
    borderColor:"rgba(255, 255, 255,0.1)"
}).add({
    targets:".particle2",
    
    delay:anime.stagger(50,{grid:[15,15],from:0}),
    duration:600,
    easing:"easeOutQuad",
    backgroundColor:"rgba(255, 255, 255,1)"
},"-=100").add({
    targets:".particle",
    
    delay:anime.stagger(50,{grid:[15,15],from:0}),
    duration:600,
    easing:"easeOutQuad",
    borderColor:"rgba(255, 255, 255,1)"
},"-=100")

