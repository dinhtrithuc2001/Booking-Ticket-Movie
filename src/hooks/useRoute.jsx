import React from 'react'
import { useDispatch } from 'react-redux';
import {useParams, useNavigate, useSearchParams} from 'react-router-dom'

export default function useRoute() {

    const param = useParams()
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()

    return {param, navigate, searchParams: [searchParams, setSearchParams], dispatch}
}
