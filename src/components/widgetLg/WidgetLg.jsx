import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await publicRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Total Price</th>
          <th className="widgetLgTh">products name</th>
          <th className="widgetLgTh">location</th>
          
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order.id}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.user_id}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.total_price}</td>
            <td className="widgetLgAmount">{order.products.map((p) => (
               <span className="widgetLgStatus"key={p.id}>{p.name} QTY `({p.quantity})` & </span>
               ))}
               </td>
            <td className="widgetLgStatus">
              <Button type={order.location} />
            </td>
          </tr>
        ))}
        {/* {orders.map((order) => (
          <tr className="widgetLgTr" key={order.id}>
            <td className="widgetLgUser">
              <span className="widgetLgTr">{order.user_id}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgAmount">${order.total_price}</td>
            <td className="widgetLgAmount">{order.products.map((p) => (
            <span className="widgetLgStatus"key={p.id}>{p.name} QTY `({p.quantity})` & </span>
            
            ))}
            </td>
            <td className="widgetLgStatus">
              <Button type={order.location} />
            </td>
          </tr>
        ))} */}
      </table>
    </div>
  );
}
