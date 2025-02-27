
const FIELDS_NUM = 38;


function main(){


    const canvas = document.getElementById("roulette");
    const ctx = canvas.getContext("2d");

    ctx.canvas.width= window.innerWidth;
    ctx.canvas.height = window.innerHeight
    ctx.fillStyle = "rgb(200 0 0)";
    ctx.fillRect(10, 10, 50, 50);


    center_x = window.innerWidth / 2;
    center_y = window.innerHeight / 2;

    radius = 0.8* Math.min( window.innerWidth / 2,  window.innerHeight / 2)

    current_angle = 0;

    for (let i  =0; i < FIELDS_NUM; i++){
        ctx.fillStyle = "rgb(200 0 0)";
        ctx.arc(center_x, center_y, radius, current_angle , (current_angle + 2*Math.PI * i / FIELDS_NUM));
        current_angle += 2*Math.PI * i / FIELDS_NUM;
    }
}

main()