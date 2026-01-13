import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip
} from "@mui/material";
function ConfirmRecord({ data, onConfirm, onEdit }) {
  const { record_type, record_details, ai_summary } = data;
  const { patient_info, test_results } = record_details;

  const isHigh = (note) => note === "(H)";
  return (
    <>
      <Card
        sx={{
          maxWidth: 900,
          mx: "auto",
          my: 4,
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "none"
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* HEADER */}
          <Box textAlign="center" mb={3}>
            <Typography fontWeight={700} fontSize={20}>
              PHIẾU KẾT QUẢ XÉT NGHIỆM
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              {patient_info.hospital} – {patient_info.section}
            </Typography>
          </Box>

          <Divider sx={{ mb: 3 }} />

          {/* PATIENT INFO */}
          <Grid container spacing={2} mb={3}>
            <Grid item xs={6}>
              <Typography><b>Họ tên:</b> {patient_info.full_name}</Typography>
              <Typography><b>Giới tính:</b> {patient_info.gender}</Typography>
              <Typography><b>Tuổi:</b> {patient_info.age}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography><b>Ngày xét nghiệm:</b> {patient_info.date_of_report}</Typography>
              <Typography><b>Số BHYT:</b> {patient_info.health_insurance_number}</Typography>
              <Typography><b>Địa chỉ:</b> {patient_info.address}</Typography>
            </Grid>
          </Grid>

          {/* TEST RESULTS */}
          <Typography fontWeight={600} mb={1}>
            KẾT QUẢ XÉT NGHIỆM
          </Typography>

          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: "#f3f4f6" }}>
                <TableCell><b>Chỉ số</b></TableCell>
                <TableCell><b>Kết quả</b></TableCell>
                <TableCell><b>Giá trị bình thường</b></TableCell>
                <TableCell align="center"><b>Đánh giá</b></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {test_results.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.test_name}</TableCell>
                  <TableCell
                    sx={{
                      fontWeight: isHigh(item.note) ? 700 : 400,
                      color: isHigh(item.note) ? "error.main" : "inherit"
                    }}
                  >
                    {item.result}
                  </TableCell>
                  <TableCell>{item.normal_range}</TableCell>
                  <TableCell align="center">
                    {isHigh(item.note) ? (
                      <Chip label="Cao" color="error" size="small" />
                    ) : (
                      <Chip label="Bình thường" color="success" size="small" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* AI SUMMARY */}
          <Box mt={3}>
            <Typography fontWeight={600} mb={1}>
              NHẬN XÉT TỰ ĐỘNG (AI)
            </Typography>
            <Box
              sx={{
                bgcolor: "#f8fafc",
                border: "1px dashed #cbd5e1",
                p: 2,
                borderRadius: 2,
                fontSize: 14
              }}
            >
              {ai_summary}
            </Box>
          </Box>

          {/* ACTIONS */}
          <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" onClick={onEdit}>
              Hủy
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#2563eb" }}
              onClick={onConfirm}
            >
              Xác nhận lưu hồ sơ
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default ConfirmRecord