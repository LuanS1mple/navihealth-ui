import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FileText, FileSearch, ArrowRightCircle, PlusCircle, Camera } from "lucide-react";
import { DOMAIN_API, DOWNLOAD_RECORD } from "../../../../constants/apis";

/* =========================
   UTILS
========================= */
function formatLabel(key) {
  if (!key) return "";
  // Thay thế gạch dưới bằng khoảng cách, giữ nguyên hoa thường từ BE theo yêu cầu
  return key.replace(/_/g, " ");
}

/* =========================
   SMALL FIELD CARD
========================= */
function FieldCard({ label, children }) {
  return (
    <Box
      mb={1.5}
      p={1.5}
      borderRadius={2}
      bgcolor="#f8fafc"
      border="1px solid #e5e7eb"
    >
      <Typography
        fontWeight={600}
        fontSize={13}
        color="text.secondary"
        mb={0.5}
        sx={{ textTransform: 'none' }}
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

/* =========================
   MEDICAL DATA TABLE
========================= */
function MedicalTable({ data }) {
  if (!data || typeof data !== 'object') {
    return <Typography>{String(data)}</Typography>;
  }

  return (
    <Box sx={{ border: "1px solid #e2e8f0", borderRadius: "12px", overflow: "hidden", mt: 1 }}>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ bgcolor: "#f1f5f9" }}>
            <TableCell sx={{ fontWeight: 700, width: "35%", color: "#475569" }}>Chỉ số / Thông số</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#475569" }}>Giá trị kết quả & Tham chiếu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(data).map(([key, val], idx) => (
            <TableRow key={idx} sx={{ "&:last-child td, &:last-child th": { border: 0 }, "&:hover": { bgcolor: "#f8fafc" } }}>
              <TableCell sx={{ fontWeight: 600, color: "#0f172a", py: 1.5 }}>
                {formatLabel(key)}
              </TableCell>
              <TableCell sx={{ py: 1.5 }}>
                {typeof val === 'object' && val !== null ? (
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                    {Object.entries(val).map(([subK, subV]) => (
                      <Box key={subK} sx={{ display: 'flex', gap: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: "#64748b", minWidth: 100 }}>
                          {formatLabel(subK)}:
                        </Typography>
                        <Typography variant="body2" sx={{ color: subK.toLowerCase().includes('tham chiếu') ? "#2563eb" : "#0f172a", fontWeight: subK.toLowerCase().includes('tham chiếu') ? 400 : 700 }}>
                          {String(subV)}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#0f172a" }}>
                    {String(val)}
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

/* =========================
   RENDER VALUE (CORE)
========================= */
function RenderValue({ value, fieldKey }) {
  if (value === null || value === undefined) {
    return (
      <Typography color="text.secondary" fontStyle="italic">
        Không có dữ liệu
      </Typography>
    );
  }

  if (typeof value === "boolean") {
    return (
      <Chip
        size="small"
        label={value ? "Có" : "Không"}
        color={value ? "success" : "default"}
      />
    );
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return (
        <Typography color="text.secondary" fontStyle="italic">
          Danh sách rỗng
        </Typography>
      );
    }

    if (fieldKey === 'records') {
      // Records handled specially in Main component
      return null;
    }

    if (typeof value[0] === "object" && value[0] !== null) {
      const columns = Array.from(
        new Set(value.flatMap((item) => Object.keys(item || {})))
      );

      return (
        <Table
          size="small"
          sx={{
            mt: 1,
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            overflow: "hidden"
          }}
        >
          <TableHead>
            <TableRow sx={{ bgcolor: "#f1f5f9" }}>
              {columns.map((col) => (
                <TableCell key={col}>
                  <Typography fontWeight={600} fontSize={13}>
                    {formatLabel(col)}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {value.map((row, i) => (
              <TableRow key={i} hover>
                {columns.map((col) => (
                  <TableCell key={col} valign="top">
                    <RenderValue value={row?.[col]} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table >
      );
    }

    return (
      <Box display="flex" gap={1} flexWrap="wrap">
        {value.map((item, i) => (
          <Chip key={i} label={String(item)} size="small" />
        ))}
      </Box>
    );
  }

  if (typeof value === "object") {
    return (
      <Box pl={1} mt={1}>
        {Object.entries(value).map(([k, v]) => (
          <FieldCard key={k} label={formatLabel(k)}>
            <RenderValue value={v} fieldKey={k} />
          </FieldCard>
        ))}
      </Box>
    );
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if ((trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === "object" && parsed !== null) {
          return <RenderValue value={parsed} />;
        }
      } catch (e) { }
    }
  }

  return (
    <Typography sx={{ whiteSpace: "pre-wrap" }}>
      {String(value)}
    </Typography>
  );
}

/* =========================
   SECTION
========================= */
function DynamicSection({ title, data }) {
  if (data === undefined || data === null || title === 'records') return null;

  return (
    <Box mb={5}>
      <Typography
        fontWeight={700}
        fontSize={15}
        mb={1}
        sx={{ textTransform: "uppercase" }}
      >
        {formatLabel(title)}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <RenderValue value={data} fieldKey={title} />
    </Box>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
function ConfirmRecord({
  data,
  message,
  onAddRecords,
  onAddCamera
}) {
  let parsedData = data;

  if (data && data.data && !data.hospital_name && !data.records) {
    parsedData = data.data;
  }

  if (typeof parsedData === "string") {
    try {
      parsedData = JSON.parse(parsedData);
    } catch {
      parsedData = { raw_data: parsedData };
    }
  }

  if (!parsedData || typeof parsedData !== "object") {
    return (
      <Typography textAlign="center" mt={4} color="text.secondary">
        Không có dữ liệu hồ sơ
      </Typography>
    );
  }

  const visitId = parsedData.id || parsedData._id;

  return (
    <Card sx={{ borderRadius: 0, border: "none", boxShadow: "none", height: "100%" }}>
      <CardContent sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Box sx={{ flex: 1 }} />
          <Typography
            textAlign="center"
            fontWeight={800}
            fontSize={22}
            letterSpacing={1}
            fontFamily="'Be Vietnam Pro', sans-serif"
            sx={{ flex: 2 }}
          >
            {message.toUpperCase()}
          </Typography>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
            {onAddRecords && (
              <Button
                variant="outlined"
                size="small"
                startIcon={<PlusCircle size={16} />}
                onClick={() => onAddRecords(visitId)}
                sx={{ borderRadius: '8px', textTransform: 'none' }}
              >
                Thêm ảnh
              </Button>
            )}
            {onAddCamera && (
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                startIcon={<Camera size={16} />}
                onClick={() => onAddCamera(visitId)}
                sx={{ borderRadius: '8px', textTransform: 'none' }}
              >
                Chụp mới
              </Button>
            )}
          </Box>
        </Box>
        <Divider sx={{ mb: 4 }} />

        {/* RECORDS SECTION (Handled specifically) */}
        {parsedData.records && Array.isArray(parsedData.records) && (
          <Box mb={5}>
            <Typography fontWeight={700} fontSize={15} mb={1} sx={{ textTransform: "uppercase" }}>
              DANH SÁCH HỒ SƠ CON
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={2} sx={{ mt: 2 }}>
              {parsedData.records.map((rec, i) => {
                return (
                  <Accordion
                    key={i}
                    sx={{
                      borderRadius: '12px !important',
                      border: '1px solid #e2e8f0',
                      '&:before': { display: 'none' },
                      overflow: 'hidden'
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        bgcolor: '#f8fafc',
                        '&:hover': { bgcolor: '#f1f5f9' }
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                        <Box sx={{ p: 1, bgcolor: '#ebf5ff', borderRadius: '8px', display: 'flex' }}>
                          <FileText size={20} color="#006adc" />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 700, color: '#0f172a' }}>
                            {rec.record_type || `Hồ sơ ${i + 1}`}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {rec.ai_record_summary || "Bản xem trước dữ liệu hồ sơ"}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ p: 3, borderTop: '1px solid #e2e8f0' }}>
                      {rec.record_details && Object.keys(rec.record_details).length > 0 && (
                        <>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <ArrowRightCircle size={16} color="#519db1" />
                            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#519db1' }}>CHI TIẾT CHỈ SỐ Y TẾ</Typography>
                          </Box>
                          <MedicalTable data={rec.record_details} />
                        </>
                      )}
                      {rec.pdf_url && (
                        <Button
                          variant="text"
                          size="small"
                          startIcon={<FileSearch size={16} />}
                          sx={{ mt: 2, textTransform: 'none' }}
                          onClick={() => {
                            const fileName = rec.pdf_url.split('/').pop();
                            const fullUrl = rec.pdf_url.startsWith('http') ? rec.pdf_url : `${DOMAIN_API}${DOWNLOAD_RECORD}${fileName}`;
                            window.open(fullUrl, '_blank');
                          }}
                        >
                          Xem file PDF gốc
                        </Button>
                      )}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          </Box>
        )}

        {/* OTHER DYNAMIC CONTENT */}
        {Object.entries(parsedData).map(([key, value]) => (
          <DynamicSection
            key={key}
            title={key}
            data={value}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default ConfirmRecord;
