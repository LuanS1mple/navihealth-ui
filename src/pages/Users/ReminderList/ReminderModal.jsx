import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DAYS_OF_WEEK = [
  { label: 'CN', value: 0 },
  { label: 'T2', value: 1 },
  { label: 'T3', value: 2 },
  { label: 'T4', value: 3 },
  { label: 'T5', value: 4 },
  { label: 'T6', value: 5 },
  { label: 'T7', value: 6 },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', sm: 500 },
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
  p: { xs: 3, sm: 4 },
  outline: 'none'
};

function ReminderModal({ open, onClose, onSave, initialData }) {
  const [formData, setFormData] = useState({
    title: '',
    message: '',
    email: '',
    hour: 8,
    minute: 0,
    repeatDays: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        repeatDays: initialData.repeatDays || [],
      });
    } else {
      setFormData({
        title: '',
        message: '',
        email: '',
        hour: 8,
        minute: 0,
        repeatDays: [],
      });
    }
    setErrors({});
  }, [initialData, open]);

  const validate = (data) => {
    const newErrors = {};

    if (!data.title?.trim()) {
      newErrors.title = 'Tiêu đề không được để trống';
    } else if (data.title.length > 100) {
      newErrors.title = 'Tiêu đề không được quá 100 ký tự';
    }

    if (data.message && data.message.length > 500) {
      newErrors.message = 'Nội dung không được quá 500 ký tự';
    }

    if (data.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        newErrors.email = 'Email không hợp lệ';
      }
    }

    if (data.hour < 0 || data.hour > 23 || isNaN(data.hour)) {
      newErrors.hour = 'Giờ từ 0-23';
    }

    if (data.minute < 0 || data.minute > 59 || isNaN(data.minute)) {
      newErrors.minute = 'Phút từ 0-59';
    }

    if (!data.repeatDays || data.repeatDays.length === 0) {
      newErrors.repeatDays = 'Vui lòng chọn ít nhất một ngày lặp lại';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: name === 'hour' || name === 'minute' ? parseInt(value) || 0 : value };
    setFormData(newFormData);

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleDayToggle = (dayValue) => {
    const currentDays = [...formData.repeatDays];
    const index = currentDays.indexOf(dayValue);
    if (index === -1) {
      currentDays.push(dayValue);
    } else {
      currentDays.splice(index, 1);
    }
    const newDays = currentDays.sort((a, b) => a - b);
    setFormData({ ...formData, repeatDays: newDays });

    if (errors.repeatDays && newDays.length > 0) {
      setErrors({ ...errors, repeatDays: '' });
    }
  };

  const handleSubmit = () => {
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSave(formData);
  };

  return (
    <Modal open={open} onClose={onClose} closeAfterTransition>
      <Box sx={style}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#004aad' }}>
            {initialData ? 'Cập nhật nhắc nhở' : 'Thêm nhắc nhở mới'}
          </Typography>
          <IconButton onClick={onClose} size="small" sx={{ color: '#64748b' }}>
            <CloseIcon titleAccess="Đóng" />
          </IconButton>
        </Box>

        <Stack spacing={2.5}>
          <TextField
            fullWidth
            label="Tiêu đề"
            name="title"
            value={formData.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
            placeholder="Ví dụ: Uống thuốc huyết áp"
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />
          <TextField
            fullWidth
            label="Nội dung"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={!!errors.message}
            helperText={errors.message}
            multiline
            rows={3}
            placeholder="Ghi chú thêm (liều lượng, cách dùng...)"
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />
          <TextField
            fullWidth
            label="Email nhận thông báo"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            placeholder="Để trống để sử dụng email tài khoản"
            variant="outlined"
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
          />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Giờ"
                name="hour"
                type="number"
                value={formData.hour}
                onChange={handleChange}
                error={!!errors.hour}
                helperText={errors.hour}
                inputProps={{ min: 0, max: 23 }}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Phút"
                name="minute"
                type="number"
                value={formData.minute}
                onChange={handleChange}
                error={!!errors.minute}
                helperText={errors.minute}
                inputProps={{ min: 0, max: 59 }}
                variant="outlined"
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px' } }}
              />
            </Grid>
          </Grid>

          <FormControl component="fieldset" error={!!errors.repeatDays}>
            <FormLabel component="legend" sx={{ mb: 1.5, fontSize: '0.9rem', fontWeight: 600, color: !!errors.repeatDays ? '#d32f2f' : '#4a5565' }}>Lặp lại vào</FormLabel>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {DAYS_OF_WEEK.map((day) => {
                const isSelected = formData.repeatDays.includes(day.value);
                return (
                  <Button
                    key={day.value}
                    variant={isSelected ? "contained" : "outlined"}
                    onClick={() => handleDayToggle(day.value)}
                    sx={{
                      minWidth: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      p: 0,
                      fontWeight: 600,
                      textTransform: 'none',
                      borderColor: isSelected ? '#519db1' : (!!errors.repeatDays ? '#d32f2f' : 'rgba(0, 0, 0, 0.12)'),
                      bgcolor: isSelected ? '#519db1' : 'transparent',
                      color: isSelected ? 'white' : (!!errors.repeatDays ? '#d32f2f' : '#64748b'),
                      '&:hover': {
                        bgcolor: isSelected ? '#3e8a9e' : 'rgba(81, 157, 177, 0.04)',
                        borderColor: '#519db1',
                      }
                    }}
                  >
                    {day.label}
                  </Button>
                );
              })}
            </Box>
            {errors.repeatDays && (
              <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                {errors.repeatDays}
              </Typography>
            )}
          </FormControl>

          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={onClose}
              sx={{ borderRadius: '12px', py: 1.2, fontWeight: 600, textTransform: 'none' }}
            >
              Hủy
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{
                borderRadius: '12px',
                py: 1.2,
                fontWeight: 600,
                textTransform: 'none',
                bgcolor: '#004aad',
                '&:hover': { bgcolor: '#003a8c' },
                boxShadow: '0 4px 12px rgba(0, 74, 173, 0.2)'
              }}
            >
              {initialData ? 'Cập nhật' : 'Lưu nhắc nhở'}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ReminderModal;
