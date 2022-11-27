import React from 'react'
import {useParams, useNavigate, useSearchParams} from 'react-router-dom'

export default function useRoute() {

    const param = useParams()
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()

    return {param, navigate, searchParams: [searchParams, setSearchParams]}
}
