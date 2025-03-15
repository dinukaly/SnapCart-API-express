// exprss framwork
// body- parser
// mongoose - ORM framework

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT | 3000;


//endpoints
const BookmarkRoute = require('./routes/BookmarkRoute');
const CartRoute = require('./routes/CartRoute');
const CategoryRoute = require('./routes/CategoryRoute');
const DealRoute = require('./routes/DealRoute');
const OrderRoute = require('./routes/OrderRoute');
const PaymentMethodRoute = require('./routes/PaymentMethodRoute');
const PaymentRoute = require('./routes/PaymentRoute');
const ProductRoute = require('./routes/ProductRoute');
const RefundRoute = require('./routes/RefundRoute');
const ReturnRoute = require('./routes/ReturnRoute');
const ReviewRoute = require('./routes/ReviewRoute');
const RoleRoute = require('./routes/RoleRoute');
const UserRoute = require('./routes/UserRoute');
const VoucherDetailRoute = require('./routes/VoucherDetailRoute');
const VoucherRoute = require('./routes/VoucherRoute');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb:127.0.0.1:27017/quick_cart_db').then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.log(error);
});

app.use('/api/v1/bookmarks', BookmarkRoute);
app.use('/api/v1/carts', CartRoute);
app.use('/api/v1/categories', CategoryRoute);
app.use('/api/v1/deals', DealRoute);
app.use('/api/v1/orders', OrderRoute);
app.use('/api/v1/paymentmethods', PaymentMethodRoute);
app.use('/api/v1/payments', PaymentRoute);
app.use('/api/v1/products', ProductRoute);
app.use('/api/v1/refunds', RefundRoute);
app.use('/api/v1/returns', ReturnRoute);
app.use('/api/v1/reviews', ReviewRoute);
app.use('/api/v1/roles', RoleRoute);
app.use('/api/v1/users', UserRoute);
app.use('/api/v1/voucherdetails', VoucherDetailRoute);
app.use('/api/v1/vouchers', VoucherRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});