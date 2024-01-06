import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { SERVER_URL } from "../constraint";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const ListCustomer = () => {
    const [listCustomer, setListCustomer] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        axios.get('customer/list')
        .then(response=>{
            setListCustomer(response.data.message)
        })
        .catch(error=>{
            console.log(error);
        })
    },[]);

    const setStatusMessage = (message, isSuccess = true) => {
        if(isSuccess){
            setSuccess(message);
            setErrors('');
        }else{
            setSuccess('');
            setErrors(message);
        }
    }

    const deleteCustomer = (id) => {
        axios.delete(`customer/delete`,{
            data: {
                code: id,
            },
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(response=>{
            setStatusMessage("Xóa thành công");

            console.log(JSON.stringify(response))
        })
        .catch(error=>{
            console.log(error);
        })

        handleClose()
    }

    const ListCustomerComponent = () => {

        return listCustomer.length > 0 ? listCustomer.map(customer=>{
            return <tr key={`key_${customer.ma}`} id={`${customer.ma}`}>
                    <td>{customer.ma}</td>
                    <td className="py-1">
                    <img src={customer.hinh_anh===''? 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg':`${SERVER_URL}${customer.hinh_anh}`} alt="image" />
                        
                    </td>
                    <td>{customer.ten}</td>
                    <td>
                        {customer.so_dien_thoai}
                    </td>
                    <td>
                        {customer.dia_chi}
                    </td>
                    <td>
                        <a href={`/xem_khach_hang/${customer.ma}`}>
                            <i className="fa-solid fa-eye text-success"></i>
                        </a>
                    </td>   
            </tr>
        }):<tr>
            <td colSpan={3}>
                Chưa có khách hàng
            </td>
        </tr>
    }

    return <div className="card-body">
            <h4 className="card-title">Danh Sách Khách Hàng</h4>
            <table className="table table-hover" id="example">
            <thead>
                <tr> 
                <th className="font-weight-bold">Mã</th>
                <th className="font-weight-bold">Hình</th>
                <th className="font-weight-bold">Tên</th>
                <th className="font-weight-bold">SDT</th>
                <th className="font-weight-bold">Địa chỉ</th>
                <th className="font-weight-bold"> Hành động </th>
                </tr>
            </thead>
            <tbody>
                < ListCustomerComponent />
            </tbody>
            </table>
        </div>
};

export default ListCustomer;