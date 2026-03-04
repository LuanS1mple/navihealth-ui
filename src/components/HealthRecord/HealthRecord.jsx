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
} from 'lucide-react';

import requestApi from '../../apis/apis';
import { DOWNLOAD_RECORD } from '../../constants/apis';

/* =========================
   HELPERS
========================= */
const mapRecordType = (type) => {
  switch (type) {
    case 'Imaging':
      return 'Hình ảnh y khoa';
    case 'Lab':
      return 'Kết quả xét nghiệm';
    case 'Prescription':
      return 'Đơn thuốc';
    default:
      return 'Khác';
  }
};

const formatDate = (iso) => {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('vi-VN');
};

/* =========================
   COMPONENT
========================= */
function HealthRecord({ record, onView, onEdit, onDelete, onShare, selectable, selected, onSelect }) {

  const recordTypeText = mapRecordType(record.record_type);

  const getBadgeColor = (type) => {
    switch (type) {
      case '"Imaging"':
        return { bg: '#dbeafe', color: '#1447e6', border: '#bedbff' };
      case 'Đơn thuốc':
        return { bg: '#dcfce7', color: '#008236', border: '#b9f8cf' };
      case 'Hình ảnh y khoa':
        return { bg: '#fef3c7', color: '#b45309', border: '#fde68a' };
      default:
        return { bg: '#f3f4f6', color: '#374151', border: '#e5e7eb' };
    }
  };

  const badgeStyle = getBadgeColor(recordTypeText);

  const handleDownload = async () => {
    try {
      const response = await requestApi(`${DOWNLOAD_RECORD}${record.id || record._id}.pdf`, 'GET', null, 'blob');
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `HealthRecord_${record.id || record._id}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
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
                    fontWeight: 700,
                    color: '#004aad',
                  }}
                >
                  {recordTypeText}
                </Typography>

                <Chip
                  label={recordTypeText}
                  size="small"
                  sx={{
                    height: '24px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: badgeStyle.bg,
                    color: badgeStyle.color,
                    border: `1px solid ${badgeStyle.border}`,
                    borderRadius: '6px',
                  }}
                />
              </Box>

              {/* DATE */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
                <Calendar size={14} color="#64748b" />
                <Typography sx={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
                  {formatDate(record.created_at)}
                </Typography>
              </Box>

              {/* SUMMARY */}
              <Typography sx={{ fontSize: '14px', color: '#4a5565', mb: 1, lineHeight: 1.5 }}>
                {record.ai_summary}
              </Typography>

              {/* PDF LINK */}
              {record.pdf_url && (
                <Typography
                  component="span"
                  sx={{
                    fontSize: '13px',
                    color: '#2563eb',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    '&:hover': { textDecoration: 'underline' }
                  }}
                  onClick={() => window.open(record.pdf_url, '_blank')}
                >
                </Typography>
              )}
            </Box>
          </Box>

          {/* ACTION BUTTONS */}
          {!selectable && (
            <Box sx={{
              display: 'flex',
              gap: 1,
              alignItems: { xs: 'flex-start', sm: 'flex-start' },
              justifyContent: { xs: 'flex-end', sm: 'flex-start' },
              borderTop: { xs: '1px solid #f1f5f9', sm: 'none' },
              pt: { xs: 2, sm: 0 },
              mt: { xs: 1, sm: 0 }
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
                sx={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  bgcolor: '#f0fdf4', border: '1px solid #dcfce7',
                  '&:hover': { bgcolor: '#dcfce7', borderColor: '#bbf7d0' }
                }}
                onClick={(e) => { e.stopPropagation(); handleDownload(); }}
              >
                <Download size={18} color="#16a34a" />
              </IconButton>

              <IconButton
                size="small"
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
