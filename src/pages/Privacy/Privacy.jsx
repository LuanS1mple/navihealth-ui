import React from 'react'
import {
  Box,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
function Privacy() {
  return (
    <>
      <Box  sx={{ p: 2 }}>
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Chính sách Quyền riêng tư
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Giới thiệu */}
          <Typography variant="body1" paragraph>
            Chính sách Quyền riêng tư này mô tả cách chúng tôi thu thập, sử dụng,
            lưu trữ và bảo vệ thông tin cá nhân của người dùng khi sử dụng nền tảng
            lưu trữ hồ sơ y tế, bao gồm các tính năng sử dụng Trí tuệ Nhân tạo (AI)
            để đưa ra khuyến nghị sức khỏe.
          </Typography>

          {/* Mục 1 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            1. Thông tin chúng tôi thu thập
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText
                primary="Thông tin cá nhân"
                secondary="Họ tên, ngày sinh, giới tính, email, số điện thoại."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Thông tin y tế"
                secondary="Tiền sử bệnh, chẩn đoán, đơn thuốc, kết quả xét nghiệm, hồ sơ y tế do người dùng tải lên."
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Dữ liệu sử dụng"
                secondary="Địa chỉ IP, loại trình duyệt, thiết bị truy cập, nhật ký hoạt động."
              />
            </ListItem>
          </List>

          {/* Mục 2 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
            2. Mục đích sử dụng thông tin
          </Typography>

          <List dense>
            <ListItem>
              <ListItemText primary="Lưu trữ và quản lý hồ sơ y tế cá nhân một cách an toàn." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Cung cấp các khuyến nghị và gợi ý sức khỏe dựa trên AI." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Nâng cao chất lượng dịch vụ và trải nghiệm người dùng." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tuân thủ các quy định pháp luật liên quan đến dữ liệu và y tế." />
            </ListItem>
          </List>

          {/* Mục 3 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
            3. Tuyên bố miễn trừ trách nhiệm về AI
          </Typography>

          <Typography variant="body1" paragraph>
            Các khuyến nghị được tạo ra bởi hệ thống AI chỉ mang tính chất tham khảo
            và hỗ trợ thông tin. Chúng không thay thế cho chẩn đoán, tư vấn hoặc điều
            trị y tế chuyên nghiệp. Người dùng cần tham khảo ý kiến của bác sĩ hoặc
            chuyên gia y tế trước khi đưa ra bất kỳ quyết định nào liên quan đến sức
            khỏe.
          </Typography>

          {/* Mục 4 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            4. Bảo mật dữ liệu
          </Typography>

          <Typography variant="body1" paragraph>
            Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp như mã hóa,
            kiểm soát truy cập và lưu trữ an toàn nhằm bảo vệ dữ liệu cá nhân khỏi
            truy cập trái phép, mất mát hoặc lạm dụng.
          </Typography>

          {/* Mục 5 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            5. Chia sẻ dữ liệu
          </Typography>

          <Typography variant="body1" paragraph>
            Chúng tôi không bán hoặc cho thuê dữ liệu cá nhân của người dùng. Dữ liệu
            chỉ được chia sẻ với bên thứ ba khi có sự đồng ý của người dùng hoặc khi
            pháp luật yêu cầu.
          </Typography>

          {/* Mục 6 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            6. Quyền của người dùng
          </Typography>

          <Typography variant="body1" paragraph>
            Người dùng có quyền truy cập, chỉnh sửa, cập nhật hoặc yêu cầu xóa dữ
            liệu cá nhân của mình theo quy định pháp luật hiện hành.
          </Typography>

          {/* Mục 7 */}
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            7. Thay đổi chính sách
          </Typography>

          <Typography variant="body1" paragraph>
            Chúng tôi có thể cập nhật Chính sách Quyền riêng tư này theo thời gian.
            Mọi thay đổi sẽ được thông báo trên website và có hiệu lực kể từ ngày
            công bố.
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Privacy