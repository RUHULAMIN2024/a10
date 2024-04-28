import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {

    const spot = useLoaderData();

    console.log(spot)

    const {
        _id,
        tourists_spot_name,
        country_Name,
        location,
        image,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
        userEmail,
        userName
    } = spot;

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;

        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const image = form.image.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const total_visitors_per_year = form.total_visitors_per_year.value;

        const updateSpot={
            tourists_spot_name,
            country_Name,
            location,
            image,
            short_description,
            average_cost,
            seasonality,
            travel_time,
            total_visitors_per_year};
            console.log(updateSpot)

            fetch(`http://localhost:5000/tourist-spots/${_id}`, {
                method: 'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateSpot)
            })
            .then(res => res.json(updateSpot))
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: "success",
                        text: "Spot Updated Successfully ",
                        icon: "success"
                    
                      });
                }
            })
    }


    return (
        <div>
            <Helmet><title>Dream Wander | Update Spot</title></Helmet>
            <form onSubmit={handleSubmit} className="container p-10 my-12 rounded-2xl bg-base-200 mx-auto">
                <h2 className="text-3xl mb-3 text-center font-bold">Update Your Tourist Spot</h2>
                <div className="grid grid-cols-6  mx-auto gap-4">

                    <div className="col-span-full md:col-span-4">
                        <label htmlFor="firstname">Tourist Spot Name</label>
                        <input id="firstname" type="text" required defaultValue={tourists_spot_name} name="tourists_spot_name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Country Name</label>
                        <input id="firstname" type="text" required defaultValue={country_Name} name="country_Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Location </label>
                        <input id="firstname" type="text" required defaultValue={location} name="location" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full md:col-span-4">
                        <label htmlFor="firstname">Image URL</label>
                        <input id="firstname" type="text" required defaultValue={image} name="image" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="firstname">Short Description</label>
                        <input id="firstname" type="text" required defaultValue={short_description} name="short_description" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full md:col-span-3">
                        <label htmlFor="firstname">Average Cost</label>
                        <input id="firstname" type="text" required defaultValue={average_cost} name="average_cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="hidden md:flex col-span-3"></div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Seasonality</label>
                        <input id="firstname" type="text" required defaultValue={seasonality} name="seasonality" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Travel Time</label>
                        <input id="firstname" type="text" required defaultValue={travel_time} name="travel_time" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>
                    <div className="col-span-full md:col-span-2">
                        <label htmlFor="firstname">Total Visitors Per Year</label>
                        <input id="firstname" type="text" required defaultValue={total_visitors_per_year} name="total_visitors_per_year" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2" />
                    </div>


                    <div className="col-span-full">
                        <input value="Update" className="btn w-full bg-primary hover:bg-secondary text-white" type="submit" />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default UpdateSpot;