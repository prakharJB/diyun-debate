import { } from "react-bootstrap";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


function Alltag() {
    const [tag, setTags] = useState([]);
    const baseUrl = `${process.env.REACT_APP_BASE_URL}/storage/app/public/`;

    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await axios.get(`https://laradebate.jmbliss.com/api/debates/tags`);
                setTags(response?.data.tags);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchTags();
    }, []);
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <AdminDashboard />
            <div class="invoice-system">
                <div class="customer_design d-flex justify-content-start mb-5 ">
                    <h2 className="mx-3" ><i class="fa fa-user mx-3" aria-hidden="true"></i>Tag</h2>
                    <Button variant="success"><i class="fa fa-plus m-1" aria-hidden="true"></i>Add New</Button>{' '}
                </div>

                <Card style={{ width: '25rem' }}>
                    <Card.Body>
                        <div className="All-tag-card" >
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Profile Picture</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>
                    </Card.Body>
                </Card>

                <div class="table-cust container all-debat" >
                    <table class="table responsive">
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tag &&
                                tag?.map((debate, index) => (
                                    <tr key={index}>
                                        <td data-label="name">{`${debate?.name}`}</td>
                                        <td data-label="Profile Picture" className="profile-img"><img src={baseUrl + debate?.image} alt="Profile" /></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default Alltag;