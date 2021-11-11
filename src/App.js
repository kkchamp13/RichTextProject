import "./App.css";
import Image from "./Image";
//import TestChart from './component/Chart';
import { Grid } from "@material-ui/core";
import TestChart from "./component/TestChart"
import React, {useState} from "react";


function App() {

  const [imageUrl, setImageUrl] = useState("")

  const getImageUrl = (url) => {
    setImageUrl(url)
  }

  return (
    <>
      <Grid  container>
        {/* Call Echarts component */}
        <Grid item xs={6} >
          <TestChart onImageUrl={getImageUrl}> </TestChart>
        </Grid>
        {/* Call TextEditor component */}
        <Grid item xs={6} >
          <Image imageUrl={imageUrl} ></Image>
        </Grid>
      </Grid>
    </>
  );
}

export default App;