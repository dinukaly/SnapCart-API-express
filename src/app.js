const express = require('express');

const { API_PREFIX } = require('./shared/constants/api');
const { sendSuccess } = require('./shared/responses/apiResponse');
const { errorHandler } = require('./shared/middleware/errorHandler');
const { notFoundHandler } = require('./shared/middleware/notFoundHandler');

const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/users/user.routes');
const productRoutes = require('./modules/products/product.routes');
const categoryRoutes = require('./modules/categories/category.routes');
const cartRoutes = require('./modules/cart/cart.routes');
const wishlistRoutes = require('./modules/wishlist/wishlist.routes');
const orderRoutes = require('./modules/orders/order.routes');
const returnRoutes = require('./modules/orders/return.routes');
const paymentRoutes = require('./modules/payments/payment.routes');
const paymentMethodRoutes = require('./modules/payments/payment-method.routes');
const refundRoutes = require('./modules/payments/refund.routes');
const reviewRoutes = require('./modules/reviews/review.routes');
const dealRoutes = require('./modules/promotions/deal.routes');
const voucherRoutes = require('./modules/promotions/voucher.routes');
const voucherDetailRoutes = require('./modules/promotions/voucher-detail.routes');

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.get('/health', (req, res) => {
  sendSuccess(res, {
    message: 'SnapCart API is healthy',
    data: { uptime: process.uptime() },
  });
});

// Legacy route adapters keep mobile-facing URLs stable while each module is refactored.
app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/users`, userRoutes);
app.use(`${API_PREFIX}/products`, productRoutes);
app.use(`${API_PREFIX}/categories`, categoryRoutes);
app.use(`${API_PREFIX}/carts`, cartRoutes);
app.use(`${API_PREFIX}/bookmarks`, wishlistRoutes);
app.use(`${API_PREFIX}/orders`, orderRoutes);
app.use(`${API_PREFIX}/returns`, returnRoutes);
app.use(`${API_PREFIX}/payments`, paymentRoutes);
app.use(`${API_PREFIX}/paymentmethods`, paymentMethodRoutes);
app.use(`${API_PREFIX}/refunds`, refundRoutes);
app.use(`${API_PREFIX}/reviews`, reviewRoutes);
app.use(`${API_PREFIX}/deals`, dealRoutes);
app.use(`${API_PREFIX}/vouchers`, voucherRoutes);
app.use(`${API_PREFIX}/voucherdetails`, voucherDetailRoutes);

// Role CRUD is intentionally not mounted here; Phase 2 will replace it with RBAC.
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
