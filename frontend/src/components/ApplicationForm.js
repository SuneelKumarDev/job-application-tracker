import React, {useState} from "react";
import axios from "axios";

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        status: '',
        applied_date: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/applications', formData);
        alert("Application added!");
        window.location.reload();
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="company" placeholder="Company" required onChange={handleChange} />
            <input type="text" name="role" placeholder="Role" required onChange={handleChange} />
            <input type="date" name="applied_date" required onChange={handleChange} />
            <select name="status" onChange={handleChange} required>
                <option value="">--Status--</option>
                <option value="Pending">Pending</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Hired">Hired</option>
            </select>
            <button type="submit">Add</button>
        </form>
    );
};

export default ApplicationForm;