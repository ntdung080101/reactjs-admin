const ListStaff = () => {
    return <div class="card-body">
        <h4 class="card-title">Danh Sách Nhân Viên</h4>
        <table class="table table-hover" id="example">
        <thead>
            <tr> 
            <th class="font-weight-bold">Mã</th>
            <th class="font-weight-bold">Hình</th>
            <th class="font-weight-bold">Tên</th>
            <th class="font-weight-bold">Giới tính</th>
            <th class="font-weight-bold">SDT</th>
            <th class="font-weight-bold">Chức vụ</th>
            <th class="font-weight-bold">Ngày vào làm</th>
            <th class="font-weight-bold"> Hành động </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>ma</td>
            <td class="py-1">
                <img src="../img/" alt="image" />
            </td>
            <td>ten</td>
            <td>
                nam
            </td>

            <td>0123456</td>
            <td>
                nhan vien
            </td>
            <td>
                28/12/2023
            </td>

            <td>
                <a href="xem_nhan_vien?id=1">
                    <i class="fa-solid fa-eye text-success"></i>
                </a>
                &nbsp;
                <a href="sua_nhan_vien?id=1">
                    <i class="fa-solid fa-pen text-warning"></i>
                </a>
                &nbsp;
                <a href="xoa_nhan_vien?id=1">
                    <i class="fa-solid fa-trash text-danger"></i>
                </a>
            </td>
            </tr>
        </tbody>
        </table>
  </div>
};

export default ListStaff;