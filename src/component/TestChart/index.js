import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


let ScoreChartTemplate = ({}) => {
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
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
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
        data: [150, 230, 224, 218, 135, 147, 260],
      },
    ],
  };
};

export default function TestChart({onImageUrl=()=>{}}) {

    const [captureState, setCaptureState] = useState(false)
    const [chart, setChart] = useState()


    const handleClickCapture = (state) => {
      setCaptureState(state)
      var img = new Image();
      setTimeout(function () {
        img = chart.getDataURL({
          pixelRatio: 2,
          backgroundColor: "black",
        });
        getImageUrl(img);
      }, 500);
    }

    const getImageUrl = (url) => {
      onImageUrl(url);
    };


    return (
      <Grid item container>

        <Grid item lg={12} align="center">  
          <ReactEcharts
              onChartReady={(chart) => {
                  setChart(chart)
              }}
              option={ScoreChartTemplate({})}
              style={{ height: 350 }}
          />
        </Grid>

        <Grid item lg={12} align="center" >
          <Button style={{color:'white',backgroundColor:"#242f39"}} onClick={()=>handleClickCapture(true)}>Capture!</Button>
        </Grid>
        
      </Grid>
        
    
    )
};



