import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
  Fade,
} from '@mui/material';
import { MessageSquare, Plus, Trash2, Calendar } from 'lucide-react';

const ConversationList = ({ conversations, currentId, onSelect, onNewChat, onDelete }) => {
  const [hoverId, setHoverId] = useState(null);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm('Bạn có chắc chắn muốn xóa cuộc trò chuyện này?')) {
      onDelete(id);
    }
  };

  return (
    <Box
      sx={{
        width: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'rgba(248, 250, 252, 0.5)',
        borderRight: '1px solid rgba(134, 203, 222, 0.2)',
      }}
    >
      {/* Header with Glass effect */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(134, 203, 222, 0.1)'
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 800, color: '#004aad', fontSize: '1rem', letterSpacing: '-0.01em', fontFamily: "'Be Vietnam Pro', sans-serif" }}>
          Lịch sử trò chuyện
        </Typography>
        <Tooltip title="Bắt đầu chat mới">
          <IconButton
            onClick={onNewChat}
            sx={{
              color: 'white',
              background: 'linear-gradient(135deg, #519db1 0%, #004aad 100%)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              width: 32,
              height: 32,
              '&:hover': {
                transform: 'rotate(90deg) scale(1.1)',
                boxShadow: '0 4px 12px rgba(0, 74, 173, 0.2)'
              }
            }}
          >
            <Plus size={18} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* List content */}
      <List sx={{ flexGrow: 1, overflowY: 'auto', px: 1.5, py: 2 }}>
        {conversations.map((convo) => {
          const isSelected = currentId === convo.conversationId;
          return (
            <ListItem
              key={convo.conversationId}
              disablePadding
              sx={{ mb: 1 }}
              onMouseEnter={() => setHoverId(convo.conversationId)}
              onMouseLeave={() => setHoverId(null)}
            >
              <ListItemButton
                selected={isSelected}
                onClick={() => onSelect(convo.conversationId)}
                sx={{
                  borderRadius: '14px',
                  pr: 5,
                  transition: 'all 0.2s ease',
                  border: isSelected ? '1px solid rgba(81, 157, 177, 0.3)' : '1px solid transparent',
                  background: isSelected
                    ? 'white'
                    : 'transparent',
                  boxShadow: isSelected ? '0 4px 12px rgba(0, 74, 173, 0.05)' : 'none',
                  '&.Mui-selected': {
                    bgcolor: 'white',
                    '&:hover': { bgcolor: 'white' },
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    transform: 'translateX(2px)'
                  }
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '10px',
                    bgcolor: isSelected ? 'rgba(0, 74, 173, 0.08)' : 'rgba(148, 163, 184, 0.1)',
                    color: isSelected ? '#004aad' : '#94a3b8',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <MessageSquare size={18} strokeWidth={isSelected ? 2.5 : 2} />
                </Box>

                <ListItemText
                  primary={convo.title || `Trò chuyện mới`}
                  secondary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.2 }}>
                      <Calendar size={10} />
                      {new Date(convo.createdAt).toLocaleDateString('vi-VN')}
                    </Box>
                  }
                  primaryTypographyProps={{
                    fontSize: '13.5px',
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? '#004aad' : '#334155',
                    noWrap: true,
                  }}
                  secondaryTypographyProps={{ fontSize: '10px', color: '#94a3b8' }}
                />

                <Fade in={hoverId === convo.conversationId || isSelected}>
                  <IconButton
                    size="small"
                    onClick={(e) => handleDelete(e, convo.conversationId)}
                    sx={{
                      position: 'absolute',
                      right: 12,
                      color: '#cbd5e1',
                      '&:hover': {
                        color: '#ef4444',
                        bgcolor: 'rgba(239, 68, 68, 0.1)',
                        transform: 'scale(1.1)'
                      },
                    }}
                  >
                    <Trash2 size={14} />
                  </IconButton>
                </Fade>
              </ListItemButton>
            </ListItem>
          );
        })}
        {conversations.length === 0 && (
          <Box sx={{ p: 4, textAlign: 'center', opacity: 0.6 }}>
            <MessageSquare size={32} style={{ margin: '0 auto 12px', color: '#94a3b8' }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '12px' }}>
              Bắt đầu chăm sóc sức khỏe cùng NAVI AI ngay!
            </Typography>
          </Box>
        )}
      </List>
    </Box>
  );
};

export default ConversationList;
