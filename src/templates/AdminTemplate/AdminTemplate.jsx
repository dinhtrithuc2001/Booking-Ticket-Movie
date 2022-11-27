import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminTemplate() {
    return (
        <>
            <h2>Admin</h2>
            <Outlet />
        </>
    )
}
