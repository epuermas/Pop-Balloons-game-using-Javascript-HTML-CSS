const container = document.querySelector('.container');

let balloons = [
    'lightsalmon','salmon','red','firebrick',
    'yellow','lemonchiffon','khaki','chocolate',
    'lime','limegreen','palegreen','olivedrab',
    'lightcyan','aqua','turquoise','teal',
    'lightskyblue','steelblue','royalblue','blue',
];

function popBalloon(pos){
    balloons[pos]=null;
    renderBalloon();
}
function renderBalloon(){
    let content = "";
    balloons.forEach(function(color, position){
    console.log("Loop"+position+" "+color,content);

    //
    let balloonVisibility = "visible";
    if(color===null) {

        balloonVisibility = "popped";
    
    }
    content = content + `<div 
    class="balloon ${balloonVisibility}" 
    style="background: ${color}"
    onClick="popBalloon(${position})"
    >
    </div>`;
});
container.innerHTML=content;
}

renderBalloon();

console.log("Hello World on the consolee");