import {Formik,Form,Field,ErrorMessage,FormikHelpers} from 'formik'
import * as yup from 'yup'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/Auth.context'
const LoginPage =()=>{

    const navigate = useNavigate()
    const {loginUser} = useAuthContext()

    interface LoginPageInputProps{
        email:string
        password:string
    }

    const initialValues:LoginPageInputProps={
        email:'',
        password:''
    }
    const validationSchema = yup.object({
        email:yup.string().email("email must be valid").required("email is required"),
        password:yup.string().required("Password is required"),
    })

    const onSubmitHandler=async(e:LoginPageInputProps,{resetForm}:FormikHelpers<LoginPageInputProps>)=>{
            try {

                await loginUser(e.email,e.password)
                toast.success("Login Success")
                navigate("/")
                resetForm()
            } catch (error:any) {
                toast.error(error.response.data.error.message)    
            }
    }

        return <>

    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler}  >
                <Form className="w-1/2 mx-auto my-24 px-10 py-10 rounded-md bg-slate-700 text-white">
                       
                            <div className="mb-3">
                                <label htmlFor="email">Email Address</label>
                                <Field name="email" type="email" id="email" className="w-full py-3 px-4 bg-[--color] outline-none border rounded-md" placeholder="Enter Your Name" />
                                <ErrorMessage  name="email" component={'p'} className="text-red-500 text-sm" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" id="password" className="w-full py-3 px-4 bg-[--color] outline-none border rounded-md" placeholder="Enter Your Name" />
                                <ErrorMessage  name="password" component={'p'} className="text-red-500 text-sm" />
                            </div>
                            <div className="mb-3">
                                <button className="w-full bg-blue-500 py-4 px-2 text-center text-white rounded-md outline-none border-none">Login</button>
                            </div>

                </Form>
                </Formik>

    </>
}

export default LoginPage