import app from './app.js';
import dotenv from 'dotenv';
import Razorpay from 'razorpay';
dotenv.config({ path: "backend/config/config.env" });
const port=process.env.PORT||3000;

export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

const processPayment = async(req,res)=>{
    res.status(200).json({
        success: true,
    })
}
app.route('/payment/process').post(processPayment);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});