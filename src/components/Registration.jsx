import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { userServices } from '../services/userServices';


const Registration = () => {

    const navigate = useNavigate();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        cPassword: '',
        address: '',
        phone: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup
        .string()
        .required('Name Required'),
        email: Yup
        .string()
        .email('Invalid E-mail Address')
        .required('Email Required'),
        password: Yup
        .string()
        .min(5, 'Minimum 5 Characters Required')
        .required('Password Required'),
        cPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Password Must Match')
        .required('Password Required'),
        address: Yup
        .string()
        .required('Address Required'),
        phone: Yup
        .number()
        .min(10, 'Enter 10 digit number')
        .required('Phone Number Required')
    });

    const onSubmit = (values, actions) => {

        const { name, email, password, address, phone } = values;

        userServices.register(name, email, password, address, phone)
        .then(response => {
            alert(response.data.message);
            actions.resetForm();
            navigate('/login');
        })
        .catch(error => {
            alert(error.response.message);
        })
    };

    const { values, handleBlur, isSubmitting, touched, handleChange, errors, handleSubmit } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });




  return (
    <div className='container mt-2 bg-light shadow p-5'>
        <div className='row'>
            <div className='p-5 col-md-12 col-lg-6'>
                <div>
                <div className='fw-bolder fs-1'>Welcome To ArtVista Gallery</div>
                <div>
                    <p className='p-3 lh-lg'>
                    ArtVista, a space for Indian Art and an Online Art Gallery presenting the most enchanting Indian Art Paintings. The Online Art Gallery collection includes creations by some of the best emerging and renowned artists of India. ArtVista was set up as a platform for young and established artists to showcase there artwork on global stage. Online Art Gallery and a Physical Space dealing in Indian Art and Indian Artist. ArtVista online art gallery currently boasts one of the widest collections of artwork including contemporary paintings and so much more.
                    </p>
                </div>
                </div>
            </div>
            <div className='col-md-12 col-lg-6 shadow bg-light border border-end '>
                <form onSubmit={handleSubmit} autoComplete="off" className='form p-4'>
                    <div className='mb-2 text-center fs-4 fw-bold'>
                        Register
                    </div>
                    <div className="mb-2">
                        <label htmlFor="name" className="form-label fw-medium"> Name </label>
                        <input 
                        type="text" 
                        id="name"
                        name='name'
                        placeholder='Enter Your Name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.name && touched.name ? 'form-control input-error' : 'form-control'}
                        />
                        {errors.name && touched.name && <p className='error'>{errors.name}</p>}
                    </div>
                    <div className="mb-2">
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
                    <div className="mb-2">
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
                        className={errors.password && touched.password ? 'form-control input-error'  : 'form-control'}
                        />
                        {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="cPassword" className="form-label fw-medium"> Confirm Password </label>
                        <input 
                        type="password"
                        id="cPassword" 
                        name='cPassword'
                        placeholder='Re-Enter Your Password'
                        autoComplete='off'
                        value={values.cPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.cPassword && touched.cPassword ? 'form-control input-error' : 'form-control'}
                        />
                        {errors.cPassword && touched.cPassword && <p className='error'>{errors.cPassword}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="address" className="form-label fw-medium"> Address </label>
                        <input 
                        type="text" 
                        id="address"
                        name='address'
                        placeholder='Enter Your address'
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.address && touched.address ? 'form-control input-error' : 'form-control'}
                        />
                        {errors.address && touched.address && <p className='error'>{errors.address}</p>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone" className="form-label fw-medium"> Phone </label>
                        <input 
                        type="number" 
                        id="number"
                        name='phone'
                        placeholder='Enter Your Phone Number'
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.phone && touched.phone ? 'form-control input-error' : 'form-control'}
                        />
                        {errors.phone && touched.phone && <p className='error'>{errors.phone}</p>}
                    </div>
                    <div className='row'>
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary my-2 fs-5">Register</button>
                        <p className='fw-medium'>Already Registered? <Link to='/login'>Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Registration