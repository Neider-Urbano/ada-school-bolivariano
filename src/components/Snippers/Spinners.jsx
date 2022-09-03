import React from 'react'

const Spinners = () => {
    return (
        <div className="spinner-border animate-spin inline-block w-5 h-5 border-3 rounded-full text-gray-300" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinners