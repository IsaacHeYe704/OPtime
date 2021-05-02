import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import { Redirect } from 'react-router';

class Chart extends Component{

    constructor(props){
        super(props);
        this.state = {
            charData:{
                labels:['Uso Celular', 'Descanso', 'Ocio'],
                datasets:[
                    {
                        label:'Horas',
                        data:[
                            7,
                            10,
                            5,
                            20
                        ],
                        backgroundColor:[
                            'rgba(54,162,235,0.6)',
                            'rgba(255,206,86,0.6)',
                            'rgba(200,130,192,0.6)'
                        ]
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className = "chart">
                <Bar
                data={this.state.charData}
                options={{
                    maintainAspectRatio: false
                }}
                />
            </div>
        )
    }
}

export default Chart;


