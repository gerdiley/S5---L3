var degree = 0;


const rotate = () => {
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach(cube => cube.style.transform = `rotateY(${degree}deg)`);
};

// -------------------------------onover

document.querySelector('.left-arrow').addEventListener('mouseover', function () {
    degree += 30;
    rotate();
});


document.querySelector('.right-arrow').addEventListener('mouseover', function () {
    degree -= 30;
    rotate();
});

// -------------------------------onclick

document.querySelector('.left-arrow').addEventListener('click', function () {
    degree += 90;
    rotate();
})

document.querySelector('.right-arrow').addEventListener('click', function () {
    degree -= 90;
    rotate();
});




// -------------------------------outover

document.querySelector('.left-arrow').addEventListener('mouseout', function () {
    degree -= 30;
    rotate();
});
document.querySelector('.right-arrow').addEventListener('mouseout', function () {
    degree += 30;
    rotate();
});


// -------------------------------PLAY BUTTON
toggle = true
document.querySelector('.play-pause').addEventListener('click', function () {
    
    if (toggle){
        toggle = false;
        var interval = setInterval(turnLoop, 1000);
        
    } else {clearInterval(interval)};

});


function turnLoop() {
    degree += 90;
    rotate();
}


// var cubeInterval = setInterval(nextCube, 3000);
// function nextCube() {
//    degree-= 90;
//    rotate();
// }
// var playing = true;

// function pauseCube() {
//    btnStart.innerHTML = '<i class="fas fa-play">';
//    playing = false;
//    clearInterval(cubeInterval);
   
// }
// function playCube() {
//    btnStart.innerHTML = '<i class="fas fa-pause">';
//    playing = true;
//    cubeInterval = setInterval(nextCube, 2000);
   
// }



// // PLAY BUTTON

// function ruotaGiro() {
//     if (flag) {
//         flag = false;
//         inter = setInterval(giro, 1000);
//     }
//     else clearInterval(inter);
// };

// function giro() {
//     degree += 90;
//     cubes[0].style.transform = `rotateY(${degree}deg)`;
//     cubes[1].style.transform = `rotateY(${degree}deg)`;
//     cubes[2].style.transform = `rotateY(${degree}deg)`;
// }