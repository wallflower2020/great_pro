import React, { useEffect, useState } from "react";
import { get3dPieChart } from "./service";
import Chart from "../../../components/echarts/chart";

const TravelTicket: React.FC<any> = () => {
    const [options, setOptions] = useState({});

    useEffect(() => {
        get3dPieChart().then((result: any) => {
            if (result) {
                setOptions(result)
            }
        });
    }, [])

    return <>
        <Chart style={{ height: 200, width: 400, boxSizing: "border-box" }}
            options={options}
        />
    </>
}

export default TravelTicket