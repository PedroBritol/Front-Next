'use client'

import { AuthContext } from '@/contexts/Auth'
import React, { useContext, useEffect } from 'react'

const Alert = (props) => {

    const {setError} = useContext(AuthContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(undefined)
        }, 20000)

        return () => clearTimeout(timer);
    }, [])

    let errorMessage
    props.error ? errorMessage = 'block' : errorMessage = 'hidden'

    return (
        <div className={`alert alert-warning shadow-lg ${errorMessage}`}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{props.error?.message}</span>
            </div>
        </div>
    )
}

export default Alert