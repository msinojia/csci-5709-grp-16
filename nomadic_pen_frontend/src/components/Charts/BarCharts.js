import React, { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {chart as chartjs} from 'chart.js/auto';

function Barcharts({UserBarGraphs, chartId})
{
    return (<div>
        <Bar data={UserBarGraphs} id={chartId}/>
    </div>)
}

export default Barcharts;