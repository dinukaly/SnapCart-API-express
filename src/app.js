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
const checkoutRoutes = require('./modules/orders/checkout.routes');
const paymentRoutes = require('./modules/payments/payment.routes');
const reviewRoutes = require('./modules/reviews/review.routes');
const promotionRoutes = require('./modules/promotions/promotion.routes');

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

app.get('/health', (req, res) => {
  sendSuccess(res, {
    message: 'SnapCart API is healthy',
    data: { uptime: process.uptime() },
  });
});

app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/users`, userRoutes);
app.use(`${API_PREFIX}/products`, productRoutes);
app.use(`${API_PREFIX}/categories`, categoryRoutes);
app.use(`${API_PREFIX}/cart`, cartRoutes);
app.use(`${API_PREFIX}/wishlist`, wishlistRoutes);
app.use(`${API_PREFIX}/orders`, orderRoutes);
app.use(`${API_PREFIX}/checkout`, checkoutRoutes);
app.use(`${API_PREFIX}/payments`, paymentRoutes);
app.use(`${API_PREFIX}/reviews`, reviewRoutes);
app.use(`${API_PREFIX}/promotions`, promotionRoutes);

// Role CRUD is intentionally absent; Phase 2 will manage authorization internally.
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
