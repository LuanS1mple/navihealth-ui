import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Paper,
  Avatar,
  IconButton,
  CircularProgress,
  Fade,
  InputAdornment,
  Tooltip,
  useMediaQuery,
  useTheme,
  Drawer,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Sparkles as SparklesIcon,
  User as UserIcon,
  Paperclip,
  Zap,
  Info
} from 'lucide-react';
import requestApi from '../../../apis/apis';
import {
  CHAT,
  GET_CONVERSATIONS,
  GET_CHAT_HISTORY,
} from '../../../constants/apis';
import ConversationList from './ConversationList';

function ChatBot() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConvoId, setCurrentConvoId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetchingHistory, setFetchingHistory] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    if (currentConvoId) {
      fetchHistory(currentConvoId);
    } else {
      setMessages([
        {
          role: 'assistant',
          content: 'Xin chào! Tôi là trợ lý AI Sức khỏe chuyên biệt của NAVI HEALTH. Tôi đã nắm được thông tin sức khỏe của bạn. Bạn cần tôi tư vấn điều gì hôm nay?',
          createdAt: new Date(),
        },
      ]);
    }
  }, [currentConvoId]);

  const fetchConversations = async () => {
    try {
      const response = await requestApi(GET_CONVERSATIONS, 'GET');
      if (response && response.data) {
        setConversations(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchHistory = async (id) => {
    setFetchingHistory(true);
    try {
      const response = await requestApi(`${GET_CHAT_HISTORY}${id}`, 'GET');
      if (response && response.data) {
        setMessages(response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setFetchingHistory(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim() || loading) return;

    const userMsgText = message;
    const userMessage = {
      role: 'user',
      content: userMsgText,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      const response = await requestApi(CHAT, 'POST', {
        conversationId: currentConvoId,
        message: userMsgText,
      });

      if (response && response.data) {
        const aiMessage = {
          role: 'assistant',
          content: response.data.reply,
          createdAt: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);

        if (!currentConvoId) {
          const newId = response.data.conversationId;
          setCurrentConvoId(newId);
          fetchConversations();
        } else if (messages.length <= 2) {
          fetchConversations();
        }
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Xin lỗi, kết nối tới hệ thống AI đang gặp gián đoạn. Vui lòng thử lại sau giây lát.',
          createdAt: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = () => {
    setCurrentConvoId(null);
    setMessages([
      {
        role: 'assistant',
        content: 'Xin chào! Tôi là trợ lý AI Sức khỏe của NAVI HEALTH. Tôi có thể giúp gì cho bạn hôm nay?',
        createdAt: new Date(),
      },
    ]);
  };

  const handleDeleteChat = async (id) => {
    try {
      await requestApi(`${CHAT}/${id}`, 'DELETE');
      if (currentConvoId === id) handleNewChat();
      fetchConversations();
    } catch (error) {
      alert('Lỗi khi xóa cuộc trò chuyện');
    }
  };

  return (
    <Box
      className="page-transition"
      sx={{
        display: 'flex',
        height: isMobile ? 'calc(100vh - 80px)' : 'calc(100vh - 120px)',
        borderRadius: isMobile ? '0' : '24px',
        overflow: 'hidden',
        boxShadow: isMobile ? 'none' : '0 20px 60px rgba(0, 74, 173, 0.1)',
        bgcolor: 'white',
        border: isMobile ? 'none' : '1px solid rgba(134, 203, 222, 0.2)',
        mx: isMobile ? -1 : 0, // Bù trừ padding của MainLayout trên mobile nếu cần
      }}
    >
      {/* Sidebar for Desktop / Drawer for Mobile */}
      {!isMobile ? (
        <ConversationList
          conversations={conversations}
          currentId={currentConvoId}
          onSelect={setCurrentConvoId}
          onNewChat={handleNewChat}
          onDelete={handleDeleteChat}
        />
      ) : (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          <ConversationList
            conversations={conversations}
            currentId={currentConvoId}
            onSelect={(id) => {
              setCurrentConvoId(id);
              handleDrawerToggle();
            }}
            onNewChat={() => {
              handleNewChat();
              handleDrawerToggle();
            }}
            onDelete={handleDeleteChat}
          />
        </Drawer>
      )}

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#fff',
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Chat Header / Info Bar */}
        <Box
          sx={{
            p: 2,
            borderBottom: '1px solid rgba(134, 203, 222, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            {isMobile && (
              <IconButton onClick={handleDrawerToggle} sx={{ mr: 0.5, color: '#004aad' }}>
                <MenuIcon />
              </IconButton>
            )}
            <Avatar
              sx={{
                width: isMobile ? 32 : 40,
                height: isMobile ? 32 : 40,
                background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
                boxShadow: '0 4px 10px rgba(0, 74, 173, 0.2)'
              }}
            >
              <Zap size={isMobile ? 16 : 20} fill="white" />
            </Avatar>
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#004aad', lineHeight: 1.2, fontSize: isMobile ? '12px' : '14px' }}>
                NAVI HEALTH AI
              </Typography>
              <Typography variant="caption" sx={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600, fontSize: isMobile ? '9px' : '11px' }}>
                <Box sx={{ width: 6, height: 6, bgcolor: '#10b981', borderRadius: '50%' }} />
                Đang trực tuyến
              </Typography>
            </Box>
          </Box>
          <Tooltip title="AI được cá nhân hóa dựa trên hồ sơ sức khỏe của bạn">
            <IconButton size="small"><Info size={isMobile ? 14 : 16} color="#94a3b8" /></IconButton>
          </Tooltip>
        </Box>

        {/* Messages Container */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: { xs: 1.5, md: 4 },
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? 2 : 3,
            background: 'radial-gradient(circle at 50% 50%, rgba(81, 157, 177, 0.02) 0%, transparent 100%)',
          }}
        >
          {fetchingHistory ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10, gap: 2 }}>
              <CircularProgress size={24} sx={{ color: '#519db1' }} />
              <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 500 }}>Đang tải lịch sử trò chuyện...</Typography>
            </Box>
          ) : (
            <>
              {messages.map((msg, index) => (
                <Fade in={true} key={index} timeout={400}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                      gap: 2,
                      alignItems: 'flex-start',
                    }}
                  >
                    {msg.role !== 'user' && (
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
                          boxShadow: '0 2px 8px rgba(0, 74, 173, 0.1)'
                        }}
                      >
                        <SparklesIcon size={16} color="white" />
                      </Avatar>
                    )}

                    <Box sx={{ maxWidth: isMobile ? '90%' : '75%', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: isMobile ? '10px 16px' : '14px 20px',
                          background:
                            msg.role === 'user'
                              ? 'linear-gradient(135deg, #519db1 0%, #004aad 100%)'
                              : '#f8fafc',
                          color: msg.role === 'user' ? '#fff' : '#1e293b',
                          borderRadius: msg.role === 'user' ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
                          boxShadow: msg.role === 'user' ? '0 4px 15px rgba(0, 74, 173, 0.15)' : 'none',
                          border: msg.role === 'user' ? 'none' : '1px solid rgba(134, 203, 222, 0.15)',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: isMobile ? '13.5px' : '14.5px',
                            lineHeight: 1.6,
                            fontWeight: msg.role === 'user' ? 500 : 400,
                            letterSpacing: '0.01em'
                          }}
                        >
                          {msg.content}
                        </Typography>
                      </Paper>
                      <Typography
                        sx={{
                          fontSize: '10px',
                          color: '#94a3b8',
                          textAlign: msg.role === 'user' ? 'right' : 'left',
                          px: 1,
                          fontWeight: 600
                        }}
                      >
                        {new Date(msg.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                      </Typography>
                    </Box>

                    {msg.role === 'user' && (
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: 'rgba(0, 74, 173, 0.05)',
                          border: '1px solid rgba(0, 74, 173, 0.1)'
                        }}
                      >
                        <UserIcon size={16} color="#004aad" />
                      </Avatar>
                    )}
                  </Box>
                </Fade>
              ))}
              {loading && (
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
                    }}
                  >
                    <SparklesIcon size={16} color="white" />
                  </Avatar>
                  <Paper
                    sx={{
                      p: '16px 20px',
                      bgcolor: '#f8fafc',
                      borderRadius: '20px 20px 20px 4px',
                      display: 'flex',
                      gap: 1
                    }}
                  >
                    <Box className="typing-dot" sx={{ width: 6, height: 6, bgcolor: '#519db1', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out' }} />
                    <Box className="typing-dot" sx={{ width: 6, height: 6, bgcolor: '#519db1', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: '0.2s' }} />
                    <Box className="typing-dot" sx={{ width: 6, height: 6, bgcolor: '#519db1', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out', animationDelay: '0.4s' }} />
                  </Paper>
                </Box>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </Box>

        {/* Improved Input Area */}
        <Box sx={{ p: isMobile ? 1.5 : 3, bgcolor: 'white' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: isMobile ? 1 : 1.5,
              p: isMobile ? 1 : 1.5,
              borderRadius: isMobile ? '16px' : '20px',
              bgcolor: '#f8fafc',
              border: '1px solid rgba(134, 203, 222, 0.2)',
              transition: 'all 0.3s ease',
              '&:focus-within': {
                borderColor: '#519db1',
                boxShadow: '0 0 0 4px rgba(81, 157, 177, 0.05)',
                bgcolor: '#fff'
              }
            }}
          >
            <IconButton size="small" sx={{ color: '#94a3b8', mb: 0.5 }}><Paperclip size={isMobile ? 18 : 20} /></IconButton>
            <TextField
              fullWidth
              multiline
              maxRows={isMobile ? 4 : 6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder={isMobile ? "Hỏi AI..." : "Hỏi AI về kết quả xét nghiệm hoặc tư vấn sức khỏe..."}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  fontSize: isMobile ? '13.5px' : '14.5px',
                  fontFamily: 'Arimo, sans-serif',
                  py: isMobile ? 0.5 : 1
                }
              }}
              disabled={loading}
            />
            <IconButton
              onClick={handleSendMessage}
              disabled={!message.trim() || loading}
              sx={{
                mb: 0.5,
                background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
                color: 'white',
                width: isMobile ? 36 : 40,
                height: isMobile ? 36 : 40,
                '&:hover': { transform: 'scale(1.05)', opacity: 0.9 },
                '&:disabled': { background: '#e2e8f0', color: '#94a3b8' },
              }}
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon sx={{ fontSize: isMobile ? 18 : 20 }} />}
            </IconButton>
          </Box>
          <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 1.5, color: '#94a3b8', fontSize: '10px' }}>
            Thông tin từ AI chỉ mang tính chất tham khảo. Luôn tham vấn chuyên gia y tế cho các quyết định chẩn đoán.
          </Typography>
        </Box>
      </Box>

      {/* Add Bounce Animation locally if needed, but I'll add it to index.css too */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </Box>
  );
}

export default ChatBot;