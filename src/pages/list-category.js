const ListCategory = () => {
    return <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Danh Sách Loại sản phẩm</h4>
                        <table className="table table-hover" id="example">
                            <thead>
                            <tr>  
                                <th className="font-weight-bold">Mã</th>
                                <th className="font-weight-bold">Hình</th>
                                <th className="font-weight-bold">Tên</th>
                                <th className="font-weight-bold"> Hành động </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ma</td>
                                    <td  className="py-1 ">
                                    <img src="../img/" alt="image" />
                                    </td>
                                    <td>ten loai</td>
                                    <td>
                                    <a href="xem_loai_thuc_uong?id=1">
                                        <i className="fa-solid fa-eye text-success"></i>
                                    </a>
                                    &nbsp;
                                    <a href="sua_loai_thuc_uong?id=1">
                                        <i className="fa-solid fa-pen text-warning"></i>
                                    </a>
                                    &nbsp;
                                    <a href="xoa_loai_thuc_uong?id=1">
                                        <i className="fa-solid fa-trash text-danger"></i>
                                    </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </div>
            </div>
}

export default ListCategory;