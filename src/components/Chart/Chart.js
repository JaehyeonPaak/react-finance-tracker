import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximun = Math.max(...dataPointValues);

    console.log(totalMaximun);

    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint) => {
                    return <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximun}
                        label={dataPoint.label}
                    ></ChartBar>
                })
            }
        </div>
    );
};

export default Chart;