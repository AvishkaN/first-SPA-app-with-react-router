 import React from 'react'
 import Classes from './Layout.module.css'
 import MainNavigation from './MainNavigation'

function layout(props) {
    return (
        <>
            <MainNavigation/>
            <main className={Classes.main}>{props.children}</main>
        </>
    )
}

export default layout
