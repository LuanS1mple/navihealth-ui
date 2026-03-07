// export const DOMAIN_API = 'https://navi-health.site/api/'
export const DOMAIN_API = 'http://localhost:5062/api/'
export const CREATE_VISIT = 'medical-record/visit'
export const PREVIEW_AI = 'medical-record/' // + {visitId}/preview-ai
export const CONFIRM_SAVE = 'medical-record/' // + {visitId}/confirm-save
export const UPLOAD_API = 'medical-record/extract'
export const SAVE_RECORD = 'medical-record/save'
export const SEND_EMAIL_RESET = 'auth/forgot-password'
export const RESET_PASSWORD = 'auth/reset-password'
export const GET_RECORDS = 'medical-record'
export const GET_ME = 'auth/me'
export const DETAIL_RECORD = 'medical-record/'
export const DOWNLOAD_RECORD = 'medical-record/download/'
export const LOGIN = 'auth/login'
export const GET_PROFILE = 'profile/me'
export const UPDATE_PROFILE = 'profile/update'

// Chat APIs
export const CHAT = 'chat'
export const NEW_CHAT = 'chat/new'
export const GET_CONVERSATIONS = 'chat/conversations'
export const GET_CHAT_HISTORY = 'chat/history/'

// Reminder APIs
export const REMINDERS = 'reminders'

// Comparison APIs
export const COMPARE_RECORDS = 'medical/compare'
export const COMPARE_HISTORY = 'medical/compare/history'
export const COMPARE_DETAIL = 'medical/compare/history/'

// Feedback APIs
export const FEEDBACK = 'feedback'
export const MY_FEEDBACKS = 'feedback/my-feedbacks'

// PayOS APIs
export const PAYOS_CREATE = 'payos/create'
export const PAYOS_GET_TRANSACTION = 'payos/transaction/'

// Admin Dashboard APIs
export const ADMIN_BUSINESS_KPIS = 'admin_check/business-kpis'
export const ADMIN_REVENUE_CHART = 'admin_check/revenue-chart'
export const ADMIN_PLAN_DISTRIBUTION = 'admin_check/plan-distribution'
export const ADMIN_RECENT_TRANSACTIONS = 'admin_check/recent-transactions'
export const ADMIN_DASHBOARD_STATS = 'admin_check/dashboard-stats'
export const ADMIN_RECENT_LOGINS = 'admin_check/recent-logins'
export const ADMIN_VISITOR_STATS = 'admin_check/visitor-stats'
// Share Record APIs
export const SHARE_RECORD = 'medical-record/share/'
export const VIEW_SHARED_RECORD = 'medical-record/share/view/'
export const DOWNLOAD_SHARED_RECORD = 'medical-record/share/download/'
export const MY_SHARE_CODES = 'medical-record/share/my-codes'
export const REVOKE_SHARE_CODE = 'medical-record/share/'
