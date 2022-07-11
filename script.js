const A = document.querySelector('.A');
A.innerHTML = '2A';
const B = document.querySelector('.B');
B.innerHTML = '2B';

let end = false;

const res = document.querySelector('.result');
const btn = document.querySelector('button');
let turn = true;
const Turn = document.querySelector('.Turn');
Turn.innerHTML = 'Turn: Player';

let turnA = 1, turnB = 1;
let sixCount = 0;

btn.addEventListener('click', function () {
    res.innerHTML = Math.floor(Math.random() * (6)) + 1;

    if (turn == true) {
        Turn.innerHTML = 'Turn: Player A';
        if (res.innerHTML != 6) {
            turn = false;
            turnA = 0;
            sixCount = 0;
        }
        else if (res.innerHTML == 6 && sixCount != 3) {
            turnA = 1;
            sixCount++;
        }
        else {
            turn = false;
            turnA = 0;
            sixCount = 0;
        }
    }
    else {
        Turn.innerHTML = 'Turn: Player B';
        if (res.innerHTML != 6) {
            turn = true;
            turnB = 0;
            sixCount = 0;
        }
        else if (res.innerHTML == 6 && sixCount != 3) {
            turnB = 1;
            sixCount++;
        }
        else {
            turn = true;
            turnB = 0;
            sixCount = 0;
        }
    }
    if (end != false) {
        btn.innerHTML = `Player ${end} won`;
        btn.style.background = '#079813';
        btn.style.boxShadow = '0 10px 20px -10px #079813'
    }
});

let lockA = 2, home_A = 0, way_A = 0;
const red_locker = document.getElementById('A1');
const blue_locker = document.getElementById('A15');

A.addEventListener('click', function () {
    if (lockA > 0 && (turnA > 0 && res.innerHTML == 6)) {
        lockA--;
        home_A = 2 - (lockA + way_A);
        A.innerHTML = `${lockA}A`;
        red_locker.innerHTML = `${home_A}A`;
    }
})

let lockB = 2, home_B = 0, way_B = 0;

B.addEventListener('click', function () {
    if (lockB > 0 && (turnB > 0 && res.innerHTML == 6)) {
        lockB--;
        home_B = 2 - (lockB + way_B);
        B.innerHTML = `${lockB}B`;
        blue_locker.innerHTML = `${home_B}B`;
    }
})

let CurLocA1, CurLocA2;
let CurLocB1, CurLocB2;

CurLocA1 = 1;
CurLocA2 = 1;

CurLocB1 = 1;
CurLocB2 = 1;

let CLA1 = document.querySelector(`#A${CurLocA1}`);
let CLA2 = document.querySelector(`#A${CurLocA2}`);

let CLB1 = document.querySelector(`.B${CurLocB1}`);
let CLB2 = document.querySelector(`.B${CurLocB2}`);

CLA1.addEventListener('click', moveA1);
function moveA1() {
    if (turn == false && (home_A != 0 || way_A != 0) && (turnA == 0 || sixCount == 2)) {
        CLA1.innerHTML = "";
        CurLocA1 += Number(res.innerHTML);
        CLA1 = document.querySelector(`#A${CurLocA1}`);
        console.log(CurLocA1);
        console.log(CLA1);
        CLA1.innerHTML = "1A";
        home_A--;
        way_A++;
    }
}

CLB1.addEventListener('click', moveB1);
function moveB1() {
    if (turn == false && (home_B != 0 || way_B != 0) && (turnB == 0 || sixCount == 2)) {
        CLB1.innerHTML = "";
        CurLocB1 += Number(res.innerHTML);
        CLB1 = document.querySelector(`.B${CurLocB1}`);
        console.log(CurLocB1);
        console.log(CLB1);
        CLB1.innerHTML = "1B";
        home_B--;
        way_B++;
    }
}
