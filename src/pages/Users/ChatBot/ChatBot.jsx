import React from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Avatar,
  IconButton,
} from '@mui/material';
import AddIcon  from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import SideBar from '../../../components/SideBar/SideBar';
import TopHeader from '../../../components/HeadBar/HeadBar';
import { SparklesIcon, UserIcon   } from 'lucide-react';
function ChatBot() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      type: 'user',
      text: 'Bạn có thể giúp gì cho tôi?',
      time: '10:00',
    },
    {
      id: 2,
      type: 'ai',
      text: `Xin chào! Tôi là trợ lý AI Sức khỏe của NAVI HEALTH. Tôi có thể giúp bạn
            Hãy cho tôi biết bạn cần hỗ trợ gì nhé!`,
      time: '10:00',
    },
  ]);
    const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          type: 'user',
          text: message,
          time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <>
        <Box sx={{display: 'flex'}}>
          <SideBar/>
          <Box>
            <TopHeader/>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100vh',
                  background: 'linear-gradient(180deg, #f0f9fb 0%, #ffffff 50%, #e8f4f8 100%)'
                }}
              >
                {/* Header */}
                <Box
                  sx={{
                    py: 2,
                    px: 4,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#519db1 0%'}}>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          background: 'linear-gradient(180deg, #519db1 0%, #004aad 100%)',
                        }}
                      >
                        <SparklesIcon size={24} />
                      </Avatar>
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: 'Arimo, sans-serif',
                            fontWeight: 700,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#004aad',
                          }}
                        >
                          AI Sức khỏe
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'Arimo, sans-serif',
                            fontWeight: 400,
                            fontSize: '12px',
                            lineHeight: '16px',
                            color: '#6a7282',
                          }}
                        >
                          Trợ lý chăm sóc sức khỏe thông minh
                        </Typography>
                      </Box>
                    </Box>

                    <Button
                      variant="contained"
                      startIcon={<AddIcon size={16} />}
                      sx={{
                        background: 'linear-gradient(180deg, #519db1 0%, #004aad 100%)',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontFamily: 'Arimo, sans-serif',
                        fontSize: '14px',
                        px: 3,
                        py: 1,
                        '&:hover': {
                          background: 'linear-gradient(180deg, #5aadc1 0%, #1159bd 100%)',
                        },
                      }}
                    >
                      Trò chuyện mới
                    </Button>
                  </Box>
                </Box>

                {/* Chat Messages */}
                <Box
                  sx={{
                    flex: 1,
                    overflow: 'auto',
                    px: 3,
                    py: 3,
                  }}
                >
                  <Container maxWidth="md">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {messages.map((msg) => (
                        <Box
                          key={msg.id}
                          sx={{
                            display: 'flex',
                            justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                            gap: 1,
                            alignItems: 'flex-start',
                          }}
                        >
                          {msg.type === 'ai' && (
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                background: 'linear-gradient(180deg, #519db1 0%, #004aad 100%)',
                              }}
                            >
                              <SparklesIcon size={16} />
                            </Avatar>
                          )}

                          <Paper
                            elevation={0}
                            sx={{
                              maxWidth: msg.type === 'ai' ? '768px' : '70%',
                              p: msg.type === 'ai' ? '13px 17px' : '12px 16px',
                              background:
                                msg.type === 'user'
                                  ? 'linear-gradient(180deg, #519db1 0%, #004aad 100%)'
                                  : 'white',
                              color: msg.type === 'user' ? 'white' : '#0a0a0a',
                              border:
                                msg.type === 'user' ? 'none' : '1px solid rgba(134, 203, 222, 0.3)',
                              borderRadius: '16px',
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: 'Arimo, sans-serif',
                                fontSize: '14px',
                                lineHeight: '22.75px',
                                whiteSpace: 'pre-line',
                                mb: 1,
                              }}
                            >
                              {msg.text}
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: 'Arimo, sans-serif',
                                fontSize: '12px',
                                lineHeight: '16px',
                                color: msg.type === 'user' ? 'rgba(255, 255, 255, 0.7)' : '#99a1af',
                              }}
                            >
                              {msg.time}
                            </Typography>
                          </Paper>

                          {msg.type === 'user' && (
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                bgcolor: 'rgba(135, 199, 236, 0.2)',
                              }}
                            >
                              <UserIcon size={16} />
                            </Avatar>
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Container>
                </Box>

                {/* Input Area */}
                <Paper
                  sx={{
                    px: 3,
                    py: '17px',
                    background: 'linear-gradient(180deg, #f0f9fb 0%, #ffffff 50%, #e8f4f8 100%)',
                  }}
                >
                  <Container maxWidth="md" >
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <Box sx={{ position: 'relative' }}>
                        <TextField
                          fullWidth
                          multiline
                          maxRows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Hỏi bất cứ điều gì về sức khỏe..."
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: '16px',
                              fontFamily: 'Arimo, sans-serif',
                              fontSize: '14px',
                              paddingRight: '48px',
                            },
                            
                          }}
                        />
                        <IconButton
                          onClick={handleSendMessage}
                          disabled={!message.trim()}
                          sx={{
                            position: 'absolute',
                            right: 8,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: message.trim()
                              ? 'linear-gradient(180deg, #519db1 0%, #004aad 100%)'
                              : '#e0e0e0',
                            width: 32,
                            height: 32,
                            '&:hover': {
                              background: message.trim()
                                ? 'linear-gradient(180deg, #5aadc1 0%, #1159bd 100%)'
                                : '#e0e0e0',
                            },
                            '&:disabled': {
                              color: 'rgba(0, 0, 0, 0.26)',
                              background: '#e0e0e0',
                            },
                          }}
                        >
                          <SendIcon sx={{paddingLeft: 0.5}} size={16} />
                        </IconButton>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: 'Arimo, sans-serif',
                            fontSize: '12px',
                            lineHeight: '16px',
                            color: '#6a7282',
                            textAlign: 'center',
                          }}
                        >
                          AI có thể mắc lỗi. Vui lòng kiểm tra thông tin quan trọng với bác sĩ.
                        </Typography>
                      </Box>
                    </Box>
                  </Container>
                </Paper>
              </Box>   
            </Box>
          </Box>
      </Box>
    </>
  )
}

export default ChatBot