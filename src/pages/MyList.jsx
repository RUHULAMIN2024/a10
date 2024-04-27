import { useState } from "react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyList = () => {

    const [items, setItems] = useState([])
    const { userInfo } = useContext(AuthContext);
    const userEmail = userInfo?.email;
    console.log(userEmail)
    useEffect(() => {
        fetch(`http://localhost:5000/tourist-spots/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setItems(data)
            })
    }, [userEmail])

    return (
        <div className="container my-10 mx-auto">
            <h2 className="text-3xl mb-3 text-center font-bold">My List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg">
                        <tr>
                            <th>Spot Name</th>
                            <th>Location</th>
                            <th>Travel Time</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item._id}>
                                    <td>{item.tourists_spot_name}</td>
                                    <td>{item.location}</td>
                                    <td>{item.travel_time}</td>
                                    <td><button className="btn bg-primary btn-sm text-white hover:text-primary">Edit</button></td>
                                    <td><button className="btn bg-secondary btn-sm text-white hover:text-red-500">Delete</button></td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyList;