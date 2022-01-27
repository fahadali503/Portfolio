import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';
import { ContactUsMutation } from '../../utils/mutation/contactUs.mutation';
;


const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(15, 'Too Short!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


export const ContactForm = () => {
    console.log(process.env.NEXT_PUBLIC_BACKEND_API);
    const onHandleSubmit = async (values: {
        email: string;
        message: string;
        name: string;
    }) => {
        try {
            const res = await ContactUsMutation(values)
            toast.success("Message sent!")
        } catch (error) {
            toast.error("Something went wrong, try again later.")
        }
    }


    return <div className='mt-16'>
        <div className='w-1/2 mx-auto'>
            <div className="block shadow-yellow-500 p-10 border-t border-yellow-500 rounded-lg shadow-lg max-w-md">
                <Formik validationSchema={ContactFormSchema} initialValues={{ email: "", message: "", name: "" }} onSubmit={values => onHandleSubmit(values)}>

                    {({ handleChange, handleSubmit, errors, handleBlur, touched }) => (
                        <form onSubmit={handleSubmit} >
                            <div className="form-group mb-6">
                                <input type="text" className="form-control block                 w-full                 px-3                 py-1.5                 text-base                 font-normal                 text-gray-700                 bg-white bg-clip-padding                 border border-solid border-gray-300                 rounded                 transition                 ease-in-out                 m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Name"
                                />
                                {touched.name && errors.name ? <p className='text-red-500'>{errors.name}</p> : null}
                            </div>
                            <div className="form-group mb-6">
                                <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none" id="exampleInput8"
                                    placeholder="Email address"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email ? <p className='text-red-500'>{errors.email}</p> : null}
                            </div>
                            <div className="form-group mb-6">
                                <textarea
                                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-yellow-600 focus:outline-none"
                                    id="exampleFormControlTextarea13"
                                    rows={3}
                                    placeholder="Message"
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {touched.message && errors.message ? <p className='text-red-500'>{errors.message}</p> : null}
                            </div>
                            <button type="submit" className=" w-full      px-6      py-2.5      bg-yellow-600      text-white      font-medium      text-xs      leading-tight uppercase rounded      shadow-md      hover:bg-yellow-700 hover:shadow-lg      focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    </div>;
};
