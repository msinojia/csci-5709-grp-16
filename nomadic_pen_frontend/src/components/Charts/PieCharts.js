import { Pie } from "react-chartjs-2";
import {chart as chartjs} from 'chart.js/auto';

function PieCharts({pieChartData})
{return (<div>
    <Pie data={pieChartData} />
</div>)
}

export default PieCharts;