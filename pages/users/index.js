import React from 'react'
import Layout from '../../components/Layout';
import axios from 'axios'

import Link from "next/link"
import { useRouter } from 'next/router';
import userId from './[id]';



// so wheneve http://localhost:3000/users is entered this will be shown

// users coming as a prop due to getStaticProps()
const Index = ({ users }) => {

    const router = useRouter()

    return (
        <Layout>
            <div className="container">
                <h2 className='border'>All user List</h2>

                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            users.map(item => (
                                <tr key={item.id}>

                                    {/* 
                                    means when the block is clicked using router we have appended the corresponding id to it 
                                    */}

                                    <td
                                        onClick={() => { router.push(`/users/${item.id}`) }}
                                        className='cursor-pointer hover:bg-light'>
                                        {item.name}
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </Layout>
    )
}

export default Index


export async function getStaticProps() {
    try {
        // mostly companies use axios
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        const res = data.data
        return {
            // as props is an object
            props: {
                users: res
            }
        }
    } catch (error) {
        console.log(error);
    }
}