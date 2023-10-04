import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


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
        <div className="p-12 h-full">
            <div className="heading mb-6">
                <h1 className="text-3xl font-bold text-mBlue">List Of Users</h1>
                <div className="underline border-2 w-20 border-mBlue"></div>
            </div>
            <div className="table  h-2/3 p-8 pl-0">
                <div className="search-heading flex">
                    <FontAwesomeIcon icon={faUser} className="text-3xl text-mBlue mr-8"/>
                    <h3 className="text-2xl font-bold text-mBlue mb-4">Search User</h3>
                </div>
                <div className="search-input h-10 w-full mb-8">
                    <input type="text" placeholder="search user..." className="h-full mr-6 border outline-mBlue w-3/4 p-6"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-mBlue text-lg"/>
                </div>
                <table className='p-12'>
                    <thead className="p-8 h-8 bg-mBlue text-white text-left">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody className="p-8">
                        {
                            users.map((user) => (
                                <tr key={user.id} className="p-8">
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
    </div>
  )
}

export default Home
