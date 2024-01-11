import { useEffect, useState } from "react";
import { SERVER_URL } from "../constraint";
import axios from '../utils/axios';

const AddOrder = () => {
    const [listProduct, setListProduct] = useState([]);
    const [listChoose, setListChoose] = useState([]);

    useEffect(()=>{
        axios.get('product/list',{
            params: {
                page: 1,
                limit: 500,
            }
        })
        .then(response=> {
            const data = response.data.message;

            setListProduct(data.data)
        })
        .catch(error=>{
            alert("Sản phẩm không tồn tại!")
        })
    },[])

    const addListchoose = (id) =>{
        const choose = listProduct.find(el=>el.ma===id);
        const index = listChoose.findIndex(el=>el.ma===id);

        if(choose !== undefined){
            if(index===-1){
                setListChoose([...listChoose, choose])
            }else{
                if(choose.so_luong > listChoose[index].so_luong + 1){
                    listChoose[index].so_luong = listChoose[index].so_luong + 1;
                    setListChoose(listChoose);
                } else{
                    alert('Sản phẩm không đủ!')
                }
            }
        }

    }

    const removeListchoose = (id) =>{
        const index = listChoose.findIndex(el=>el.ma===id);
        const data = listChoose;
        if(index!==-1){
            if(listChoose[index].so_luong === 1){

                setListChoose(data.filter(el=>el.ma!==id));
            }else{
                data[index].so_luong = data[index].so_luong - 1;
                setListChoose(data);
            } 
        }
    }

    const ListProductComponent = () => {
        return listProduct.length > 0? listProduct.map(el=>{
            return <tr key={`list_product_${el.ma}`}>
            <td>
                {el.ma}
            </td>
            <td>
                <img src={`${SERVER_URL}${el.imagePath[0]}`}/>
            </td>
            <td>
                {el.ten}
            </td>
            <td>
                {el.gia}
            </td>
            <td>
                {el.ten}
            </td>
            <td>
                {el.mo_ta.length > 15? el.mo_ta.slice(0,15):el.mo_ta}
            </td>
            <td>
                <button  style={{outline:'none',border:'none'}} onClick={() => addListchoose(el.ma)}>
                    <i className="fa-solid fa-plus text-success"></i>
                </button>
                &nbsp;
            </td>
        </tr>
        }):<tr>
            <td colSpan={5}>Chưa có sản phẩm</td>
        </tr>
    } 

    let ListChooseComponent = () => {
        return listChoose.length > 0? listChoose.map(el=>{
            return <tr key={`list_choose_${el.ma}`}>
            <td>
                {el.ma}
            </td>
            <td>
                <img src={`${SERVER_URL}${el.imagePath[0]}`}/>
            </td>
            <td>
                {el.ten}
            </td>
            <td>
                {el.so_luong}
            </td>
            <td>
                {el.gia}
            </td>
            <td>
                {el.mo_ta.length > 15? el.mo_ta.slice(0,15):el.mo_ta}
            </td>
            <td>
                <button  style={{outline:'none',border:'none'}} onClick={() => addListchoose(el.ma)}>
                    <i className="fa-solid fa-plus text-success"></i>
                </button>
                &nbsp;
                <button  style={{outline:'none',border:'none'}} onClick={() => removeListchoose(el.ma)}>
                    <i className="fa-solid fa-trash text-danger"></i>
                </button>
            </td>
        </tr>
        }):<tr>
            <td colSpan={5}>Chưa chọn sản phẩm</td>
        </tr>
    }


    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Thêm đơn hàng</h4>
                        <form name="sualoai" action="them_don_hang.php" method="POST">
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Tên</label>
                                <input type="text" className="form-control" id="name"  placeholder="Name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername2">Giá</label>
                                <input type="text" className="form-control" id="exampleInputUsername2" value="" disabled placeholder="" name="price" required />
                            </div>
                        
                            <button type="submit" value="submit" className="btn btn-primary mr-2">Tạo</button>
                            <button className="btn btn-light">Hủy</button>
                        </form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                                <label htmlFor="exampleInputUsername1">Danh sách đã chọn</label>
                                <table className="table table-hover">
                                <thead>
                                    <tr>  

                                    <th className="font-weight-bold">STT</th>
                                    <th className="font-weight-bold">Hình</th>
                                    <th className="font-weight-bold">Tên</th>
                                    <th className="font-weight-bold">Số lượng</th>
                                    
                                    <th className="font-weight-bold">Giá</th>
                                    <th className="font-weight-bold">Mô tả</th>
                                
                                    <th className="font-weight-bold"> Hành động </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ListChooseComponent />
                                </tbody>
                            </table>
                            </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <label htmlFor="exampleInputUsername1">Danh sách chọn</label>
                        <table className="table table-hover">
                                <thead>
                                    <tr>  

                                    <th className="font-weight-bold">Mã</th>
                                    <th className="font-weight-bold">Hình</th>
                                    <th className="font-weight-bold">Tên</th>
                                    
                                    <th className="font-weight-bold">Giá</th>
                                    <th className="font-weight-bold">Loại</th>
                                    <th className="font-weight-bold">Mô tả</th>
                                
                                    <th className="font-weight-bold"> Hành động </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ListProductComponent />
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
}

export default AddOrder;