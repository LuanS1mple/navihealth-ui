import React from 'react'
import { Box, Container, Typography, Link, Divider } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          mt: 6,
          py: 3,
          backgroundColor: "background.paper",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              gap: 1,
            }}
          >
            {/* Copyright */}
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Hệ thống Hồ sơ Y tế. All rights reserved.
            </Typography>

            {/* Links */}
            <Box>
              <Link
                component={RouterLink}
                to="/privacy"
                underline="hover"
                color="text.secondary"
                sx={{ fontSize: 14 }}
              >
                Chính sách quyền riêng tư
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Footer