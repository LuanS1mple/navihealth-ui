import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import {
  FileText,
  Calendar,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react';

function HealthRecord({ record, onView, onEdit, onDelete }) {
  const getBadgeColor = (type) => {
    switch (type) {
      case 'Kết quả xét nghiệm':
        return { bg: '#dbeafe', color: '#1447e6', border: '#bedbff' };
      case 'Đơn thuốc':
        return { bg: '#dcfce7', color: '#008236', border: '#b9f8cf' };
      case 'Hình ảnh y khoa':
        return { bg: '#fef3c7', color: '#b45309', border: '#fde68a' };
      default:
        return { bg: '#f3f4f6', color: '#374151', border: '#e5e7eb' };
    }
  };

  const badgeStyle = getBadgeColor(record.type);
  const iconBgColor = 'rgba(135, 199, 236, 0.2)';
  return (
    <>
      <Card sx={{ borderRadius: '16px', border: '1px solid rgba(134, 203, 222, 0.3)', mb: 2, width: '90%' }}>
        <CardContent sx={{ p: '25px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
              <Box
                sx={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: iconBgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FileText size={24} color="#519DB1" />
              </Box>

              <Box sx={{ flex: 1 }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 1, alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: '#004aad' }}>
                    {record.title}
                  </Typography>
                  <Chip
                    label={record.type}
                    size="small"
                    sx={{
                      height: '22px',
                      fontSize: '12px',
                      backgroundColor: badgeStyle.bg,
                      color: badgeStyle.color,
                      border: `1px solid ${badgeStyle.border}`,
                      borderRadius: '8px',
                    }}
                  />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mb: '4px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Calendar size={12} color="#4A5565" />
                    <Typography sx={{ fontSize: '14px', color: '#4a5565' }}>
                      {record.date}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: '14px', color: '#4a5565' }}>
                    BS: {record.doctor}
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: '14px', color: '#6a7282', mb: '4px' }}>
                  {record.facility}
                </Typography>

                <Typography sx={{ fontSize: '14px', color: '#6a7282', mb: '4px' }}>
                  {record.description}
                </Typography>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  {record.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{
                        height: '22px',
                        fontSize: '12px',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                size="small"
                sx={{ width: '36px', height: '32px', borderRadius: '8px' }}
                onClick={() => onView(record.id)}
              >
                <Eye size={16} />
              </IconButton>
              <IconButton
                size="small"
                sx={{ width: '36px', height: '32px', borderRadius: '8px' }}
                onClick={() => onEdit(record.id)}
              >
                <Edit size={16} />
              </IconButton>
              <IconButton
                size="small"
                sx={{ width: '36px', height: '32px', borderRadius: '8px' }}
                onClick={() => onDelete(record.id)}
              >
                <Trash2 size={16} color="#E7000B" />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default HealthRecord