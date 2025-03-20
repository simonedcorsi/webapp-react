import Header from '../components/Header'
import { Outlet } from "react-router-dom"

import GlobalContext from '../contexts/globalContext'
import Loader from '../components/Loader'
import { useContext } from 'react'

export default function DefaultLayout() {
    
    const {isLoading} = useContext(GlobalContext)

    return(
        <>
            <Header/>
            <main className='container'>
                <Outlet/>
            </main>

            {isLoading && <Loader />}
            
        </>
    )
}