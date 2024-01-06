import './../login.css';
import Loading from '../components/loading/loading';
import { useState } from 'react';
import globalAxios from '../utils/axios';
import { redirect } from 'react-router-dom';
import image from '../Assets/techcube.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(0);
    const [error, setErrors] = useState('');

    const clearError = () =>{
        setErrors('');
    }
    const clearInput = () => {
        setUsername('');
        setPassword('');
    }

    const login = () => {
        if(username && password) {
            setStatus(1);
            clearError();

            globalAxios.post(`auth/login-staff`,{
                userName: username,
                password: password,
            }).then(result=>{
                if(result.status === 201){
                    localStorage.setItem('authAdmin',result.data.message);
                    clearInput();
                    
                    window.location.reload(false);
                }
            })
            .catch(error=>{
                if(error.response.status === 401){
                    setErrors('Sai tài khoản hoặc mật khẩu');
                }
                if(error.response.status === 500){
                    setErrors('Server đang bị lỗi');
                }
            })
            .finally(()=>{
                setStatus(0);
            })
        }else{
            setErrors('Không để trống');
        }
    }

    return <div className="wrapper">
            <Loading status={status} />
            <div className="logo">
                <img src={image} alt="" />
            </div>
            <div className="text-center mt-4 name">
                Login admin
            </div>
            <form method='post' className="p-3 mt-3" onSubmit={e=>e.preventDefault()}>
                {
                    <div className="error" style={{color: 'red', textAlign:'center', padding: '5px'}}>{error}</div>
                }

                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" name="userName" id="userName" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" name="password" id="pwd" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="btn mt-3" onClick={login}>Đăng nhập</button>
            </form>
        </div>
    
}

export default Login;