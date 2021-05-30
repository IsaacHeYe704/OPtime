import React, {useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import { Redirect } from 'react-router';

export const Chart = () => {
    const [labels,setLabels] = useState(['Uso Celular', 'Descanso', 'Ocio']);
    const [datasets,setDatasets] = useState([
        1,
        10,
        10,
        10  
    ]);
    const [back,setBack] = useState([
        'rgba(54,162,235,0.6)',
        'rgba(255,206,86,0.6)',
        'rgba(200,130,192,0.6)'
    ]);
    // useEffect(() => { setDatasets(this.d)},[]);
        return (
        <div className = "chart">
                <Bar
                data={{labels:labels,datasets:[{
                    label:'Horas',data:datasets,backgroundColor:back}
                    ]}}
                options={{
                    maintainAspectRatio: false
                }}
                />
        </div>
    )
}

export default Chart;


