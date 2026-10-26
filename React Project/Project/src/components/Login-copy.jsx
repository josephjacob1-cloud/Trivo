
import React, { useContext, useRef, useState } from 'react'
import UserContext from './UserContext'
import '../css/style.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const userData = useContext(UserContext)

    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const pwdRef = useRef(null)
    const navigate = useNavigate()


    const login = async () => {
        const username = name.trim()
        const password = pwdRef.current?.value ?? ''

        if (!username || !password) {
            setError('Please enter username and password')
            return
        }

        try {
            setLoading(true)
            setError('')

            const params = new URLSearchParams({
                username,
                password
            })

            const response = await fetch(
                'http://127.0.0.1:8000/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: params
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.detail || 'Login failed')
            }

            if (!data.access_token) {
                throw new Error('Access token not received')
            }

            localStorage.setItem('access_token', data.access_token)

            userData.setIsLogin(true)
            userData.setUserName(username)

            navigate('/', { replace: true })

        } catch (err) {
            setError(err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }


    return (
        <div className="login container vh-100 d-flex justify-content-center align-items-center">
            <div
                className="card p-4 shadow"
                style={{ width: '100%', maxWidth: '400px' }}
            >
                <div className="card-body">
                    <p className="h3 card-title text-center mb-4">
                        Login to explore the world
                    </p>

                    <div className="mb-3">
                        <label htmlFor="username">User Name</label>
                        <input
                            id="username"
                            type="text"
                            className="form-control"
                            placeholder="Enter your user name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            ref={pwdRef}
                        />
                    </div>

                    {error && (
                        <p className="text-danger small" role="alert">
                            {error}
                        </p>
                    )}

                    <p className="small text-primary fw-bold text-end">
                        Forgot Password?
                    </p>

                    <div className="text-end">
                        <button
                            className="btn btn-primary bgTeal mx-2"
                            onClick={login}
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>

                        <button
                            className="btn btn-primary bgTeal"
                            onClick={() =>
                                navigate('/signup', { replace: true })
                            }
                        >
                            Sign Up!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
