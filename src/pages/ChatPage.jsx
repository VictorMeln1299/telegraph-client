import React, { useState, useEffect } from 'react'
import  { useLocation } from 'react-router-dom'
import MessageItem from '../components/MessageItem.jsx'

import io from 'socket.io-client'
const socket = io('http://localhost:5000')

const styles = {
    wrapper: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    cover: {
        width: '1800px',
        height: '840px',
        backgroundColor: '#fff'
    },
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    }
}

const ChatPage = () => {
    const { search } = useLocation()

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState('')
    const [user] = useState(Object.fromEntries(new URLSearchParams(search)))

    const sendMessage = () => {
        if (message.length) {
            const data = { user: user.name, message }
            socket.emit('message', data)
            setMessage('')
        }
    }

    useEffect(() => {
        socket.on('message', (data) => {
            setMessages((prev) => ([
                ...prev, data 
            ]))
        })
    }, [])

    useEffect(() => {
        for (let i = 0; i < messages.length; i++) {
            console.log(messages[i], user)
        }
    }, [messages, user])

    return (
        <div style={styles.wrapper}>
            <div style={styles.cover}>
                <div style={styles.container}>
                    <div style={{ width: '100%', height: '10%', backgroundColor: '#444', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                        <span style={{ fontSize: '24px', fontWeight: '700', color: '#fff' }}>Room</span>
                        <span style={{ color: '#ccc' }}>0 users</span>
                        <button style={{ backgroundColor: 'red', padding: '10px', border: 'none', color: 'white', width: '100px' }}>Leave</button>
                    </div>
                    <div style={{ height: '80%', display: 'flex', flexDirection: 'column', gap: '10px', padding: '20px', overflow: 'auto' }}>
                        { messages?.map((data, index) => {
                            const isMyMessage = data.user === user.name
                            return <MessageItem isAffilMessage={isMyMessage} data={data} key={index} />
                        }) }
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} style={{ width: '100%', height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ddd' }}>
                        <input type="text" name='message' value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: '800px', padding: '10px', border: 'none', outline: '10px' }} />
                        <button type='submit' onClick={sendMessage} style={{ width: '200px', padding: '10px', border: 'none' }}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ChatPage