import {React,  useState ,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Validation from './loginvalid';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { login, selectUser } from '../features/userslice';
import {useDispatch,useSelector} from 'react-redux';

function Login() {
    const [user,setUser]=useState({});

    function handleCallbackResponse(response){
        console.log.apply("Encoded JWT ID TOKEN: "+response.credential);
        var userObject=jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
    }
    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
          client_id:"927753812393-5u5aj99fr978ego6gsmovbcog61rnf0q.apps.googleusercontent.com",
          callback : handleCallbackResponse
        });
        google.accounts.id.renderButton(
          document.getElementById("signInDiv"),
          {theme:"outline",size:"large"}
        );
    },[]);
    const [values, setValues] = useState({
        email: '',
        password: ''
      });
      const navigate = useNavigate();
      const [errors, setErrors] = useState({});
      const [backendError, setBackendError] = useState([]);
    
      const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
      const redux_user=useSelector(selectUser);
      const dispatch=useDispatch();

      const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.email === '' && err.password === '') {
          dispatch(
            login({
              email: values.email,
              password: values.password,
              loggedIn: true,
            })
          );      
        }
      };

      useEffect(()=>{
        if(redux_user){
          navigate("/GeneralLedger");
        }
      })
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log In to your Account</h2>
                <div id="signInDiv" class="d-grid gap-3 col-6 "></div><hr />``
            {backendError.length > 0&&backendError.map((e) => <p className="text-danger">{e.msg}</p>)}
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.email && (<span className="text-danger">{errors.email}</span>)}
                </div>
                <div className='mb-3'>
                    <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.password && (<span className="text-danger">{errors.password}</span>)}

                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
                <hr />
                <Link to="/Register" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>

            </form>
        </div>
        <div className='bg-white p-3 rounded w-25'>
            <img src="https://media.istockphoto.com/id/1268536882/vector/business-man-working-on-laptop-at-office-character-cartoon-vector-illustration-guy-sitting.jpg?s=612x612&w=0&k=20&c=JGqWIJu4liTMyXg9KOjfMlPKpUI_ZZvn76tlPqdCCEE="/>
        </div>
    </div>
  ) 
}

export default Login;