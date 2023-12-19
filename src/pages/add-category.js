const AddCategory = () => {
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Thêm loại sản phẩm</h4>
                            <form name="themloai" action="them_loai.php" className="forms-sample" method="POST" enctype="multipart/form-data">
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Tên loại</label>
                                    <input type="text" className="form-control" id="name" placeholder="Name" name="name" required />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Hình ảnh</label>
                                    <div className="input-group">
                                        <img id="thumbnail" src="#" alt="your image" hidden/>
                                        <input type="file" required className="form-control file-upload-info" id="image" name="image" placeholder="Image"/>
                                    </div>
                                </div>
                                <button type="submit" value="submit" className="btn btn-primary mr-2">Tạo</button>
                                <button className="btn btn-light">Hủy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
};

export default AddCategory;