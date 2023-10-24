import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const ArerIntro: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/arerIntro/regional')
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default ArerIntro