import { useState } from 'react';
import axios from '../utils/axios';
import RequestResult from '../components/request/request-result';

const AddCategory = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    const clear = () => {
        setName('');
        setDescription('');
    }

    const create = () => {
        setStatus(1);
        axios.post('category/create',{
            ten: name,
            mota: description,
        },{
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(reponse=> {
            setSuccess('Thêm thành công');
            clear();
        })
        .catch(error=>{
            console.log(JSON.stringify(error));
        })
        .finally(() => {
            setStatus(0);
        });

        clear();
    }
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Thêm loại sản phẩm</h4>
                            <form name="themloai" onSubmit={e=> e.preventDefault()}>
                                <RequestResult status={status} error={error} success={success} />

                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Tên loại</label>
                                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername1">Mô tả</label>
                                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                                </div>
                                <button type="submit" value="submit" className="btn btn-primary mr-2" onClick={create}>Tạo</button>
                                <button className="btn btn-light" onClick={clear}>Hủy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
};

export default AddCategory;