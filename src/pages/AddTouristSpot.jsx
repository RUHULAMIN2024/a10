import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'

const AddTouristsSpot = () => {

    const { userInfo } = useContext(AuthContext);
    const userName= userInfo.displayName;
    const userEmail= userInfo.email || null;
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = data => {
        const info={...data, userEmail, userName}

        fetch('http://localhost:5000/tourist-spots', {
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "success",
                    text: "Spot Added Successfully ",
                    icon: "success"
                
                  });
            }
        })
        
    }

    return (
        <div>
            <Helmet><title>Dream Wander | Add tourist Spot</title></Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="container p-10 my-12 rounded-2xl bg-base-200 mx-auto">
                <h2 className="text-3xl mb-3 text-center font-bold">Add Tourist Spot</h2>
                <div className="grid grid-cols-6  mx-auto gap-4">
                
                    <div className="col-span-full md:col-span-4">
                        <label htmlFor="firstname">Tourist Spot Name</label>
                        <input id="firstname" type="text" placeholder="Tourist Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("tourists_spot_name", { required: true })} />
                        {errors.tourists_spot_name && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Country Name</label>
                        <input id="firstname" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("country_Name", { required: true })} />
                        {errors.country_Name && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Location </label>
                        <input id="firstname" type="text" placeholder="Location " className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("location", { required: true })} />
                        {errors.location && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-4">
                        <label htmlFor="firstname">Image URL</label>
                        <input id="firstname" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("image", { required: true })} />
                        {errors.image && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                    
                    
                    <div className="col-span-full">
                        <label htmlFor="firstname">Short Description</label>
                        <input id="firstname" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("short_description", { required: true })} />
                        {errors.short_description && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    
                    
                    <div className="col-span-full md:col-span-3">
                        <label htmlFor="firstname">Average Cost</label>
                        <input id="firstname" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("average_cost", { required: true })} />
                        {errors.average_cost && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    <div className="hidden md:flex col-span-3"></div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Seasonality</label>
                        <input id="firstname" type="text" placeholder="Seasonality" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("seasonality", { required: true })} />
                        {errors.seasonality && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Travel Time</label>
                        <input id="firstname" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("travel_time", { required: true })} />
                        {errors.travel_time && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Total Visitors Per Year</label>
                        <input id="firstname" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" {...register("total_visitors_per_year", { required: true })} />
                        {errors.total_visitors_per_year && <span className="text-red-500 test-sm">This field is required</span>}
                    </div>
                    
                    
                    <div className="col-span-full">
                        <input value="Add Tourist Spot" className="btn w-full bg-primary hover:bg-secondary text-white" type="submit" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddTouristsSpot;