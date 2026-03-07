import React from 'react';
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
  Download,
  Share2,
  PlusCircle,
  Camera
} from 'lucide-react';

import requestApi from '../../apis/apis';
import { DOWNLOAD_RECORD } from '../../constants/apis';

/* =========================
   HELPERS
========================= */
const formatDate = (iso) => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('vi-VN');
};

/* =========================
   COMPONENT
========================= */
function HealthRecord({ record, onView, onEdit, onDelete, onShare, onAddRecords, onAddCamera, selectable, selected, onSelect }) {

  const badgeStyle = { bg: 'rgba(81, 157, 177, 0.1)', color: '#519db1', border: 'rgba(81, 157, 177, 0.2)' };

  const handleDownload = async () => {
    alert("Vui lòng vào chi tiết hồ sơ để tải từng bản PDF hoặc sử dụng tính năng Chia sẻ để tải bộ hồ sơ.");
  };

  return (
    <Card
      onClick={selectable ? () => onSelect(record.id || record._id) : undefined}
      sx={{
        borderRadius: '16px',
        border: selected ? '2px solid #519db1' : '1px solid rgba(134, 203, 222, 0.3)',
        mb: 2,
        width: '100%',
        boxShadow: selected ? '0 4px 18px rgba(81, 157, 177, 0.2)' : '0 2px 12px rgba(0,0,0,0.03)',
        transition: 'all 0.2s',
        cursor: selectable ? 'pointer' : 'default',
        position: 'relative',
        '&:hover': {
          boxShadow: '0 4px 18px rgba(0,0,0,0.08)',
          borderColor: selectable ? '#519db1' : '#519db1'
        }
      }}
    >
      {selectable && (
        <Box
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            width: 24,
            height: 24,
            borderRadius: '50%',
            border: '2px solid #519db1',
            backgroundColor: selected ? '#519db1' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            transition: 'all 0.2s'
          }}
        >
          {selected && (
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: 'white' }} />
          )}
        </Box>
      )}
      <CardContent sx={{ p: '25px' }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', gap: 2 }}>

          {/* LEFT CONTENT */}
          <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: '12px',
                backgroundColor: 'rgba(135, 199, 236, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={24} color="#519DB1" />
            </Box>

            <Box sx={{ flex: 1 }}>
              {/* TITLE + BADGE */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1, alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: '#004aad',
                  }}
                >
                  {record.record_name || "Bộ hồ sơ không tên"}
                </Typography>

                <Chip
                  label={`${record.record_count || 0} hồ sơ con`}
                  size="small"
                  sx={{
                    height: '24px',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: badgeStyle.bg,
                    color: badgeStyle.color,
                    border: `1px solid ${badgeStyle.border}`,
                    borderRadius: '6px',
                  }}
                />
              </Box>

              {/* HOSPITAL */}
              <Typography sx={{ fontWeight: 600, color: '#475569', fontSize: '14px', mb: 0.5 }}>
                Bệnh viện: {record.hospital_name || "Chưa xác định"}
              </Typography>

              {/* DATE */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                <Calendar size={14} color="#64748b" />
                <Typography sx={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
                  Ngày khám: {formatDate(record.visit_date)}
                </Typography>
              </Box>

              {/* SUMMARY */}
              <Typography sx={{ fontSize: '14px', color: '#1e293b', mb: 1, lineHeight: 1.5, fontWeight: 500 }}>
                Chẩn đoán: {record.general_diagnosis || "Đang phân tích..."}
              </Typography>
            </Box>
          </Box>

          {/* ACTION BUTTONS */}
          {!selectable && (
            <Box sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              alignItems: { xs: 'flex-start', sm: 'flex-start' },
              justifyContent: { xs: 'flex-end', sm: 'flex-start' },
              borderTop: { xs: '1px solid #f1f5f9', sm: 'none' },
              pt: { xs: 2, sm: 0 },
              mt: { xs: 1, sm: 0 },
              maxWidth: { xs: '100%', sm: '200px' }
            }}>
              <IconButton
                size="small"
                title="Chia sẻ hồ sơ"
                sx={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  bgcolor: '#f0f9ff', border: '1px solid #e0f2fe',
                  '&:hover': { bgcolor: '#e0f2fe', borderColor: '#bae6fd' }
                }}
                onClick={(e) => { e.stopPropagation(); onShare(record.id || record._id); }}
              >
                <Share2 size={18} color="#0369a1" />
              </IconButton>

              <IconButton
                size="small"
                title="Xem chi tiết"
                sx={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  bgcolor: '#f8fafc', border: '1px solid #e2e8f0',
                  '&:hover': { bgcolor: '#eff6ff', borderColor: '#bfdbfe', color: '#2563eb' }
                }}
                onClick={(e) => { e.stopPropagation(); onView(record.id || record._id); }}
              >
                <Eye size={18} />
              </IconButton>

              <IconButton
                size="small"
                title="Xóa bộ hồ sơ"
                sx={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  bgcolor: '#fef2f2', border: '1px solid #fee2e2',
                  '&:hover': { bgcolor: '#fee2e2', borderColor: '#fca5a5' }
                }}
                onClick={(e) => { e.stopPropagation(); onDelete(record.id || record._id); }}
              >
                <Trash2 size={18} color="#ef4444" />
              </IconButton>
            </Box>
          )}

        </Box>
      </CardContent>
    </Card>
  );
}

export default HealthRecord;
