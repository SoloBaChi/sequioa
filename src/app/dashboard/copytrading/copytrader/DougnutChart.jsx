"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ["Loss Trades", "Profitable trades"],
    datasets: [
      {
        label: "Trades",
        data: [1500, 4200],
        backgroundColor: ["rgba(255, 103, 103, 0.62)", "rgba(29, 192, 194, 1)"],
        borderColor: ["rgba(255, 103, 103, 0.62)", "rgba(29, 192, 194, 1)"],
        borderWidth: 1,
        cutout: "55%",
        spacing: 4, // Creates gap between segments
      },
    ],
  };

  const options = {
    plugins: {
      //   rotation: Math.PI / 4,
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
    // elements: {
    //   center: {
    //     text: "78% Win Rate",
    //     color: "#FF6384", //color of text
    //     fontStyle: "Arial", // Default is Arial
    //   },
    // },
    maintainAspectRatio: false,
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 24px sans-serif";
      ctx.fillStyle = "#225775";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "78%",
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      );
    },
  };
  //   Chart.register({
  //     id: "custom_center_text",
  //     beforeDraw: function (chart) {
  //       const width = chart.width,
  //         height = chart.height,
  //         ctx = chart.ctx;
  //       ctx.restore();
  //       const fontSize = (height / 114).toFixed(2);
  //       ctx.font = fontSize + "em sans-serif";
  //       ctx.textBaseline = "middle";

  //       const text = "78% Win Rate",
  //         textX = Math.round((width - ctx.measureText(text).width) / 2),
  //         textY = height / 2;

  //       ctx.fillText(text, textX, textY);
  //       ctx.save();
  //     },
  //   });

  return (
    <div style={{ width: "96%", height: "100%" }}>
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </div>
  );
};

export default DoughnutChart;
