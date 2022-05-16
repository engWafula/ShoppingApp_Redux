import React from 'react'
import { Alert } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { showNotification } from '../store/notificationSlice'

export default function Nortifications({type,message}) {
    const {show} = useSelector(state => state.notification)
    const dispatch=useDispatch()
  return (
      <div>
    {show && <Alert onClose={()=>dispatch(showNotification({
        show:false,
    }))} severity={type}>{message}</Alert>}
    </div>
  )
}
