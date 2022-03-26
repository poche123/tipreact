import "./chartleft.scss";
import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import config from "../../config";


const Chart = ({ aspect, title }) => {

  
  const [kpi1, setResultArray] = useState([]);

  useEffect(() => {
      const kpi1 = () => {
       axios.get(config.apiUrl + '/kpi1')
        .then(
          response => setResultArray(response.data))
      }
      kpi1();
    }, []);

  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
       <BarChart
          width={500}
          height={300}
          data={kpi1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis  />
          <Tooltip />
          <Legend/>
          <Bar dataKey="Baja" fill="lightgreen" />
          <Bar dataKey="Media" fill="lightblue" />
          <Bar dataKey="Alta" fill="orange" />
          <Bar dataKey="Crítica" fill="brown" />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
