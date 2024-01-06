import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import RequestResult from '../components/request/request-result';
import { Link, useParams } from 'react-router-dom';

const ViewCategory = () => {
    const {id} = useParams();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(()=>{
        setStatus(1);
        axios.get('category/get',{
            params: {
                code: id
            }
        })
        .then(response=> {
            const data = response.data.message;

            setName(data.ten)
            setDescription(data.mo_ta)
        })
        .catch(error=>{
            alert("Loại sản phẩm không tồn tại!")
        })
        .finally(() => {
            setStatus(0);
        });

    },[])

    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Xem loại sản phẩm</h4>
                            <form name="themloai" onSubmit={e=> e.preventDefault()}>
                                <RequestResult status={status} error={error} success={success} />

                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Tên loại</label>
                                    <input type="text" className="form-control" id="name" disabled placeholder="Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Mô tả</label>
                                    <input type="text" className="form-control" id="name" disabled placeholder="Name" name="name" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                                </div>
                                <Link to={`/sua_loai_san_pham/${id}`} className='btn btn-primary'>
                                    Chỉnh sửa
                                </Link>
                                <Link to="/danh_sach_loai_san_pham" className='btn btn-light'>
                                    Quay về
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
};

export default ViewCategory;