/* navbar.ejs */
console.log(document.body.clientHeight); // height of browser page
console.log(document.body.scrollTop); // height of which scrolled

function scrollToFortune() {
    document.body.scrollTop = 621;
}

function scrollToMath() {
    document.body.scrollTop = 1465;
}

function scrollToCurrentEvents() {
    document.body.scrollTop = 2245;
}

function scrollToHistory() {
    document.body.scrollTop = 2848;
}

function scrollToGallery() {
    document.body.scrollTop = 3414;
}


/* fortune.ejs */
var fortuneArray = [
    "You will be successful in your work.",
    "A hamster will provide you with wisdom.",
    "It's a dreadful day to have fun.",
    "Hamsters will never heal your wounds, if you're human.",
    "An angel is waiting for you.",
    "The moon will grant you mysterious powers.",
    "Why would you believe fortunes work? You need help.",
    "How about get your ass up and get your work done.",
    "It's time to call it quits. There's no hope in relying on fortunes. It won't do you any good.",
    "What happens if fortunes are used to create illusions? Your life is done for.",
    "Profit is concealed within a hamster's pockets. Don't think about stealing it, thief.",
    "It's over 9,000!!!",
    "Life is a loop; you die and live your life all over again.",
    "You're never gonna surpass the intellect of a hamster. Keep dreaming.",
    "A hamster is awaits you.",
    "May the hamster force repel you.",
    "Like they always say, always give up."
];

// console.log(fortuneArray.length);

function fortune(){
    var randomFortuneNumber = Math.floor(Math.random() * fortuneArray.length);
    var randomFortune = fortuneArray[randomFortuneNumber];
    // console.log(randomFortune);
    document.getElementById("fortune").innerHTML = randomFortune;
    document.getElementById("fortune").style.color = "black";
}


/* math.ejs */
document.getElementById("calc-2").style.display = "none";

function allClear(){
    document.getElementById("input").innerHTML = "hamsters";
    document.getElementById("output").innerHTML = "0";
}

function zero(){
    document.getElementById("input").innerHTML = "Who's brilliant idea was to make a useless calculator?";
    document.getElementById("output").innerHTML = "You.";
}

function one(){
    document.getElementById("input").innerHTML = "I bet whoever tried to make a calculator thought it was going to be easy, but it came out hard. Ha!";
    document.getElementById("output").innerHTML = "Like your face.";
}

function two(){
    document.getElementById("input").innerHTML = "What is this suppose to be?";
    document.getElementById("output").innerHTML = "A hamster calculator for hamsters only.";
}

function three(){
    document.getElementById("input").innerHTML = "This bs doesn't even work. Why bother.";
    document.getElementById("output").innerHTML = "It only works for hamsters not humans, dipshit.";
}

function four(){
    document.getElementById("input").innerHTML = "I wish I was a calculator. That way I don't have to do meth... I-I mean math anymore.";
    document.getElementById("output").innerHTML = "If you were a calculator, you're entire life will be based on math.";
}

function five(){
    document.getElementById("input").innerHTML ="Well, look at that. A nice-looking calculator that talks shit.";
    document.getElementById("output").innerHTML = "You're shit.";
}

function six(){
    document.getElementById("input").innerHTML = "How do I use this bs?";
    document.getElementById("output").innerHTML = "It's not bs; it's bs for humans only.";
}

function seven(){
    document.getElementById("input").innerHTML = "9 + 10";
    document.getElementById("output").innerHTML = "21";
}

function eight(){
    document.getElementById("input").innerHTML = "This calculator is stupid. Wait, this isn't even a calculator";
    document.getElementById("output").innerHTML = "Humans are stupid. That's why they're going to be replaced by hamsters.";
}

function nine(){
    document.getElementById("input").innerHTML = "Where's the calculator for humans?";
    document.getElementById("output").innerHTML = "Up in your ass around the corner.";
}

function switchButton(){
    document.getElementById("calc").style.display = "none";
    document.getElementById("calc-2").style.display = "inherit";
}

// human calculator
function switchButton2(){
    document.getElementById("calc").style.display = "inherit";
    document.getElementById("calc-2").style.display = "none";
}

function ac(){
    document.calc.input.value='';
    document.getElementById('times').className = 'btn disabled';
    document.getElementById('divide').className = 'btn disabled';
    document.getElementById('minus').className = 'btn disabled';
    document.getElementById('plus').className = 'btn disabled';
}

function equal(){
    document.calc.input.value = eval(document.calc.input.value);
}

function num0(){
    document.calc.input.value += '0'; 
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num1(){
    document.calc.input.value += '1';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num2(){
    document.calc.input.value += '2';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num3(){
    document.calc.input.value += '3';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num4(){
    document.calc.input.value += '4';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num5(){
    document.calc.input.value += '5';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num6(){
    document.calc.input.value += '6';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num7(){
    document.calc.input.value += '7';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num8(){
    document.calc.input.value += '8';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function num9(){
    document.calc.input.value += '9';
    document.getElementById('times').className = 'btn';
    document.getElementById('divide').className = 'btn';
    document.getElementById('minus').className = 'btn';
    document.getElementById('plus').className = 'btn';
}

function dot(){
    document.calc.input.value += ".";
}




