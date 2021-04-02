const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/login', require('./Routes/api/admin_panel/login'));
app.use('/api/new_vendor', require('./Routes/api/admin_panel/new_vendor'));
app.use('/api/payment_process', require('./Routes/api/admin_panel/payment_process'));
app.use('/api/register', require('./Routes/api/admin_panel/register'));
app.use('/api/update_home', require('./Routes/api/admin_panel/update_home'));
app.use('/api/update_po', require('./Routes/api/admin_panel/update_po'));
app.use('/api/upload_po', require('./Routes/api/admin_panel/upload_po'));
app.use('/api/get_po', require('./Routes/api/admin_panel/get_po'));
app.use('/api/admin_auth', require('./Routes/api/admin_panel/login'));
app.use('/api/vendor_login', require('./Routes/api/vendor_panel/vendor_login'));
app.use('/api/admin_register', require('./Routes/api/admin_panel/new_admin'));
app.use('/api/myProfile', require('./Routes/api/vendor_panel/Profile/myProfile'));
app.use('/api/update_gstn', require('./Routes/api/vendor_panel/Profile/upDateGSTN'));
app.use('/api/update_turn_over', require('./Routes/api/vendor_panel/Profile/upDateTurnOver'));
app.use('/api/upDate_email_phone', require('./Routes/api/vendor_panel/Profile/upDate_email_phone'));
app.use('/api/submit_envoices', require('./Routes/api/vendor_panel/Envoice/submit_envoice'));
app.use('/api/get_invoice', require('./Routes/api/vendor_panel/Envoice/get_invoice'));
app.use('/api/edit_delete_envoices', require('./Routes/api/vendor_panel/Envoice/edit_delete'));
app.use('/api/vendor_reset_password', require('./Routes/api/vendor_panel/Reset_password'));
app.use('/api/search_bill', require('./Routes/api/vendor_panel/Report/search_bills'));


// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
