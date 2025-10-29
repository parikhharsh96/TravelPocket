# Razorpay Payment Gateway Setup

This guide will help you set up Razorpay payment gateway for the TravelPocket booking system.

## Prerequisites

1. A Razorpay account (Sign up at https://razorpay.com/)
2. Razorpay API keys (available in your dashboard)

## Setup Steps

### 1. Get Your API Keys

1. Log in to your Razorpay Dashboard: https://dashboard.razorpay.com/
2. Navigate to **Settings** → **API Keys**
3. Generate API keys if you haven't already
4. You'll get two keys:
   - **Key ID** (starts with `rzp_test_` for test mode or `rzp_live_` for live mode)
   - **Key Secret** (keep this confidential)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

2. Add your Razorpay keys to `.env.local`:
   \`\`\`env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_id
   RAZORPAY_KEY_ID=rzp_test_your_key_id
   RAZORPAY_KEY_SECRET=your_key_secret
   \`\`\`

### 3. Test Mode vs Live Mode

- **Test Mode**: Use test keys (starting with `rzp_test_`) for development
  - Test cards: https://razorpay.com/docs/payments/payments/test-card-details/
  - No real money is charged

- **Live Mode**: Use live keys (starting with `rzp_live_`) for production
  - Real transactions with actual money
  - Requires KYC verification

### 4. Testing the Integration

1. Start your development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Navigate to the booking page
3. Fill in the booking details
4. Click "PROCEED TO PAYMENT"
5. Use test card details:
   - Card Number: `4111 1111 1111 1111`
   - CVV: Any 3 digits
   - Expiry: Any future date

### 5. Payment Flow

1. User fills booking form and clicks "PROCEED TO PAYMENT"
2. Backend creates a Razorpay order via `/api/create-razorpay-order`
3. Razorpay checkout modal opens with payment options
4. User completes payment
5. Backend verifies payment signature via `/api/verify-razorpay-payment`
6. Success/failure message is shown to user

### 6. Webhook Setup (Optional but Recommended)

For production, set up webhooks to handle payment notifications:

1. Go to **Settings** → **Webhooks** in Razorpay Dashboard
2. Add webhook URL: `https://yourdomain.com/api/razorpay-webhook`
3. Select events: `payment.captured`, `payment.failed`
4. Save the webhook secret

### 7. Security Best Practices

- Never expose `RAZORPAY_KEY_SECRET` in frontend code
- Always verify payment signatures on the backend
- Use HTTPS in production
- Implement rate limiting on payment APIs
- Log all payment transactions for audit

### 8. Going Live

Before going live:

1. Complete KYC verification in Razorpay Dashboard
2. Replace test keys with live keys in `.env.local`
3. Test thoroughly with small amounts
4. Set up webhook for production
5. Monitor transactions in Razorpay Dashboard

## Troubleshooting

### Payment Modal Not Opening
- Check if Razorpay script is loaded (check browser console)
- Verify `NEXT_PUBLIC_RAZORPAY_KEY_ID` is set correctly

### Payment Verification Failed
- Check if `RAZORPAY_KEY_SECRET` is correct
- Verify signature calculation matches Razorpay's format

### Order Creation Failed
- Check API route logs
- Verify Razorpay credentials are valid
- Ensure amount is in correct format (paise, not rupees)

## Support

- Razorpay Documentation: https://razorpay.com/docs/
- Razorpay Support: https://razorpay.com/support/
