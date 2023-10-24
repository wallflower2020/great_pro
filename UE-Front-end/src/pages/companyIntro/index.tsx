import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const CompanyIntro: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/companyIntro/inside')
    }, [])
    
    return <>
        
    </>
}

export default CompanyIntro;