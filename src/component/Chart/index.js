import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
//import Button from "@material-ui/core/Grid";

// const [captureState, setCaptureState] = useState
// const getImageUrl = (url) => {onImageUrl(url)}

let ScoreChartTemplate = () => {
  let base = +new Date(1968, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let date = [];
  let data = [Math.random() * 300];
  for (let i = 1; i < 20000; i++) {
    var now = new Date((base += oneDay));
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
  }

  return {
    //Line Chart
    // xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    //   },
    //   yAxis: {
    //     type: 'value'
    //   },
    //   series: [
    //     {
    //       data: [150, 230, 224, 218, 135, 147, 260],
    //       type: 'line'
    //     }
    //   ]

    //Area Chart
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "left",
      text: "Test Chart",
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: date,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "100%"],
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 10,
      },
      {
        start: 0,
        end: 10,
      },
    ],
    series: [
      {
        name: "Test Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 70, 131)",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 158, 68)",
            },
            {
              offset: 1,
              color: "rgb(255, 70, 131)",
            },
          ]),
        },
        data: data,
      },
    ],
  };
};

const ScoreChart = ({ onImageUrl = () => {} }) => {
  const [captureState, setCaptureState] = useState(false);
  const [currentChart, setCurrentChart] = useState();

  const handleClickCapture = (state) => {
    setCaptureState(state);
  };

  const getImageUrl = (url) => {
    onImageUrl(currentChart);
  };

  return (
    <div style={{ paddingLeft: 100 }}>
      <button
        style={{ color: "black", backgroundColor: "#0000" }}
        onClick={() =>handleClickCapture(true)}
      >
        Capture Chart
      </button>

      <ReactEcharts
        onChartReady={(chart) => {
          // console.log("state echarts",captureState)
          if (captureState === true) {
            var img = new Image();
            setTimeout(function () {
              img = chart.getDataURL({
                pixelRatio: 2,
                backgroundColor: "black",
              });
              getImageUrl(img);
            }, 500);
          }
        }}
        option={ScoreChartTemplate({})}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default ScoreChart;
//export default ScoreChart.getImageUrl;

// export default function TestChart({}) {
//   return (
//     <ReactEcharts option={ScoreChartTemplate({})} style={{ height: 500 }} />
//   );
// }

//option={ScoreChartTemplate({})} style={{ height: 500 }}
