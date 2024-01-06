import { useEffect, useState } from "react";
import axios from '../utils/axios';
import { SERVER_URL } from "../constraint";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const ListStaff = () => {
    const [listStaff, setListStaff] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        axios.get('staff/list-all')
        .then(response=>{
            setListStaff(response.data.message)
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

    const deleteStaff = (id) => {
        axios.delete(`staff/delete`,{
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

    const ListStaffComponent = () => {
        return listStaff.length > 0 ? listStaff.map(staff=>{
            return <tr key={`key_${staff.ma}`} id={`${staff.ma}`}>
                    <td>{staff.ma}</td>
                    <td className="py-1">
                    <img src={staff.hinh_anh===''? 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg':`${SERVER_URL}${staff.hinh_anh}`} alt="image" />
                        
                    </td>
                    <td>{staff.ten}</td>
                    <td > Nam</td>
                    <td>
                        {staff.so_dien_thoai}
                    </td>
                    <td>
                        {staff.chuc_vu === 0? "Quản lý":"Nhân viên"}
                    </td>
                    <td>
                        {staff.ngay_vao_lam}
                    </td>
                    <td>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Bạn có muốn xóa không</Modal.Title>
                            </Modal.Header>

                            <Modal.Footer>
                                <Button variant="primary" onClick={()=>deleteStaff(staff.ma)}>
                                    Xóa
                                </Button>
                                <Button variant="secondary" onClick={handleClose}>
                                    Đóng
                                </Button>
                            </Modal.Footer>
                        </Modal>

                        <Link to={`/xem_nhan_vien/${staff.ma}`}>
                            <i className="fa-solid fa-eye text-success"></i>
                        </Link>
                        &nbsp;
                        <Link to={`/sua_nhan_vien/${staff.ma}`}>
                            <i className="fa-solid fa-pen text-warning"></i>
                        </Link>
                        &nbsp;

                        <button variant="primary" onClick={handleShow} style={{outline: 'none', border: 'none'}}>
                            <i className="fa-solid fa-trash text-danger"></i>
                        </button>
                    </td>   
            </tr>
        }):<tr>
            <td colSpan={3}>
                Chưa có nhân viên
            </td>
        </tr>
    }

    return <div className="card-body">
        <h4 className="card-title">Danh Sách Nhân Viên</h4>
        <table className="table table-hover" id="example">
        <thead>
            <tr> 
            <th className="font-weight-bold">Mã</th>
            <th className="font-weight-bold">Hình</th>
            <th className="font-weight-bold">Tên</th>
            <th className="font-weight-bold">Giới tính</th>
            <th className="font-weight-bold">SDT</th>
            <th className="font-weight-bold">Chức vụ</th>
            <th className="font-weight-bold">Ngày vào làm</th>
            <th className="font-weight-bold"> Hành động </th>
            </tr>
        </thead>
        <tbody>
            <ListStaffComponent />
        </tbody>
        </table>
  </div>
};

export default ListStaff;