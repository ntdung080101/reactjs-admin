import { useEffect, useState } from "react";
import RequestResult from "../components/request/request-result";
import axios from '../utils/axios';
import { ListHardDrive, ListRam, ListScreen } from "../constraint";

const AddProduct = () => {
    const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState('');
    
    const [listCategory,setListCategory] = useState([]);
    const [category,setCategory] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ram, setRam] = useState(ListRam[0]);
    const [hardDrive, setHardDrive] = useState(ListHardDrive[0]);
    const [screen, setScreen] = useState(ListScreen[0]);
    const [price, setPrice] = useState(1);
    const [count, setCount] = useState(1);
    const [image,setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [image4, setImage4] = useState(null);
    
    useEffect(() => {
        setStatus(1);
        
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

    const create = () => {
        setStatus(1);
        
        if(image === null || image2 === null || image3 === null || image4 === null){
            setStatusMessage('Vui lòng chọn hình',false);
            setStatus(0);
            return;
        }

        const formData = new FormData();

        formData.append('name',name)
        formData.append('price',price)
        formData.append('count',count)
        formData.append('categoryCode',category)
        formData.append('ram',ram)
        formData.append('hardDrive',hardDrive)
        formData.append('screen',screen)
        formData.append('describe',description)

        formData.append('files',image)
        formData.append('files',image2)
        formData.append('files',image3)
        formData.append('files',image4)

        axios.post('product/create',formData,{
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(createResponse=> {
            console.log(createResponse.data)
            setStatusMessage("Thêm thành công");
        })
        .catch(error=>{
            setStatusMessage("Thêm thất bại " + JSON.stringify(error.message),false);

            console.log(JSON.stringify(error));
        })
        .finally(() => {
            setStatus(0);
        });
    }

    const clear = () => {
        setName('');
        setPrice(1);
        setCount(1);
    }

    return <div className="row">
    <div className="col-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Thêm sản phẩm</h4>
                <RequestResult status={status} success={success} error={error} />
                
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
                        <select className="form-control" id="exampleInputUsername2" name="ram" value={ram} onChange={e=> setRam(e.target.value)}>
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
                        <img id="thumbnail" src={image ? URL.createObjectURL(image) : ""} alt="your image" style={{width: '300px', height: 'auto', display:image===null? "none":"inline-block"}} />
                        <div className="input-group">
                            <input type="file" className="form-control file-upload-info" id="image" name="image" onChange={e=>setImage(e.target.files[0])} placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Hình ảnh 2</label>
                        <img id="thumbnail1" src={image2 ? URL.createObjectURL(image2) : ""} alt="your image"  style={{width: '300px', height: 'auto', display:image2===null? "none":"inline-block"}} />
                        <div className="input-group">
                            <input type="file" className="form-control file-upload-info" id="image1" name="image1" onChange={e=>setImage2(e.target.files[0])} placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Hình ảnh 3</label>
                        <img id="thumbnail2" src={image3 ? URL.createObjectURL(image3) : ""} alt="your image" style={{width: '300px', height: 'auto', display:image3===null? "none":"inline-block"}} />
                        <div className="input-group">
                            <input type="file" className="form-control file-upload-info" id="image2" name="image2" onChange={e=>setImage3(e.target.files[0])} placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputUsername1">Hình ảnh 4</label>
                        <img id="thumbnail3" src={image4 ? URL.createObjectURL(image4) : ""} alt="your image" style={{width: '300px', height: 'auto', display:image4===null? "none":"inline-block"}} />
                        <div className="input-group">
                            <input type="file" className="form-control file-upload-info" id="image3" name="image3" onChange={e=>setImage4(e.target.files[0])} placeholder=""/>
                        </div>
                    </div>
                    <button type="submit" value="submit" className="btn btn-primary mr-2" onClick={create}>Tạo</button>
                    <button className="btn btn-light" onClick={clear}>Hủy</button>
                </form>
            </div>
        </div>
    </div>
</div>
}

export default AddProduct;