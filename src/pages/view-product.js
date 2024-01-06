import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import RequestResult from '../components/request/request-result';
import { Link, useParams } from 'react-router-dom';
import { SERVER_URL } from '../constraint';

const ViewProduct = () => {
    const {id} = useParams();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [screen, setScreen] = useState('');
    const [storage, setStorage] = useState('');
    const [ram, setRam] = useState('');
    const [description, setDescription] = useState('');
    const [count, setCount] = useState('');
    const [image, setImage] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');

    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(()=>{
        setStatus(1);
        axios.get('product/get',{
            params: {
                code: id
            }
        })
        .then(response=> {
            const data = response.data.message;

            console.log(data)

            setName(data.ten)
            setCategory(data.gia)
            setPrice(data.gia)
            setScreen(data.man_hinh)
            setCount(data.so_luong)
            setDescription(data.mo_ta)
            setStorage(data.o_cung)
            setRam(data.ram)
            setStorage(data.o_cung)

            setImage(data.imagePath.at(0)?? "")
            setImage2(data.imagePath.at(1)?? "")
            setImage3(data.imagePath.at(2)?? "")
            setImage4(data.imagePath.at(3)?? "")
        })
        .catch(error=>{
            alert("Sản phẩm không tồn tại!")
        })
        .finally(() => {
            setStatus(0);
        });

    },[])

    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Xem thông tin thức uống</h4>
                        <RequestResult status={status} error={error} success={success} />

                        <div name="sualoai" className="forms-sample" method="GET">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Tên</label>
                                <input type="text" className="form-control" value={name} id="name" disabled  placeholder="Name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Tên loại</label>
                                <input type="text" className="form-control" value={category} id="name" disabled  placeholder="Name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Mô tả</label>
                                <textarea className="form-control" id="w3review" value={description} name="w3review" rows="4" cols="50" disabled>
                                </textarea>
                            </div>
                            <div className="form-group" style={{display:'flex', overflow: 'scroll'}}>
                                <label htmlFor="exampleInputUsername1">Hình ảnh</label>
                                <img id="thumbnail" src={SERVER_URL + image} alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                <img id="thumbnail" src={SERVER_URL + image2} alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                <img id="thumbnail" src={SERVER_URL + image3} alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                <img id="thumbnail" src={SERVER_URL + image4} alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                            </div>
                            <Link to={`/sua_san_pham/${id}`} className='btn btn-primary'>
                                    Chỉnh sửa
                            </Link>
                            <Link to="/danh_sach_san_pham" className='btn btn-light'>
                                Quay về
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
};

export default ViewProduct;