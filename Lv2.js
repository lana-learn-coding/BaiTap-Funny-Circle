document.querySelector("canvas").width = window.innerWidth;
document.querySelector("canvas").height = window.innerHeight;
function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function createRadRadiusCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 100);
    let circle = new Circle(600, 400, radius);
    console.log(circle);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}
