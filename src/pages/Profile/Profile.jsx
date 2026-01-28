import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  FormControlLabel,
  Switch,
  CircularProgress,
  Alert,
  Snackbar,
  Divider,
  Stack,
  Card,
  CardContent
} from '@mui/material';
import {
  Save as SaveIcon,
  Person as PersonIcon,
  Favorite as FavoriteIcon,
  LocalHospital as LocalHospitalIcon,
  Warning as WarningIcon,
  ContactEmergency as ContactEmergencyIcon
} from '@mui/icons-material';
import requestApi from '../../apis/apis';
import { GET_PROFILE, UPDATE_PROFILE } from '../../constants/apis';

function Profile() {
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [profileData, setProfileData] = useState({
    id: '',
    accountId: '',
    fullName: '',
    gender: '',
    dob: null,
    biometrics: {
      height: 0,
      weight: 0,
      bloodType: ''
    },
    healthProfile: {
      allergies: [],
      chronicDiseases: [],
      smoking: false
    },
    emergencyContact: {
      name: '',
      phone: '',
      relation: ''
    }
  });

  const [allergyInput, setAllergyInput] = useState('');
  const [diseaseInput, setDiseaseInput] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await requestApi(GET_PROFILE, 'GET');
      if (response && response.data) {
        // Ensure emergencyContact is an object
        const data = {
          ...response.data,
          emergencyContact: response.data.emergencyContact || {
            name: '',
            phone: '',
            relation: ''
          }
        };
        setProfileData(data);
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError(err.message || 'Không thể tải thông tin hồ sơ. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBiometricsChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      biometrics: {
        ...prev.biometrics,
        [field]: value
      }
    }));
  };

  const handleHealthProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      healthProfile: {
        ...prev.healthProfile,
        [field]: value
      }
    }));
  };

  const handleEmergencyContactChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [field]: value
      }
    }));
  };

  const handleAddAllergy = () => {
    if (allergyInput.trim()) {
      setProfileData(prev => ({
        ...prev,
        healthProfile: {
          ...prev.healthProfile,
          allergies: [...prev.healthProfile.allergies, allergyInput.trim()]
        }
      }));
      setAllergyInput('');
    }
  };

  const handleDeleteAllergy = (allergyToDelete) => {
    setProfileData(prev => ({
      ...prev,
      healthProfile: {
        ...prev.healthProfile,
        allergies: prev.healthProfile.allergies.filter(allergy => allergy !== allergyToDelete)
      }
    }));
  };

  const handleAddDisease = () => {
    if (diseaseInput.trim()) {
      setProfileData(prev => ({
        ...prev,
        healthProfile: {
          ...prev.healthProfile,
          chronicDiseases: [...prev.healthProfile.chronicDiseases, diseaseInput.trim()]
        }
      }));
      setDiseaseInput('');
    }
  };

  const handleDeleteDisease = (diseaseToDelete) => {
    setProfileData(prev => ({
      ...prev,
      healthProfile: {
        ...prev.healthProfile,
        chronicDiseases: prev.healthProfile.chronicDiseases.filter(disease => disease !== diseaseToDelete)
      }
    }));
  };

  const handleUpdate = async () => {
    try {
      setUpdating(true);
      setError(null);

      // Prepare the body according to the API specification
      const updateBody = {
        id: profileData.id,
        accountId: profileData.accountId,
        fullName: profileData.fullName,
        gender: profileData.gender,
        dob: profileData.dob ? new Date(profileData.dob).toISOString() : null,
        biometrics: {
          height: Number(profileData.biometrics.height) || 0,
          weight: Number(profileData.biometrics.weight) || 0,
          bloodType: profileData.biometrics.bloodType || ''
        },
        healthProfile: {
          allergies: profileData.healthProfile.allergies || [],
          chronicDiseases: profileData.healthProfile.chronicDiseases || [],
          smoking: Boolean(profileData.healthProfile.smoking)
        },
        emergencyContact: {
          name: profileData.emergencyContact?.name || '',
          phone: profileData.emergencyContact?.phone || '',
          relation: profileData.emergencyContact?.relation || ''
        }
      };

      console.log('Sending update request with body:', updateBody);

      const response = await requestApi(UPDATE_PROFILE, 'PUT', updateBody);

      if (response) {
        setSuccess(true);
        // Refresh profile data after successful update
        await fetchProfile();
      }
    } catch (err) {
      console.error('Error updating profile:', err);
      // Extract error message from response
      const errorMessage = err.message || err.response?.data?.message || 'Không thể cập nhật hồ sơ. Vui lòng thử lại.';
      setError(errorMessage);
    } finally {
      setUpdating(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError(null);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress size={60} sx={{ color: '#1e73be' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f5f7fa', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              color: '#1e73be',
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Hồ Sơ Cá Nhân
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Quản lý thông tin sức khỏe của bạn
          </Typography>
        </Box>

        <Stack spacing={3}>
          {/* Basic Information Card */}
          <Card elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{
              bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              background: 'linear-gradient(135deg, #1e73be 0%, #2196f3 100%)',
              p: 2.5
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PersonIcon sx={{ fontSize: 28, color: 'white' }} />
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                  Thông Tin Cơ Bản
                </Typography>
              </Box>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Họ và Tên"
                  value={profileData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': { borderColor: '#1e73be' },
                      '&.Mui-focused fieldset': { borderColor: '#1e73be' }
                    }
                  }}
                />

                <FormControl fullWidth>
                  <InputLabel>Giới Tính</InputLabel>
                  <Select
                    value={profileData.gender}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    label="Giới Tính"
                  >
                    <MenuItem value="">Chọn giới tính</MenuItem>
                    <MenuItem value="male">Nam</MenuItem>
                    <MenuItem value="female">Nữ</MenuItem>
                    <MenuItem value="other">Khác</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  fullWidth
                  label="Ngày Sinh"
                  type="date"
                  value={profileData.dob ? new Date(profileData.dob).toISOString().split('T')[0] : ''}
                  onChange={(e) => handleInputChange('dob', e.target.value)}
                  InputLabelProps={{ shrink: true }}
                  variant="outlined"
                />
              </Stack>
            </CardContent>
          </Card>

          {/* Emergency Contact Card */}
          <Card elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{
              background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
              p: 2.5
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <ContactEmergencyIcon sx={{ fontSize: 28, color: 'white' }} />
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                  Liên Hệ Khẩn Cấp
                </Typography>
              </Box>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Tên Người Liên Hệ"
                  value={profileData.emergencyContact?.name || ''}
                  onChange={(e) => handleEmergencyContactChange('name', e.target.value)}
                  variant="outlined"
                  placeholder="Ví dụ: Nguyễn Văn A"
                />

                <TextField
                  fullWidth
                  label="Số Điện Thoại"
                  value={profileData.emergencyContact?.phone || ''}
                  onChange={(e) => handleEmergencyContactChange('phone', e.target.value)}
                  variant="outlined"
                  placeholder="Ví dụ: 0123456789"
                />

                <TextField
                  fullWidth
                  label="Mối Quan Hệ"
                  value={profileData.emergencyContact?.relation || ''}
                  onChange={(e) => handleEmergencyContactChange('relation', e.target.value)}
                  variant="outlined"
                  placeholder="Ví dụ: Bố/Mẹ/Anh/Chị/Vợ/Chồng"
                />
              </Stack>
            </CardContent>
          </Card>

          {/* Biometrics Card */}
          <Card elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
              p: 2.5
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <FavoriteIcon sx={{ fontSize: 28, color: 'white' }} />
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                  Chỉ Số Sinh Học
                </Typography>
              </Box>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2.5}>
                <TextField
                  fullWidth
                  label="Chiều Cao (cm)"
                  type="number"
                  value={profileData.biometrics.height}
                  onChange={(e) => handleBiometricsChange('height', parseFloat(e.target.value) || 0)}
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0, max: 300 } }}
                />

                <TextField
                  fullWidth
                  label="Cân Nặng (kg)"
                  type="number"
                  value={profileData.biometrics.weight}
                  onChange={(e) => handleBiometricsChange('weight', parseFloat(e.target.value) || 0)}
                  variant="outlined"
                  InputProps={{ inputProps: { min: 0, max: 500 } }}
                />

                <FormControl fullWidth>
                  <InputLabel>Nhóm Máu</InputLabel>
                  <Select
                    value={profileData.biometrics.bloodType}
                    onChange={(e) => handleBiometricsChange('bloodType', e.target.value)}
                    label="Nhóm Máu"
                  >
                    <MenuItem value="">Chọn nhóm máu</MenuItem>
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="AB">AB</MenuItem>
                    <MenuItem value="O">O</MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                  </Select>
                </FormControl>

                {/* BMI Display */}
                {profileData.biometrics.height > 0 && profileData.biometrics.weight > 0 && (
                  <Box sx={{
                    p: 2,
                    bgcolor: '#f0f4ff',
                    borderRadius: 2,
                    border: '1px solid #d0e0ff'
                  }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Chỉ số BMI
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#1e73be', fontWeight: 600 }}>
                      {(profileData.biometrics.weight / Math.pow(profileData.biometrics.height / 100, 2)).toFixed(1)}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </CardContent>
          </Card>

          {/* Health Profile Card */}
          <Card elevation={2} sx={{ borderRadius: 3, overflow: 'hidden' }}>
            <Box sx={{
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              p: 2.5
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocalHospitalIcon sx={{ fontSize: 28, color: 'white' }} />
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600 }}>
                  Hồ Sơ Sức Khỏe
                </Typography>
              </Box>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={3}>
                {/* Allergies */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <WarningIcon sx={{ color: '#ff9800', fontSize: 20 }} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      Dị Ứng
                    </Typography>
                  </Box>
                  <Stack spacing={1.5}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Nhập dị ứng (ví dụ: phấn hoa, hải sản...)"
                        value={allergyInput}
                        onChange={(e) => setAllergyInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddAllergy();
                          }
                        }}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddAllergy}
                        sx={{
                          bgcolor: '#ff9800',
                          '&:hover': { bgcolor: '#f57c00' },
                          minWidth: '100px'
                        }}
                      >
                        Thêm
                      </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: '40px' }}>
                      {profileData.healthProfile.allergies.length > 0 ? (
                        profileData.healthProfile.allergies.map((allergy, index) => (
                          <Chip
                            key={index}
                            label={allergy}
                            onDelete={() => handleDeleteAllergy(allergy)}
                            sx={{
                              bgcolor: '#fff3e0',
                              color: '#e65100',
                              borderColor: '#ffb74d',
                              '& .MuiChip-deleteIcon': {
                                color: '#e65100',
                                '&:hover': { color: '#bf360c' }
                              }
                            }}
                            variant="outlined"
                          />
                        ))
                      ) : (
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                          Chưa có dị ứng nào được thêm
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                </Box>

                <Divider />

                {/* Chronic Diseases */}
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <LocalHospitalIcon sx={{ color: '#f44336', fontSize: 20 }} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      Bệnh Mãn Tính
                    </Typography>
                  </Box>
                  <Stack spacing={1.5}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <TextField
                        fullWidth
                        size="small"
                        placeholder="Nhập bệnh mãn tính (ví dụ: tiểu đường, huyết áp...)"
                        value={diseaseInput}
                        onChange={(e) => setDiseaseInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleAddDisease();
                          }
                        }}
                      />
                      <Button
                        variant="contained"
                        onClick={handleAddDisease}
                        sx={{
                          bgcolor: '#f44336',
                          '&:hover': { bgcolor: '#d32f2f' },
                          minWidth: '100px'
                        }}
                      >
                        Thêm
                      </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, minHeight: '40px' }}>
                      {profileData.healthProfile.chronicDiseases.length > 0 ? (
                        profileData.healthProfile.chronicDiseases.map((disease, index) => (
                          <Chip
                            key={index}
                            label={disease}
                            onDelete={() => handleDeleteDisease(disease)}
                            sx={{
                              bgcolor: '#ffebee',
                              color: '#c62828',
                              borderColor: '#ef5350',
                              '& .MuiChip-deleteIcon': {
                                color: '#c62828',
                                '&:hover': { color: '#b71c1c' }
                              }
                            }}
                            variant="outlined"
                          />
                        ))
                      ) : (
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                          Chưa có bệnh mãn tính nào được thêm
                        </Typography>
                      )}
                    </Box>
                  </Stack>
                </Box>

                <Divider />

                {/* Smoking */}
                <Box sx={{
                  p: 2,
                  bgcolor: profileData.healthProfile.smoking ? '#ffebee' : '#e8f5e9',
                  borderRadius: 2,
                  border: `1px solid ${profileData.healthProfile.smoking ? '#ffcdd2' : '#c8e6c9'}`
                }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={profileData.healthProfile.smoking}
                        onChange={(e) => handleHealthProfileChange('smoking', e.target.checked)}
                        sx={{
                          '& .MuiSwitch-switchBase.Mui-checked': {
                            color: '#f44336',
                          },
                          '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                            backgroundColor: '#f44336',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body1" fontWeight={500}>
                        Hút thuốc
                      </Typography>
                    }
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Update Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2, pb: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={updating ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
              onClick={handleUpdate}
              disabled={updating}
              sx={{
                bgcolor: '#1e73be',
                '&:hover': {
                  bgcolor: '#155a8a',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(30, 115, 190, 0.4)'
                },
                px: 6,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 3,
                textTransform: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 12px rgba(30, 115, 190, 0.3)'
              }}
            >
              {updating ? 'Đang cập nhật...' : 'Cập Nhật Hồ Sơ'}
            </Button>
          </Box>
        </Stack>
      </Container>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={success || !!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={success ? 'success' : 'error'}
          sx={{
            width: '100%',
            bgcolor: success ? '#4caf50' : '#f44336',
            color: 'white',
            '& .MuiAlert-icon': {
              color: 'white'
            }
          }}
          variant="filled"
        >
          {success ? 'Cập nhật hồ sơ thành công!' : error}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Profile;