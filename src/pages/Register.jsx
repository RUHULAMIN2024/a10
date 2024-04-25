import { useState } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link,  } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Register = () => {

    const { createUser, userUpdate } = useContext(AuthContext)

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        setError("")
        const { name,photo, email, password } = data;
        console.log(data)
        if (password.length < 6) {
            setError("password should be at least 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setError("password should have at least 1 upper case")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setError("password should have at least 1 lower case")
            return;
        }
        createUser(email, password)
            .then(result => {
                userUpdate(name, photo)
                toast.success("Wow you have succesfuly registered!")
            })
            .catch(error=>{
                toast.error("Firebase Error")
                console.log(error)
            })

            

    }

    return (
        <div className="card-body rounded-xl shrink-0 w-full max-w-sm my-5 mx-auto bg-base-200">
            <Helmet><title>Dream House | Register</title></Helmet>
            <h2 className="text-3xl text-center">Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="input input-bordered" {...register("name", { required: true })} />
                    {errors.name && <span className="text-red-500">This field is required</span>
                    }
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" className="input input-bordered"{...register("email", { required: true })} />
                    {errors.email && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" placeholder="PhotoURL" className="input input-bordered" {...register("photo", { required: true })} />
                    {errors.photo && <span className="text-red-500">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="relative label">
                        <span className="label-text">Password</span>
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute text-2xl top-12 right-3">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </span>
                    </label>
                    <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />

                    {errors.password && <span className="text-red-500">This field is required</span> || error && <span className="text-red-500" >{error}</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white btn-primary">Register</button>
                </div>
            </form>
            <div className="flex justify-between">
                <p className="font-bold">Have an account?</p>
                <Link to="/Login">Please Login</Link>
            </div>
        </div>
    );
};

export default Register;