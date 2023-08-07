import React from 'react';
import Barcharts from './BarCharts';
import PieCharts from './PieCharts';
import TrendingBloggers from './TrendingBloggers';

const Statistics = () => {
  const userBarGraphs = {
    labels: ["January", "February", "March"],
    datasets: [
      {
        label: "Customers added in past 3 months",
        backgroundColor: ["#f3ba2f",
        "#2a71d0",
          "#50AF95"
        ],
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.6)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80],
      },
    ],
  };

  const trendingBloggersData = [
    { name: 'Blogger 1', email: 'blogger1@example.com', totalFollowers: 1000, totalLikes: 5000 },
    { name: 'Blogger 2', email: 'blogger2@example.com', totalFollowers: 800, totalLikes: 4000 },
    { name: 'Blogger 3', email: 'blogger3@example.com', totalFollowers: 1200, totalLikes: 6000 },
    { name: 'Blogger 4', email: 'blogger4@example.com', totalFollowers: 1500, totalLikes: 7000 },
    { name: 'Blogger 5', email: 'blogger5@example.com', totalFollowers: 2000, totalLikes: 9000 },
  ];

  return (
    
    <div>

      <div style={{backgroundColor : 'white'}}>
          <Barcharts UserBarGraphs={userBarGraphs} chartId="user-bar-chart"/>
      </div>
      <div style={{backgroundColor : 'white'}}>
          <PieCharts pieChartData={userBarGraphs} chartId="pie-chart" />
      </div>
      <div>
        <TrendingBloggers data ={trendingBloggersData}/>
      </div>
  
    </div>
  );
};

export default Statistics;