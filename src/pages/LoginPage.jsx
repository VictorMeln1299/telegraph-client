import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [name, setName] = useState()
    // const [room, setRoom] = useState()

    return (
        <div style={{ height: '100vh' }} className='w-100 d-flex justify-content-center align-items-center'>
            <form class="w-40">
                <h1 className='text-center'>Telegraph</h1>
                <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input type="email" name='name' value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <Link to={`/chat?name=${name}`} type="submit" class="btn btn-primary w-100">Submit</Link>
            </form>
        </div>
    )
}

export default LoginPage