import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import {
  Bar,
} from "react-chartjs-2";
import { formatMoney } from '../utils/format-money';
import { useEffect, useState } from 'react';
import axios from '../utils/axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytic = () => {
  const [listOrder, setListOrder] = useState([]);
  const [order0, setListOrder0] = useState([]);
  const [order1, setListOrder1] = useState([]);
  const [order2, setListOrder2] = useState([]);
  const [order3, setListOrder3] = useState([]);

  const [detailOrder, setDetailOrder] = useState({});

  useEffect(()=>{
    axios.get('order/list-all')
    .then(result=>{
      const data = result.data.message;
      setListOrder(data);
      for(let index = 0;index<data.length;index++){
        const order = data[index];

        switch(order.loai){
          case 0:
            order0.push(data);
            setListOrder0(order0)
            break;
          case 1:
            order1.push(data);
            setListOrder0(order1)
            break;
          case 2:
            order2.push(data);
            setListOrder0(order2)
            break;
          case 3:
            order3.push(data);
            setListOrder0(order3)
            break;

          default:
            break;
        }

        axios.get('detail-order/list-all',{
          params:{
            orderCode: order.ma,
          }
        })
        .then(res=>{
          const listDetail = res.data.message;

          detailOrder[order.ma] = listDetail;
          setDetailOrder(listDetail)
        })  
        .catch(err=>{
          console.log(err);
        })
      }
    })
    .catch(error=>{
      console.log(error);
    })
  },[]);

  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Doanh thu theo sản phẩm</h4>
              <table className="table table-hover" id="example">
                <thead>
                  <tr>
                    <th className="font-weight-bold">Mã Sản phẩm</th>
                    <th className="font-weight-bold">Tên</th>
                    <th className="font-weight-bold">Số lượng</th>
                    <th className="font-weight-bold">Đơn giá</th>
                    <th className="font-weight-bold">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td> Laptop HP thinkpad i5 8/256GB</td>
                    <td>2</td>
                    <td>{formatMoney(12500000)} VNĐ</td>
                    <td>{formatMoney(12500000*2)} VNĐ</td>
                  </tr>
                  <tr>
                    <td>#2</td>
                    <td> Laptop DELL thinkpad i5 16/256GB</td>
                    <td>1</td>
                    <td>{formatMoney(12500000)} VNĐ</td>
                    <td>{formatMoney(12500000)} VNĐ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Doanh thu theo khách hàng</h4>
              <table className="table table-hover" id="example1">
                <thead>
                  <tr>
                    <th className="font-weight-bold">Mã khách hàng</th>
                    <th className="font-weight-bold">Tên</th>
                    <th className="font-weight-bold">Gmail</th>
                    <th className="font-weight-bold">Số lượng</th>
                    <th className="font-weight-bold">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>Tuấn</td>
                    <td>tuan01@gmail.com</td>
                    <td>1</td>
                    <td>{formatMoney(12500000)} VNĐ</td>
                  </tr>
                  <tr>
                    <td>#2</td>
                    <td>Khang</td>
                    <td>Khang1200@gmail.com</td>
                    <td>1</td>
                    <td>{formatMoney(12500000)} VNĐ</td>
                  </tr>
                  <tr>
                    <td>#3</td>
                    <td>Châu</td>
                    <td>Chaunt11@gmail.com</td>
                    <td>1</td>
                    <td>{formatMoney(12500000)} VNĐ</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Đơn hàng theo tháng 12: {listOrder.filter(el=>{
                const date = new Date(el.ngay_dat);
                const now = new Date();
                return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()
              }).length}</h4>
                <Bar
                  id="1"
                  data={{
                    labels: [
                      "Đang xử lý",
                      "Đang giao",
                      "Hoàn thành",
                      "Đã hủy",
                    ],
                    datasets: [
                      {
                        label: "Đơn hàng",
                        data: [order0.length, order1.length, order2.length, order3.length],
                        borderWidth: 1,
                        backgroundColor:['yellow','green','blue','red']
                      },
                    ],
                  }}
                />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row income-expense-summary-chart-text">
                <div className="col-xl-4">
                  <h5>Doanh thu tháng</h5>
                </div>
                <div className=" col-md-3 col-xl-2">
                  <p className="income-expense-summary-chart-legend">
                    <span style={{ borderColor: "#6469df" }}></span> Tiền vào
                  </p>
                  <h3>{formatMoney(62000000)} VNĐ</h3>
                </div>
                <div className="col-md-3 col-xl-2">
                  <p className="income-expense-summary-chart-legend">
                    <span style={{ borderColor: "#37ca32" }}></span> Tiền ra
                  </p>
                  <h3>{formatMoney(12000000)} VNĐ</h3>
                </div>
              </div>
              <div className="row income-expense-summary-chart mt-3">
                <div className="col-md-12">
                  <Bar
                    id="1"
                    data={{
                      labels: [
                        "Tháng 1",
                        "Tháng 2",
                        "Tháng 3",
                        "Tháng 4",
                        "Tháng 5",
                        "Tháng 6",
                        "Tháng 7",
                        "Tháng 8",
                        "Tháng 9",
                        "Tháng 10",
                        "Tháng 11",
                        "Tháng 12",
                      ],
                      datasets: [
                        {
                          label: "Số máy",
                          data: [0,0,0,0,0,0,2,1,1,0,2,3],
                          backgroundColor: 'green',
                        },
                      ],
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytic;
