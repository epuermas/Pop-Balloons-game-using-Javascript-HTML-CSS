const container = document.querySelector('.container');
let content = "";
let balloons = [
    'lightsalmon','salmon','red','firebrick',
    'yellow','lemonchiffon','khaki','papayawhip',
    'lime','limegreen','palegreen','olivedrab',
    'lightcyan','aqua','turquoise','teal',
    'lightskyblue','steelblue','royalblue','blue',
];

balloons.forEach(function(color, i){
    console.log("Loop"+i+" "+color,content);
    content = content + `<div 
    class="balloon" 
    style="background: ${color}"
    >
    </div>`;
});


container.innerHTML=content;
console.log("Hello World on the consolee");