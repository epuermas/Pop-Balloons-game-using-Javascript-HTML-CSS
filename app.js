const container = document.querySelector('.container');
let content = "";
let balloons = [
    'pink','black','red','purple'
];

balloons.forEach(function(){
    content = content + '<div class="balloon"></div>'

});


container.innerHTML=content;
console.log("Hello World on the console");