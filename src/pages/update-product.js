import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import RequestResult from '../components/request/request-result';
import { Link, useParams } from 'react-router-dom';
import { ListHardDrive, ListRam, ListScreen, SERVER_URL } from '../constraint';

const UpdateProduct = () => {
    const {id} = useParams();
    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');

    const [listCategory,setListCategory] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [screen, setScreen] = useState(ListScreen[0]);
    const [hardDrive, setHardDrive] = useState(ListHardDrive[0]);
    const [listRam, setListRam] = useState(ListRam[0]);
    const [description, setDescription] = useState('');
    const [count, setCount] = useState('');

    const [image, setImage] = useState('');
    const [oldImage, setOldImage] = useState('');
    const [image2, setImage2] = useState('');
    const [oldImage2, setOldImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [oldImage3, setOldImage3] = useState('');
    const [image4, setImage4] = useState('');
    const [oldImage4, setOldImage4] = useState('');

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
            setHardDrive(data.o_cung)
            setListRam(data.ram)
            setHardDrive(data.o_cung)

            setImage(data.imagePath.at(0)?? "")
            setOldImage(data.imagePath.at(0)?? "")

            setImage2(data.imagePath.at(1)?? "")
            setOldImage2(data.imagePath.at(1)?? "")

            setImage3(data.imagePath.at(2)?? "")
            setOldImage3(data.imagePath.at(2)?? "")

            setImage4(data.imagePath.at(3)?? "")
            setOldImage4(data.imagePath.at(3)?? "")
        })
        .catch(error=>{
            alert("Sản phẩm không tồn tại!")
        })
        .finally(() => {
            setStatus(0);
        });

        axios.get('category/list',{},{
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(reponse=> {
            if(reponse.data.statusCode === 200){
                setListCategory(reponse.data.message)
            }
        })
        .catch(error=>{
            console.log(JSON.stringify(error));
        })
        .finally(() => {
            setStatus(0);
        });

    },[])

    
    const setStatusMessage = (message, isSuccess = true) => {
        if(isSuccess){
            setSuccess(message);
            setErrors('');
        }else{
            setSuccess('');
            setErrors(message);
        }
    }

    const update = () => {
        setStatus(1);
        
        axios.put('product/update',{
            code: id,
            name,
            price,
            count,
            categoryCode: category,
            ram: listRam,
            hardDrive: hardDrive,
            screen,
            description
        },{
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(createResponse=> {
            console.log(createResponse.data)
            setStatusMessage("Cập nhật thành công");
        })
        .catch(error=>{
            setStatusMessage("Cập nhật thất bại " + JSON.stringify(error.message),false);

            console.log(JSON.stringify(error));
        })
        .finally(() => {
            setStatus(0);
        });

        if(!(typeof image === 'string') ){
            alert('upload file 1')
            updateImage(oldImage, image);
        }
        if(!(typeof image2 === 'string')){
            alert('upload file 2')
            updateImage(oldImage2, image2);
        }
        if(!(typeof image3 === 'string')){
            alert('upload file 3')
            updateImage(oldImage3, image3);
        }
        if(!(typeof image4 === 'string')){
            alert('upload file 4')
            updateImage(oldImage4, image4);
        }
    }

    const updateImage = (oldPath, newPath) => {
        const formData = new FormData();

        formData.append('productCode',id);
        formData.append('oldPath',oldPath);
        formData.append('file',newPath);

        axios.put('product-image/update',formData,{
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(createResponse=> {
            console.log(createResponse.data)
        })
        .catch(error=>{
            console.log(JSON.stringify(error));
        })
        .finally(() => {
            setStatus(0);
        });
    }

    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Cập nhật thông tin thức uống</h4>
                        <RequestResult status={status} error={error} success={success} />

                        <form className="forms-sample" onSubmit={e=>e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Tên</label>
                                <input type="text" className="form-control" id="name" placeholder="" name="name" value={name} onChange={e=>setName(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername2">Tên loại</label>
                                    {
                                        listCategory.length > 0?
                                        <>
                                            <select className="form-control" id="exampleInputUsername2" name="category" value={category} onChange={e=> setCategory(e.target.value)}>
                                                {listCategory.map(el=><option key={`option_category_${el.ma}`} value={el.ma}>{el.ten}</option>)}
                                            </select>
                                        </> : <p> Không có loại sản phẩm</p>
                                    }
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername3">Ram</label>
                                <select className="form-control" id="exampleInputUsername2" name="ram" value={listRam} onChange={e=> setListRam(e.target.value)}>
                                    {ListRam.map(el=><option key={`option_ram_${el}`} value={el}>{el}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername3">Ổ cứng</label>
                                <select className="form-control" id="exampleInputUsername2" name="hardDrive" value={hardDrive} onChange={e=> setHardDrive(e.target.value)}>
                                    {ListHardDrive.map(el=><option key={`option_hardDrive_${el}`} value={el}>{el}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername3">Màn hình</label>
                                <select className="form-control" id="exampleInputUsername2" name="screen" value={screen} onChange={e=> setScreen(e.target.value)}>
                                                {ListScreen.map(el=><option key={`option_screen_${el}`} value={el}>{el}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername3">Giá</label>
                                <input type="number" className="form-control" id="price" placeholder="price" name="price" value={price} onChange={e=>setPrice(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername3">Số lượng</label>
                                <input type="number" className="form-control" id="count" placeholder="count" name="count" value={count} onChange={e=>setCount(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Mô tả</label>
                                <textarea className="form-control" id="description" name="description" rows="4" cols="50" value={description} onChange={e=>setDescription(e.target.value)}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Hình ảnh</label>
                                <img id="thumbnail" src={image ? typeof image === 'string' ? `${SERVER_URL + image}` : URL.createObjectURL(image): ""} alt="your image" style={{width: '300px', height: 'auto', display:image===null? "none":"inline-block"}} />
                                <div className="input-group">
                                    <input type="file" className="form-control file-upload-info" id="image" name="image" onChange={e=>setImage(e.target.files[0])} placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Hình ảnh 2</label>
                                <img id="thumbnail1" src={image2 ? typeof image2 === 'string' ? `${SERVER_URL + image2}` : URL.createObjectURL(image2): ""} alt="your image"  style={{width: '300px', height: 'auto', display:image2===null? "none":"inline-block"}} />
                                <div className="input-group">
                                    <input type="file" className="form-control file-upload-info" id="image1" name="image1" onChange={e=>setImage2(e.target.files[0])} placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Hình ảnh 3</label>
                                <img id="thumbnail2" src={image3 ? typeof image3 === 'string' ? `${SERVER_URL + image3}` : URL.createObjectURL(image3): ""} alt="your image" style={{width: '300px', height: 'auto', display:image3===null? "none":"inline-block"}} />
                                <div className="input-group">
                                    <input type="file" className="form-control file-upload-info" id="image2" name="image2" onChange={e=>setImage3(e.target.files[0])} placeholder=""/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Hình ảnh 4</label>
                                <img id="thumbnail3" src={image4 ? typeof image4 === 'string' ? `${SERVER_URL + image4}` : URL.createObjectURL(image4): ""} alt="your image" style={{width: '300px', height: 'auto', display:image4===null? "none":"inline-block"}} />
                                <div className="input-group">
                                    <input type="file" className="form-control file-upload-info" id="image3" name="image3" onChange={e=>setImage4(e.target.files[0])} placeholder=""/>
                                </div>
                            </div>
                            <button type="submit" value="submit" className="btn btn-primary mr-2" onClick={update}>Tạo</button>
                            <Link to="/danh_sach_san_pham" className='btn btn-light'>
                                    Quay về
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
};

export default UpdateProduct;