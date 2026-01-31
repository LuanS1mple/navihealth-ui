import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  IconButton,
  Chip,
  Avatar,
  Tooltip,
} from '@mui/material';
import {
  Calendar,
  Clock,
  Edit2,
  Trash2,
} from 'lucide-react';

const DAYS_OF_WEEK_LABELS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

function Reminder({ reminder, onToggle, onEdit, onDelete }) {
  const getFrequencyLabel = (days) => {
    if (!days || days.length === 0) return 'Một lần';
    if (days.length === 7) return 'Hàng ngày';
    return days.map(d => DAYS_OF_WEEK_LABELS[d]).join(', ');
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        border: '1px solid rgba(134,203,222,0.3)',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: '#519db1',
          boxShadow: '0 4px 20px rgba(81, 157, 177, 0.08)'
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
          {/* Icon */}
          <Avatar
            sx={{
              bgcolor: reminder.isActive ? '#dbeafe' : '#f1f5f9',
              width: 48,
              height: 48,
              color: reminder.isActive ? '#1447e6' : '#64748b',
            }}
          >
            <Calendar size={24} />
          </Avatar>

          {/* Content */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h6" color={reminder.isActive ? "#004aad" : "text.secondary"} sx={{ fontWeight: 600 }}>
                {reminder.title}
              </Typography>
              <Chip
                label={reminder.isActive ? "Đang bật" : "Đã tắt"}
                size="small"
                sx={{
                  bgcolor: reminder.isActive ? '#dcfce7' : '#fee2e2',
                  color: reminder.isActive ? '#15803d' : '#b91c1c',
                  fontSize: '11px',
                  height: 20,
                  fontWeight: 600
                }}
              />
            </Box>

            <Typography variant="body2" color="#4a5565" sx={{ mb: 1.5 }}>
              {reminder.message || "Không có nội dung ghi chú"}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Clock size={14} color="#519db1" />
                <Typography variant="body2" color="#4a5565" sx={{ fontWeight: 600 }}>
                  {String(reminder.hour).padStart(2, '0')}:{String(reminder.minute).padStart(2, '0')}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Calendar size={14} color="#519db1" />
                <Typography variant="body2" color="#4a5565">
                  {getFrequencyLabel(reminder.repeatDays)}
                </Typography>
              </Box>

              {reminder.email && (
                <Typography variant="caption" color="text.secondary">
                  Gửi đến: {reminder.email}
                </Typography>
              )}
            </Box>
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Tooltip title="Chỉnh sửa">
              <IconButton size="small" onClick={() => onEdit(reminder)} sx={{ color: '#64748b' }}>
                <Edit2 size={18} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa">
              <IconButton size="small" onClick={() => onDelete(reminder.id)} sx={{ color: '#ef4444' }}>
                <Trash2 size={18} />
              </IconButton>
            </Tooltip>
            <Box sx={{ width: '1px', height: '24px', bgcolor: '#e2e8f0', mx: 1 }} />
            <Switch
              checked={reminder.isActive}
              onChange={() => onToggle(reminder.id)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#fff',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#519db1',
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Reminder
