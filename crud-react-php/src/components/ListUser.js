import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/test/api-php-natif/api/user/read.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/test/api-php-natif/api/user/delete.php/${id}`).then(function(response){
            // console.log(id);
            getUsers();
        });
    }
    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                        <th>Actions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.type}</td>
                             <td>
                                <Link to={`${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                               <button onClick={() => deleteUser(user.id)}>Delete</button>
                           </td> 
                        </tr>
                    )}
                    
                </tbody>
            </table>
        </div>
    )
}
