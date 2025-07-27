import React, {useEffect, useState} from "react";
import axios from "axios";

const ApplicationList = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        const res=await axios.get('http://localhost:5000/api/applications');
        setApplications(res.data);
    };

    const handleDelete = async (id) => {
        console.log("Deleting ID: ", id);
        await axios.delete('http://localhost:5000/api/applications/${id}');
        fetchApplications();
    };

    return(
        <div>
            <h3>Applications</h3>
            <table border="1" cellPadding="10">
             <thead>
                <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Applied Date</th>
                    <th>Actions</th>
                </tr>
             </thead>
             <tbody>
                {applications.map(app => (
                    <tr key={app.id}>
                        <td>{app.company}</td>
                        <td>{app.role}</td>
                        <td>{app.status}</td>
                        <td>{app.applied_date?.slice(0, 10)}</td>
                        <td>
                            <button onClick={() => handleDelete(app.id)}>Delete</button>
                            
                        </td>
                    </tr>
                ))}
             </tbody>
            </table>
        </div>
    );
};

export default ApplicationList;