
function light () {
        document.body.style.backgroundColor = "LightSeaGreen";
        document.body.style.color = "black";
    }

function dark () {
        document.body.style.backgroundColor = "DarkSlateGray";
        document.body.style.color = "White";
}

function weather(){
    var weather = document.getElementById("weather").value;
    if (weather == "sunny"){
        weatherr.innerText= "It is so nice outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
    }
    else if (weather == "rainy"){
        weatherr.innerText= "Rain is falling outside, take a rain coat and a brolly, and don't stay out for too long.";
    }
}

function hitung() {
    var x = document.getElementById("hitung").value;
    var hasil = document.getElementById("hasil");
    if (x <= 0 || x >= 21) {
        hasil.innerText = "Pilih bilangan antara 1 sampai 20 ! ";
    }
    else if (x % 2 == 0) {
        var y = x / 2;
        for (i = y - 1; i > 1; i--) {
            y = y * i;
        }
        hasil.innerText = "The factorial of " + x + " is " + y;
    }
        
    else if (x % 2 == 1) {
        var firstNum = 0, secondNum = 1;
        var next;
        for (var i = 0; i < x; i++) {
            next = firstNum + secondNum;
            firstNum = secondNum;
            secondNum = next;
            

            if (firstNum >=x*10){
                break;
            }
            document.write(" " + firstNum);
        }
            }
        }