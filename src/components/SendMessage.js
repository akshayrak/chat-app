import { Button, Input } from '@material-ui/core'
import React,{useState} from 'react'
import {db, auth} from '../firebase'
import firebase from 'firebase'

const SendMessage = () => {
    const [msg,setMsg] = useState('')
    const sendMessage = async (e) =>{
        e.preventDefault()
        const temp =msg
        setMsg('')

        const {uid,photoURL} = auth.currentUser
        msg!==""&&(
        await db.collection('messages').add({
            text: temp,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
            
        }))

    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <Input value={msg} onChange={e=>setMsg(e.target.value)} type="text" />
                <Button type="submit">Send</Button>
            </form>
        </div>
    )
}

export default SendMessage
