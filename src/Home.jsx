import { useEffect, useState } from 'react';


const Home = () => {

const url = 'https://jsonplaceholder.typicode.com/users';
const [users, setUsers] = useState([]);

    const fetchUsers = async () => {   
        try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setUsers(data);
        } catch (error) {
        console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, []);


  return (
    <div className="home">
        <h1>List Of Users</h1>
        <div className="table">
            <div className="heading">
                <h3>Search User</h3>
                <div className="underline"></div>
            </div>
            <div className="search-input">
                <input type="text" placeholder="search user..."/>
            </div>
            <table className=''>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home
