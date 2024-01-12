import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import axios from "axios";
import { useState, useEffect } from "react";

function AllUser() {
    const [users, setUsers] = useState([]);
    const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://laradebate.jmbliss.com/api/admin/all-users`
                );
                setUsers(response?.data);
                console.log(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        <>
            <AdminDashboard />
            <div class="invoice-system">
                <div class="customer_design">
                    <h2>User Profile - Dashboard</h2>
                    <div class="custo-new-btn">
                        <a href="Create-Invoice.html">Create New</a>
                    </div>
                </div>

                <div class="table-cust container" >
                    <table class="table responsive">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Email_verified_at</th>
                                <th>Created_on</th>
                                <th>Updated_on</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users &&
                                users.map((val, index) => (
                                    <tr key={index} >
                                        <td class="checkbox" data-label="NAME">{val?.name}</td>
                                        <td data-label="COMPANY NAME">{val?.email}</td>
                                        <td data-label="EMAIL">{val?.username}</td>
                                        <td data-label="WORK PHONE">{formatDate(val?.email_verified_at)}</td>
                                        <td data-label="RECEIVABLES(BCY)"><a href=""></a>{formatDate(val?.created_at)}</td>
                                        <td data-label="RECEIVABLES(BCY)">{formatDate(val?.updated_at)}</td>
                                        <td data-label="UNUSED CREDITS(BCY)"><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></td>
                                        <td data-label="RECEIVABLES(BCY)"><a href=""><i class="fa fa-times" aria-hidden="true"></i></a></td>
                                    </tr>
                                ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}

export default AllUser;
