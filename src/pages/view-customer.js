import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import RequestResult from '../components/request/request-result';
import { Link, useParams } from 'react-router-dom';
import { SERVER_URL } from '../constraint';

const ViewCustomer = () => {
    const {id} = useParams();

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(()=>{
        setStatus(1);
        axios.get('customer/get',{
            params: {
                code: id
            }
        })
        .then(response=> {
            const data = response.data.message;

            setName(data.ten)
            setImage(data.hinh_anh)
            setPhoneNumber(data.so_dien_thoai)
            setAddress(data.dia_chi)
        })
        .catch(error=>{
            alert("Khách hàng không tồn tại!")
        })
        .finally(() => {
            setStatus(0);
        });

    },[])

    return <div className="row">
    <div className="col-12 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Xem khách hàng</h4>
                    <form name="themloai" onSubmit={e=> e.preventDefault()}>
                        <RequestResult status={status} error={error} success={success} />

                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Tên</label>
                            <input type="text" className="form-control" id="name" disabled placeholder="Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Hình ảnh</label>
                            <img id="thumbnail" src={SERVER_URL + image} alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Số điện thoại</label>
                            <input type="text" className="form-control" id="name" disabled placeholder="Name" name="name" value={phoneNumber} onChange={(e)=> setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername1">Địa chỉ</label>
                            <input type="text" className="form-control" id="name" disabled placeholder="Name" name="name" value={address} onChange={(e)=> setName(e.target.value)}/>
                        </div>

                        <Link to="/danh_sach_khach_hang" className='btn btn-light'>
                            Quay về
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
}

export default ViewCustomer;