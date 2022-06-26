import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import { userRequest ,publicRequest } from "../../requestMethods";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
    ],
    []
  );

  // const MONTHS = useMemo(
  //   () => [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Agu",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ],
  //   []
  // );

  useEffect(() => {
    const getStats = async () => {

      try {
       const res = await publicRequest.get("/register/date");
       res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item.month.substring(5, 7) - 0], "Active User": item.ids.split(',').length  },
          ])
        );
      } catch {}
      // try {
      //   const res = await publicRequest.get("/register/date");
      //   res.data.map((item) =>
      //   console.log(item)
      //   // const the = item.ids
      //   // var t =  the.split(',').length 
      //   //     console.log(t)
        
      //     // setUserStats((prev) => [
      //     //   ...prev,
      //     //   { name: MONTHS[item.month - 1], "Active User": item.ids },
      //     // ])
         
      // );
      // } catch {}
    };
    getStats();

  },[MONTHS]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
