import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { userServices } from '../services/userServices';

const Login = () => {

    const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup
        .string()
        .email('Invalid E-mail Address')
        .required('E-mail Required'),
        password: Yup
        .string()
        .required('Password required')
    });

    const onSubmit = (values, actions) => {
        
        const { email, password } = values;

        console.log(email, password)

        userServices.login(email, password)
        
        .then(response => {

            console.log(response.data);
            
            //clear the form
            actions.resetForm();

            //redirect
            if(response.data.user.role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/user')
            };
        })
        .catch(error => {
            alert(error);
        });
    };

    const { values, handleBlur, isSubmitting, touched, handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

  return (
    <div className='container mt-2 bg-light shadow mt-5 p-5'>
        <div className='row'>
            <div className='col p-5 col-md-12 col-lg-6 justify-content-center'>
                <div className='row'>
                <div className='fw-bolder fs-2'>Welcome Back To ArtVista Gallery</div>
                <div className=''>
                    <p className='p-3 lh-lg'>
                    ArtVista, a space for Indian Art and an Online Art Gallery presenting the most enchanting Indian Art Paintings. The Online Art Gallery collection includes creations by some of the best emerging and renowned artists of India. ArtVista was set up as a platform for young and established artists to showcase there artwork on global stage. Online Art Gallery and a Physical Space dealing in Indian Art and Indian Artist. ArtVista online art gallery currently boasts one of the widest collections of artwork including contemporary paintings and so much more.
                    </p>
                </div>
                </div>
            </div>
            <div className='col-md-12 col-lg-6 shadow bg-light border border-end'>
            <form onSubmit={handleSubmit} autoComplete="off" className='form p-4 col-md-6 col-lg-12'>
            <div className='text-center fs-3 fw-bolder'>
                LOGIN
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label fw-medium"> Email </label>
                <input 
                type="email" 
                id="email" 
                name='email'
                placeholder='Enter Your Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'form-control input-error' : 'form-control'}
                />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-medium">Password</label>
                <input 
                type="password" 
                id="password" 
                name='password'
                placeholder='Enter Your Password'
                autoComplete='off'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? 'form-control input-error' : 'form-control'}
                />
                {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            </div>
            <div>
            </div>
            <div className='row'>
                <button type="submit" disabled={isSubmitting} className="btn btn-primary mb-3 fs-5">Log In</button>
                <p className='fw-medium'>Not Registered? <Link to='/register'>Register</Link></p>
            </div>
        </form>
            </div>
        </div>
    </div>

  )
}

export default Login