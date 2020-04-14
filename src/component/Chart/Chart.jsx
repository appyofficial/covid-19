import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api/index";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const barChart;
  const lineChart;
  return <div>chart</div>;
};

export default Chart;
