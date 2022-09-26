import { Chart } from 'react-google-charts'
import { useEffect, useState } from 'react'
import _ from 'lodash'

//Aqui dentro ficaria os dados vindo no Banco de dados
const data = [
    { Localizacao: "Campinas", temperatura: 20, data: "21/2/2022" },
    { Localizacao: "Hortolandia", temperatura: 30, data: "22/2/2022" },
    { Localizacao: "Campinas", temperatura: 20, data: "23/2/2022" },
    { Localizacao: "Hortolandia", temperatura: 22, data: "22/2/2022" },
    { Localizacao: "Hortolandia", temperatura: 32, data: "23/2/2022" },
    { Localizacao: "Campinas", temperatura: 30, data: "24/2/2022" },
]

const options = {
    width: 300,
    height: 120,
    redFrom: 90,
    redTo: 110,
    yellowFrom: 60,
    yellowTo: 90,
    minorTicks: 5,
};

const options2 = {
    width: 300,
    height: 220,
    redFrom: 90,
    redTo: 110,
    yellowFrom: 60,
    yellowTo: 90,
    minorTicks: 5,
};

const loadData = (data) => {
    const values = _.groupBy(data, (value) => {
        return value.Localizacao
    })

    const result = _.map(values, (value, key) => {
        return [
            key,
            _.sumBy(values[key], (v) => v.temperatura)
        ]
    })

    return [["Cidade", "Temperatura"], ...result]
}


function getRandomNumber() {
    //return Math.random() * 50;
    let temperatura = Math.floor(Math.random() * 50)
    return temperatura
}
/*
function GetingData(){
    return loadData(data)
}
*/
function getData() {
    return [
        ["Label", "Value"],
        ["Campinas", getRandomNumber()],
        ["Hortolândia", getRandomNumber()],
    ];
}

function Grafico() {
    const [chartData, setChartData] = useState([])
    const [datas, setDatas] = useState(loadData(data));


    // O useEffect ficara responsavel por sempre atualizar os dados vindo do banco
    useEffect(() => {
        //setChartData(loadData(data))
        setChartData(getData())
        const id = setInterval(() => {
            setDatas(getData());
            //setDatas(loadData(data));
        }, 800);

        return () => {
            clearInterval(id);
        };

    }, [])

    const optionss = {
        chart: {
          title: "Daods",
          subtitle: "Dados sub",
        },
        hAxis: {
          title: "Temp",
          minValue: 0,
        },
        vAxis: {
          title: "City",
        },
        bars: "horizontal",
        axes: {
          y: {
            0: { side: "right" },
          },
        },
      };

    return (
        <>
            {/*<Chart chartType="Gauge" data={datas} options={options} />*/}
            {/*<Chart chartType='PieChart' data={chartData} width={"100%"} height={"400px"} />*/}
            {/*<Chart chartType='PieChart' data={chartData} options={options2} />*/}
            <Chart chartType="Bar" width="70%" height="250px" data={datas} options={optionss}/>
        </>
    )
}

export default Grafico