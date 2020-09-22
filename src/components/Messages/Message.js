import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core'

import { Container } from './styles';

const Message = forwardRef(({ message, username }, ref) => {

  const isUser = username === message.username;

  return (
    <Container>
      <div ref={ref} className={`message-card ${isUser && 'message-user'}`}>
        <Card className={isUser ? "message-userCard" : "message-guestCard"}>
          <CardContent>
            <Typography
              color="white"
              variant="h5"
              component="h2"
            >
              {!isUser && `${message.username || 'Unknow user'}: `} {message.message}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Container>
  )
})

export default Message;