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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytic = () => {
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
              <h4 className="card-title">Đơn hàng theo tháng 12: 44</h4>
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
                        data: [12, 19, 3, 5, 2, 3],
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
