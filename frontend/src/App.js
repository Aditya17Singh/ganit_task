import { useEffect, useState } from "react";
import { getData, postData } from "./api/api";

function App() {
  const [data, setData] = useState([]);

  // useEffect(async () => {
  //   const currencyData = await (
  //     await fetch("https://api.frankfurter.app/2015-01-01..2017-01-01")
  //   ).json().setData(data)
  //   // console.log(currencyData);
  //   // const { data } = await postData(currencyData)
  //   // setData(data);
  // }, []);
  useEffect(() => {
    fetch("https://api.frankfurter.app/2015-01-01..2017-01-01")
      .then((res) => res.json())
      .then((data) => setData(data.rates));
  }, []);
  // console.log(data , "data");
  // function keys() {
  //   return Object.keys(currencyData);
  // }
  var result = Object.entries(data)
  const s = result.slice(0,10).flat()
  console.log(s);
  // console.log(result);
  return (
    <div>
      {
        // result.map((val,i) => (
        //   i%2 === 0 ? <div>{val}</div>: ""
        // ))
        // <table className="container">
        //   <tr>
        //     <th>{}</th>
        //     <th>Rates</th>
        //     <th>Rates</th>
        //   </tr>
        //   <tr>
        //     <td>2021</td>
        //     <td>CDN</td>
        //     <td>2.21</td>
        //   </tr>
        //   <tr>
        //     <td>2021</td>
        //     <td>TDY</td>
        //     <td>2.21</td>
        //   </tr>
        // </table>
      }
    </div>
  );
}

export default App;
