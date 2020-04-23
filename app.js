const container = document.querySelector('.container');
let content = "";
let balloons = [
    'pink','black','red','purple'
];

balloons.forEach(function(color, i){
    content = content + '<div class="balloon"></div>';
    console.log("Loop"+i,content);

});


container.innerHTML=content;
console.log("Hello World on the console");