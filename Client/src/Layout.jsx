import React from 'react'
import { Outlet } from 'react-router'

// outlet // yha p hum chage kar sakte h cheejo ko like yha header same rhega footer same rhega but outlet m cheej badlegi

function Layout() {
    return (
        <>
            <Outlet/>
        </>
    )
}

export default Layout
