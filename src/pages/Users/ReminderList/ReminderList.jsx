import React, { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Grid,
  CircularProgress,
  Stack
} from '@mui/material';
import {
  FileText,
  Calendar,
  Search,
} from 'lucide-react';
import StatCard from '../HealthRecordList/StatCard/StatCard';
import AddIcon from '@mui/icons-material/Add';
import Reminder from './Reminder/Reminder';
import ReminderModal from './ReminderModal';
import requestApi from '../../../apis/apis';
import { REMINDERS } from '../../../constants/apis';

function ReminderList() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    setLoading(true);
    try {
      const response = await requestApi(REMINDERS, 'GET');
      if (response.status === 200) {
        setReminders(response.data);
      }
    } catch (err) {
      console.error("Fetch reminders error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreate = () => {
    setEditData(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (reminder) => {
    setEditData(reminder);
    setModalOpen(true);
  };

  const handleSave = async (data) => {
    try {
      if (editData) {
        // Update
        await requestApi(`${REMINDERS}/${editData.id}`, 'PUT', data);
      } else {
        // Create
        await requestApi(REMINDERS, 'POST', data);
      }
      setModalOpen(false);
      fetchReminders();
    } catch (err) {
      console.error("Save reminder error:", err);
      alert("Không thể lưu nhắc nhở. Vui lòng thử lại.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa nhắc nhở này?")) return;
    try {
      await requestApi(`${REMINDERS}/${id}`, 'DELETE');
      fetchReminders();
    } catch (err) {
      console.error("Delete reminder error:", err);
      alert("Không thể xóa nhắc nhở.");
    }
  };

  const handleToggle = async (id) => {
    try {
      await requestApi(`${REMINDERS}/${id}/toggle`, 'PATCH');
      // Update local state for better UX
      setReminders(prev => prev.map(r =>
        r.id === id ? { ...r, isActive: !r.isActive } : r
      ));
    } catch (err) {
      console.error("Toggle reminder error:", err);
      alert("Không thể thay đổi trạng thái.");
    }
  };

  const filteredReminders = reminders.filter(r =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (r.message && r.message.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Box className="page-transition">
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" className="gradient-text">Quản lý nhắc nhở</Typography>
        <Typography variant="body2" color="text.secondary">Theo dõi lịch uống thuốc và tái khám của bạn</Typography>
      </Box>

      {/* Tổng quan */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <StatCard
              title="Tổng nhắc nhở"
              value={reminders.length}
              icon={FileText}
              bgColor="rgba(0, 74, 173, 0.05)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard
              title="Đang hoạt động"
              value={reminders.filter(r => r.isActive).length}
              icon={Calendar}
              bgColor="rgba(81, 157, 177, 0.05)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StatCard
              title="Lịch hôm nay"
              value={reminders.filter(r => r.isActive && r.repeatDays.includes(new Date().getDay())).length}
              icon={Calendar}
              bgColor="rgba(20, 71, 230, 0.05)"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Tìm kiếm & Thao tác */}
      <Card sx={{ borderRadius: '20px', mb: 3 }} className="glass-card">
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
            <TextField
              sx={{ flexGrow: 1, minWidth: '200px' }}
              placeholder="Tìm kiếm nhắc nhở..."
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search size={18} color="#519db1" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleOpenCreate}
              sx={{ px: 3, height: '40px', borderRadius: '10px' }}
            >
              Tạo nhắc nhở
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Danh sách nhắc nhở */}
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Stack spacing={2}>
          {filteredReminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              reminder={reminder}
              onToggle={handleToggle}
              onEdit={handleOpenEdit}
              onDelete={handleDelete}
            />
          ))}
          {filteredReminders.length === 0 && (
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography color="text.secondary">
                {searchTerm ? "Không tìm thấy nhắc nhở phù hợp" : "Bạn chưa có nhắc nhở nào. Hãy bắt đầu bằng cách nhấn 'Tạo nhắc nhở'"}
              </Typography>
            </Box>
          )}
        </Stack>
      )}

      {/* Modal */}
      <ReminderModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        initialData={editData}
      />
    </Box>
  )
}

export default ReminderList
