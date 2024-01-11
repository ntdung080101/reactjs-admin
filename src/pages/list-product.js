import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { SERVER_URL } from "../constraint";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ListProduct = () => {
  const [listStaff, setListStaff] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('authAdmin') || '');
  const [status, setStatus] = useState(0);
  const [error, setErrors] = useState('');
  const [success, setSuccess] = useState('');
  const [listProduct, setListProduct] = useState([]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setStatusMessage = (message, isSuccess = true) => {
    if(isSuccess){
        setSuccess(message);
        setErrors('');
    }else{
        setSuccess('');
        setErrors(message);
    }
}

  useEffect(() => {
    loadList()
  }, []);

  const loadList = () => {
    axios
    .get("product/list", {
      params: {
        page: 1,
      limit: 300
      }
    })
    .then((response) => {
      setListProduct(response.data.message);
      console.log(response.data.message);
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
    });
  }
  const deleteProduct = (id) => {
    axios.delete(`product/delete`,{
        params: {
            code: id,
        },
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    .then(response=>{
        setStatusMessage("Xóa thành công");

        loadList()
        console.log(JSON.stringify(response))
    })
    .catch(error=>{
        console.log(error);
    })

    handleClose()
}

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Danh sách sảm phẩm</h4>
        <table className="table table-hover" id="example">
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
            {listProduct.length > 0 ? (
              listProduct.map((el) => {
                return ( <tr key={`column_product_${el.ma}`}>
                      <td>{el.ma}</td>
                      <td>
                        <img src={el.imagePath.length === 0? "": `${SERVER_URL}${el.imagePath[0]}`} />
                      </td>
                      <td>{el.ten.trim()}</td>
                      <td>
                        <span className="text-danger font-weight-bold">
                          {el.gia}
                        </span>
                      </td>
                      <td>
                        <label className="badge badge-warning">
                         {el.loai}
                        </label>
                      </td>
                      <td>{el.mo_ta.trim() === ''? "Chưa có mô tả":el.mo_ta}</td>
                      <td>
                        <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                  <Modal.Title>Bạn có muốn xóa không</Modal.Title>
                              </Modal.Header>

                              <Modal.Footer>
                                  <Button variant="primary" onClick={()=>deleteProduct(el.ma)}>
                                      Xóa
                                  </Button>
                                  <Button variant="secondary" onClick={handleClose}>
                                      Đóng
                                  </Button>
                              </Modal.Footer>
                          </Modal>

                          <Link to={`/xem_san_pham/${el.ma}`}>
                              <i className="fa-solid fa-eye text-success"></i>
                          </Link>
                          &nbsp;
                          <Link to={`/sua_san_pham/${el.ma}`}>
                              <i className="fa-solid fa-pen text-warning"></i>
                          </Link>
                          &nbsp;

                          <button variant="primary" onClick={handleShow} style={{outline: 'none', border: 'none'}}>
                              <i className="fa-solid fa-trash text-danger"></i>
                          </button>
                      </td>
                    </tr>
                );
              })
            ) : (
              <>
                <tr>
                  <td colSpan={5}>Chưa có sản phẩm</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
