const ViewProduct = () => {
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Xem thông tin thức uống</h4>
                        <div name="sualoai" className="forms-sample" method="GET">
                            <div className="form-group">
                                <label for="exampleInputUsername1">Tên</label>
                                <input type="text" className="form-control" id="name" disabled  placeholder="Name" name="name" value="" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Tên loại</label>
                                <input type="text" className="form-control" id="name" disabled  placeholder="Name" name="name" value="" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Mô tả</label>
                                <textarea className="form-control" id="w3review" name="w3review" rows="4" cols="50" disabled>
                                </textarea>
                            </div>
                            <div className="form-group" style={{display:'flex'}}>
                                <label for="exampleInputUsername1">Hình ảnh</label>
                                <img id="thumbnail" src="../img/" alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                <img id="thumbnail" src="../img/" alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                <img id="thumbnail" src="../img/" alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                <img id="thumbnail" src="../img/" alt="your image" style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                            </div>
                            <button value="submit" className="btn btn-primary mr-2">
                                <a href="thuc_uong.php" style={{color:'white'}}>Quay về</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
};

export default ViewProduct;