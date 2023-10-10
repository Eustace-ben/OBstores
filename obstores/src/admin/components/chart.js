import React, { PureComponent } from 'react';
import {ComposedChart,Line,Area,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer} from 'recharts';

const Chart = () => {

    const data = [
        {
          name: 'Jan',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'feb',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'March',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'April',
          uv: 1980,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'May',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'June',
          uv: 2590,
          pv: 720,
          amt: 1600,
        },
        {
            name: 'july',
            uv: 2300,
            pv: 680,
            amt: 1700,
          },
          {
            name: 'Aug',
            uv: 1650,
            pv: 680,
            amt: 1700,
          },
          {
            name: 'sep',
            uv: 2415,
            pv: 680,
            amt: 1700,
          },
          {
            name: 'oct',
            uv: 1819,
            pv: 680,
            amt: 1700,
          },
          {
            name: 'nov',
            uv: 2200,
            pv: 690,
            amt: 1700,
          },
          {
            name: 'dec',
            uv: 3000,
            pv: 680,
            amt: 1000,
          },
      ];
    return ( 

        <ResponsiveContainer width="95%" height="80%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
     );
}
 
export default Chart;