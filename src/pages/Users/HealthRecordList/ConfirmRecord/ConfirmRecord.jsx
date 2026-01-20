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
  Chip
} from "@mui/material";

/* =========================
   UTILS
========================= */
function formatLabel(key) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
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
      >
        {label}
      </Typography>
      {children}
    </Box>
  );
}

/* =========================
   RENDER VALUE (CORE)
========================= */
function RenderValue({ value }) {
  // null / undefined
  if (value === null || value === undefined) {
    return (
      <Typography color="text.secondary" fontStyle="italic">
        Không có dữ liệu
      </Typography>
    );
  }

  // boolean
  if (typeof value === "boolean") {
    return (
      <Chip
        size="small"
        label={value ? "Có" : "Không"}
        color={value ? "success" : "default"}
      />
    );
  }

  // array
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return (
        <Typography color="text.secondary" fontStyle="italic">
          Danh sách rỗng
        </Typography>
      );
    }

    // array of objects → table
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
        </Table>
      );
    }

    // array of primitive
    return (
      <Box display="flex" gap={1} flexWrap="wrap">
        {value.map((item, i) => (
          <Chip key={i} label={String(item)} size="small" />
        ))}
      </Box>
    );
  }

  // object
  if (typeof value === "object") {
    return (
      <Box pl={1} mt={1}>
        {Object.entries(value).map(([k, v]) => (
          <FieldCard key={k} label={formatLabel(k)}>
            <RenderValue value={v} />
          </FieldCard>
        ))}
      </Box>
    );
  }

  // string / number
  if (typeof value === "string") {
    // Try parse JSON if it looks like object/array
    const trimmed = value.trim();
    if ((trimmed.startsWith("{") && trimmed.endsWith("}")) ||
      (trimmed.startsWith("[") && trimmed.endsWith("]"))) {
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === "object" && parsed !== null) {
          return <RenderValue value={parsed} />;
        }
      } catch (e) {
        // ignore parsing error, render as string
      }
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
  if (data === undefined || data === null) return null;

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

      <RenderValue value={data} />
    </Box>
  );
}

/* =========================
   MAIN COMPONENT
========================= */
function ConfirmRecord({ data }) {
  let parsedData = data;

  // nếu backend trả string JSON
  if (typeof data === "string") {
    try {
      parsedData = JSON.parse(data);
    } catch {
      parsedData = { raw_data: data };
    }
  }

  if (!parsedData || typeof parsedData !== "object") {
    return (
      <Typography textAlign="center" mt={4} color="text.secondary">
        Không có dữ liệu hồ sơ
      </Typography>
    );
  }

  return (
    <Card
      sx={{
        borderRadius: 0,
        border: "none",
        boxShadow: "none",
        height: "100%"
      }}
    >
      <CardContent sx={{ p: { xs: 2, md: 4 } }}>
        {/* HEADER */}
        <Typography
          textAlign="center"
          fontWeight={800}
          fontSize={22}
          mb={4}
          letterSpacing={1}
        >
          XÁC NHẬN HỒ SƠ Y TẾ
        </Typography>

        <Divider sx={{ mb: 4 }} />

        {/* DYNAMIC CONTENT */}
        {Object.entries(parsedData).map(([key, value]) => (
          <DynamicSection
            key={key}
            title={key}
            data={value}
          />
        ))}

        {/* ACTIONS */}
      </CardContent>
    </Card>
  );
}

export default ConfirmRecord;
