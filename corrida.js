let _minValue;
let _maxValue;
let diff;
let drift;
let sortedValue;
let resultAfterDrift;
let PedroVolta;
let EdnaVolta;
let JucaVolta;
let PedroGanhador = 0;
let EdnaGanhador = 0;
let JucaGanhador = 0;
let numeroVoltas;
let carroedna;
let carrojuca;
let carropedro;
var carro = [];
let randomico = 0;
let z;

//configurações dos carro nos objetos//
const popular = {
    velmaxmx: 200,
    velmaxmn: 180,
    velminmx: 130,
    velminmn: 110,
    derrmn: 0.03,
    derrmx: 0.04,
}

const sport = {
    velmaxmx: 215,
    velmaxmn: 195,
    velminmx: 145,
    velminmn: 125,
    derrmn: 0.02,
    derrmx: 0.03,
}

const supersport = {
    velmaxmx: 230,
    velmaxmn: 210,
    velminmx: 160,
    velminmn: 140,
    derrmn: 0.01,
    derrmx: 0.0175,
}

//Sorteio dos carros //
function tipocarro() {
    for (let index = 0; index < 3; index++) {
        randomico = Math.random() * 100;
            if(randomico <= 60){
            carro.push("Popular"); 
        }else if(randomico <= 95){
            carro.push("Sport");  
        }else if(randomico <= 100){
            carro.push("Super Sport"); 
        }      
    }
    carroedna = carro[0];
    carrojuca = carro[1];
    carropedro = carro[2];
    
    //mostra quem corre com cada carro//
    document.getElementById("caredna").innerHTML = "O carro de Edna é " + carroedna;
    document.getElementById("carjuca").innerHTML = "O carro de Juca é " + carrojuca;
    document.getElementById("carpedro").innerHTML = "O carro de Pedro é " + carropedro;
}


//função generica para calculo de numero aleatorio
function calculo(x, y) {
    diferenca = x - y;
    z = Math.round(Math.random()*diferenca) + y;
    console.log(z);
}

//determina os valores de  velocidade minima (_minVal) / veolcidade maxima (_maxValue) e drift (drift)
function funcpopular() {
    calculo(popular.velmaxmx, popular.velmaxmn);
        _maxValue = z;
    calculo(popular.velminmx, popular.velminmn);
        _minValue = z;
    calculo(popular.derrmx, popular.derrmn); 
        drift = z;
}

function funcsport() {
    calculo(sport.velmaxmx, sport.velmaxmn);
        _maxValue = z;
    calculo(sport.velminmx, sport.velminmn);
        _minValue = z;
    calculo(sport.derrmx, sport.derrmn); 
        drift = z;
}

function funcsupersport() {
    calculo(supersport.velmaxmx, supersport.velmaxmn);
        _maxValue = z;
    calculo(supersport.velminmx, supersport.velminmn);
        _minValue = z;
    calculo(supersport.derrmx, supersport.derrmn); 
        drift = z;
}

//função que primeiro acha qual carro foi sorteado, realiza a função deste carro e retorna a velocidade da volta //
function Pedro() {
    if (carropedro = "Popular"){
        funcpopular();
    }else if (carropedro = "Sport"){
        funcsport();
    }else if(carropedro = "Super Sport"){
        funcsupersport();
    }
    console.log(_minValue, _maxValue, drift)
    volta(_minValue, _maxValue);
    PedroVolta = resultAfterDrift;
    console.log(typeof resultAfterDrift)
    console.log (typeof PedroVolta);
}

function Juca() {
    if (carrojuca = "Popular"){
        funcpopular();
    }else if (carrojuca = "Sport"){
        funcsport();
    }else if(carrojuca = "Super Sport"){
        funcsupersport();
    }
    volta(_minValue, _maxValue);
    JucaVolta = resultAfterDrift;
    console.log (JucaVolta);
}

function Edna() {
    if (carroedna = "Popular"){
        funcpopular();
    }else if (carroedna = "Sport"){
        funcsport();
    }else if(carroedna = "Super Sport"){
        funcsupersport();
    }
    volta(_minValue, _maxValue);
    EdnaVolta = resultAfterDrift;
    console.log (EdnaVolta);
}

//calcula qual velocidade da volta de cada carro //
function volta(_minValue, _maxValue) {
    diff = _maxValue - _minValue;
    sortedValue = Math.round(Math.random()*diff) + _minValue;
    resultAfterDrift = sortedValue - sortedValue*drift;
}

// verifica o ganhador de cada volta//
function corrida () {
    for (var i = 0; i < numeroVoltas; i++) {
        Edna ();
        Juca ();
        Pedro ();
        if (EdnaVolta > JucaVolta && EdnaVolta > PedroVolta) {
            EdnaGanhador++;
        }
        if (JucaVolta > EdnaVolta && JucaVolta > PedroVolta) {
            JucaGanhador++;
        }
        if (PedroVolta > JucaVolta && PedroVolta > EdnaVolta) {
            PedroGanhador++;
        }
    }
    console.log ("contador edna" + EdnaGanhador);
    console.log (JucaGanhador);
    console.log (PedroGanhador);
}

//verifica quem ganhou a corrida toda = quem tem o contador de vitorias mais alto//
function ganhador() {
    if (EdnaGanhador > JucaGanhador && EdnaGanhador > PedroGanhador) {
        document.getElementById("resultado").innerHTML = "Edna Campeã /" + "\n" + "Edna ganhou:" + EdnaGanhador;
    }
    if (JucaGanhador > EdnaGanhador && JucaGanhador > PedroGanhador) {
        document.getElementById("resultado").innerHTML = "Juca Campeão /" + "\n" + "Juca ganhou:" + JucaGanhador;
    }    
    if (PedroGanhador > JucaGanhador && PedroGanhador > EdnaGanhador) {
        document.getElementById("resultado").innerHTML = "Pedro Campeão /" + "\n" + "Pedro ganhou:" + PedroGanhador;
    }
}

//corrida rapida de 10 voltas//
function rapida() {
    numeroVoltas = 10;
    corrida();
    ganhador();
    PedroGanhador = 0;
    JucaGanhador = 0;
    EdnaGanhador = 0;
}

//corrida gp de 70 voltas//
function gp() {
    numeroVoltas = 70;
    corrida();
    ganhador();
    PedroGanhador = 0;
    JucaGanhador = 0;
    EdnaGanhador = 0;
}

//corrida enduro de 160 voltas//
function enduro() {
    numeroVoltas = 160;
    corrida();
    ganhador();
    PedroGanhador = 0;
    JucaGanhador = 0;
    EdnaGanhador = 0;
}
