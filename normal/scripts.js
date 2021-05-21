var container=document.querySelector(".container")
console.log(container);
var temp;
for(let i=0;i<81;i++){
    temp = document.createElement('div')
    temp.classList.add('particle')
    container.appendChild(temp)
}

anime({
    targets:".particle",
    scale:0.1,
    delay:100,
    duration:1000,
    easing:"easeInOutQuad",
    loop:true,
    direction: 'alternate',
})
