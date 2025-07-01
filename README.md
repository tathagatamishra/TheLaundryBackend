### Models:

- Admin - For shop owner/admin authentication
- Customer - Customer information and loyalty tracking
- Order - Order management with items, status, payments
- Price - Service pricing management
- Coupon - Discount coupon system

### Features:

- JWT Authentication with secure login
- Password hashing with bcrypt
- CORS enabled for frontend integration
- Error handling middleware
- Auto-generated order IDs
- Loyalty points system
- Comprehensive order tracking

### Setup Instructions:

1. Backend Setup:

```
# Create a new directory for backend
mkdir laundry-backend
cd laundry-backend

# Initialize npm and install dependencies
npm init -y
npm install express mongoose bcryptjs jsonwebtoken cors dotenv axios
npm install -D nodemon

# Copy the code from the artifact into respective files
# Create the folder structure: models/, routes/, middleware/, seeds/
```

2. Environment Setup:

```
# Create .env file with your MongoDB URI and JWT secret
MONGODB_URI=mongodb://localhost:27017/laundry_shop
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
```

3. Create Default Admin:

```
npm run seed
# This creates admin@laundry.com / admin123
```

4. Start the Server:

```
npm run dev
Frontend Integration:
Update the API endpoint in your login component to match your backend URL (e.g., http://localhost:5000/api/auth/login).
```