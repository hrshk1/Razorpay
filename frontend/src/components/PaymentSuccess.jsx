import React from 'react'
import '../styles/PaymentSuccess.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// REMOVED: import PaymentSuccess from './PaymentSuccess'; (This was causing the crash)

const PaymentSuccess = () => {
    const query = new URLSearchParams(useLocation().search);
    const reference = query.get("reference");
    const navigate = useNavigate();
    return (
        <div className="payment-success-container">
            <div className="payment-success-card">
                <h1 className="payment-success-title">Payment Successful</h1>
                <p className="payment-success-message">Thank you for your Payment. Your Transaction was successful!</p>
                {/* Fixed Typo: changed 'referenece' to 'reference' */}
                {reference && (
                    <p className="payment-success-reference">Payment Reference ID: <span>{reference}</span></p>
                )}
                <button className='button-primary' onClick={()=>{navigate('/')}}>Redirect to Home</button>
            </div>
        </div>
    )
}

export default PaymentSuccess