import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const ListCategory = () => {
    const [listCategory, setListCategory] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=> {
        loadList();
    },[]);

    const loadList = () => {
        axios.get('category/list')
        .then(response=>{
            setListCategory(response.data.message)
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const setStatusMessage = (message, isSuccess = true) => {
        if(isSuccess){
            setSuccess(message);
            setErrors('');
        }else{
            setSuccess('');
            setErrors(message);
        }
    }

    const deleteCategory = (id) => {
        axios.delete(`category/delete`,{
            data: {
                code: id,
            },
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(response=>{
            loadList();
            setStatusMessage("Xóa thành công");

            console.log(JSON.stringify(response))
        })
        .catch(error=>{
            console.log(error);
        })

        handleClose()
    }

    const ListCategoryComponent = () => {
        return listCategory.length > 0 ? listCategory.map(category=>{
            return <tr key={`key_${category.ma}`} id={`${category.ma}`}>
                <td>{category.ten}</td>
                <td>{category.mo_ta}</td>
                <td>
                    <Link to={`/xem_loai_san_pham/${category.ma}`}>
                        <i className="fa-solid fa-eye text-success"></i>
                    </Link>
                    &nbsp;
                    <Link to={`/sua_loai_san_pham/${category.ma}`}>
                        <i className="fa-solid fa-pen text-warning"></i>
                    </Link>
                    &nbsp;

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Bạn có muốn xóa không</Modal.Title>
                        </Modal.Header>

                        <Modal.Footer>
                            <Button variant="primary" onClick={()=>deleteCategory(category.ma)}>
                                Xóa
                            </Button>
                            <Button variant="secondary" onClick={handleClose}>
                                Đóng
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <button variant="primary" onClick={handleShow} style={{outline: 'none', border: 'none'}}>
                        <i className="fa-solid fa-trash text-danger"></i>
                    </button>
                </td>
            </tr>
        }):<tr>
            <td colSpan={3}>
                Chưa có loại sản phẩm
            </td>
        </tr>
    }
    return <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Danh Sách Loại sản phẩm</h4>
                        {
                            <div className="error" style={{color: 'red', textAlign:'center', padding: '5px'}}>{error}</div>
                        }
                        {
                            <div className="error" style={{color: 'green', textAlign:'center', padding: '5px'}}>{success}</div>
                        }
                        <table className="table table-hover" id="example">
                            <thead>
                            <tr>  
                                <th className="font-weight-bold">Mã</th>
                                <th className="font-weight-bold">Tên</th>
                                <th className="font-weight-bold"> Hành động </th>
                            </tr>
                            </thead>
                            <tbody>
                                <ListCategoryComponent />
                            </tbody>
                        </table>
                </div>
            </div>
}

export default ListCategory;