//Responsavel por conectar ao arduino
const { SerialPort } = require("serialport");
const { ReadParser } = require("@serialport/parser-readline");
const arduino = new SerialPort({path:"COM4", baudRate: 9600 });
//const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
//const parser = arduino.pipe(new ReadParser({ delimiter: "READY" }));

//Funções para teste

arduino.write('Connected with Arduino')

const LigarLed = () => {
    arduino.write("1")
}

const DesligarLed = () => {
    arduino.write("0")
}

//código para test no arduino
/*
void setup() {
    pinMOde(13, OUTPUT);
    pinMode(12, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    if (Serial.available() > 0) {
        switch (Serial.read()) {
            case '1':
                {
                    digitalWrite(13, HIGH);
                }
                break;
            case '0':
                {
                    digitalWrite(12, LOW);
                }
                break;
        }
    }
}
*/

//Testes de comunicação de dados
parser.on("ready", () => {
    console.log('Sequence received');
});

parser.on("data", data => {
    console.log(data);
});

//parser.on('data', console.log());

