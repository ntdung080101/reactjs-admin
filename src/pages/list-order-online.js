import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { formatMoney } from "../utils/format-money";
import { ORDER_STATUS } from "../utils/order-status";

const ListOrderOnline = () => {
  const [listOrder, setListOrder] = useState([]);

    useEffect(()=>{
        axios.get('order/list-all')
        .then(result=>{
            setListOrder(result.data.message.filter(el=>el.loai === 0));
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    const ListOrderComponent = () =>{
      return listOrder.length > 0? <>
        {
          listOrder.map(el=>{
            return  <tr key={`${el.ma}_danhsachdon`}>
            <td>{el.ma}</td>
            <td>{el.ten_khach_hang}</td>
            <td>{el.so_dien_thoai}</td>
            <td className="text-danger"><b>{formatMoney(el.tong_tien)} {' VNĐ'}</b></td>
            <td>
              {el.ngay_dat}
              </td>

              <td>
              <label className="<?php echo $badgeClass; ?>">
                {ORDER_STATUS[el.trang_thai]}
              </label>
              
              </td>
              <td>
                  <a href="xem_don_hang_online.php?id=<?php echo $row['ma']?>">
                  <i className="fa-solid fa-eye text-success"></i>
                  </a>
                  &nbsp;
                  <a  href="sua_don_hang_online.php?id=<?php echo $row['ma']?>">
                  <i className="fa-solid fa-pen text-warning"></i>
                  </a>
                  &nbsp;
                  <a  href="xoa_don_hang_online.php?id=<?php echo $row['ma']?>">
                  <i className="fa-solid fa-trash text-danger"></i>
                  </a>
              </td>            
          </tr>
          })
        }
      </> : <></>
      
    }

    return <>
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">Danh Sách Đơn Hàng Online</h4>
            <table className="table table-hover" id="example">
              <thead>
                <tr>
                  <th className="font-weight-bold">Mã đơn</th>
                  <th className="font-weight-bold">Tên Khách Hàng</th>
                  <th className="font-weight-bold">SDT</th>
                  <th className="font-weight-bold">Thành Tiền</th>
                  <th className="font-weight-bold">Ngày Đặt</th>
                  <th className="font-weight-bold">Trạng Thái</th>
                  <th className="font-weight-bold">Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {listOrder.length > 0? <ListOrderComponent /> : <tr><td colSpan={5}>Không có đơn hàng</td></tr>}
              </tbody>
            </table>
        </div>
    </div>
    </>
}

export default ListOrderOnline;