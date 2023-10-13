import React from 'react'

const styles = {
    messageBlockMe: {
        maxWidth: '40%',
        display: 'flex',
        alignSelf: 'start',
        flexDirection: 'row',
        gap: '10px'
    },
    messageBlockOther: {
        maxWidth: '40%',
        display: 'flex',
        alignSelf: 'end',
        flexDirection: 'row-reverse',
        gap: '10px'
    }
}

const MessageItem = ({ isAffilMessage, data }) => {
    return (
        <div style={ isAffilMessage ? styles.messageBlockMe : styles.messageBlockOther }>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', flexShrink: '0' }}>
                <img src="/favicon.ico" alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '10px', backgroundColor: '#00ffff', borderRadius: '10px' }}>
                <span style={{ fontWeight: '500', fontSize: '18px' }}>{ data.user }</span>
                <span style={{ fontSize: '12px', lineHeight: '14px', color: '#999' }}>{ data.message }</span>
                <span style={{ fontSize: '10px', fontWeight: '500', alignSelf: 'end', color: '#000' }}>27.01.2021 12:03</span>
            </div>
        </div>
    )
}

export default MessageItem