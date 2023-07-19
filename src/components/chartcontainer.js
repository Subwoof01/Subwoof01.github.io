import React from "react";
import BarChartCustom from "./charts/barchart";
import LineChartCustom from "./charts/linechart";
import AreaChartCustom from "./charts/areachart";
import RadarChartCustom from "./charts/radarchart";
import PieChartCustom from "./charts/piechart";

export default function ChartContainer({id, data, type}) {
    return(
        <div id={id} style={{width: "100%", height: "100%"}}>
            {(type === "bar") ? <BarChartCustom data={data}/> : (type === "line") ? <LineChartCustom data={data} /> : (type === "pie") ? <PieChartCustom data={data} /> : (type === "area") ? <AreaChartCustom data={data} /> : <RadarChartCustom data={data} />}
        </div>
    );
}