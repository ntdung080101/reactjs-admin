const AddProduct = ()=> {
    return <div className="row">
    <div className="col-12 grid-margin stretch-card">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Thêm sản phẩm</h4>
                <form action="them_thuc_uong.php" name="sualoai" className="forms-sample" method="POST" enctype="multipart/form-data">
                    <div className="form-group">
                        <label for="exampleInputUsername1">Tên</label>
                        <input type="text" className="form-control" id="name" required placeholder="Name" name="name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername2">Tên loại</label>
                        <select className="form-control" id="exampleInputUsername2" name="category">
                            <option value='$maloai'>$tenloai</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername3">Giá</label>
                        <input type="number" className="form-control" id="name" placeholder="giá" name="price" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername1">Mô tả</label>
                        <textarea className="form-control" id="w3review" required name="description" rows="4" cols="50">
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername1">Hình ảnh</label>
                        <img id="thumbnail" src="" alt="your image" required style={{width: '300px', height: 'auto', display:'inline-block'}} hidden/>
                        <div className="input-group">
                            <input type="file" className="form-control file-upload-info" id="image" name="image" placeholder="Image"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername1">Hình ảnh 2</label>
                        <img id="thumbnail1" src="" alt="your image"  style={{width: '300px', height: 'auto', display:'inline-block'}} hidden/>
                        <div className="input-group">
                            <input type="file" required className="form-control file-upload-info" id="image1" name="image1" placeholder="Image"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername1">Hình ảnh 3</label>
                        <img id="thumbnail2" src="" alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}} hidden/>
                        <div className="input-group">
                            <input type="file" required className="form-control file-upload-info" id="image2" name="image2" placeholder="Image"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputUsername1">Hình ảnh 4</label>
                        <img id="thumbnail3" src="" alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}} hidden/>
                        <div className="input-group">
                            <input type="file" required className="form-control file-upload-info" id="image3" name="image3" placeholder="Image"/>
                        </div>
                    </div>
                    <button type="submit" value="submit" className="btn btn-primary mr-2">Tạo</button>
                    <button className="btn btn-light">Hủy</button>
                </form>
            </div>
        </div>
    </div>
</div>
}

export default AddProduct;