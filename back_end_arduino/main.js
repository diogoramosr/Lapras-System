//Responsavel por conectar ao arduino
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const { ReadyParser } = require('@serialport/parser-ready')
const arduino = new SerialPort({path:"COM4", baudRate: 9600 });
const parserLine = arduino.pipe(new ReadlineParser({ delimiter: '\r\n' }))
const parserRead = arduino.pipe(new ReadyParser({ delimiter: "READY" }));

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
parserRead.on("ready", () => {
    console.log('Sequence received');
});

parserLine.on("data", data => {
    console.log(data);
});

parserRead.on('data', console.log);

