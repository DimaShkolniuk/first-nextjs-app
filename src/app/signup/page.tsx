'use client'

import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { axios } from 'axios'

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  })

  const onSingup = async () => {}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signap</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Your name"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Your Email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Your Password"
      />
      <button
        onClick={onSingup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Submit
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  )
}
