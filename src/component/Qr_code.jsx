import React, { useState } from 'react'
import './Qr_code.css'
import { QRCodeSVG } from 'qrcode.react';
function Qr_code() {

const [link,setLink]=useState('');
const [showQR, setShowQR]=useState(false);

const handleChange=(event)=>
{
  setLink(event.target.value);
};

const handleSubmit = () => {
  setShowQR(true);
};
  return (
    <div className="container">
    <div className="heading">
      <h1>SCAN ME</h1>
    </div>

    <div className="input-container">
      <input
        type="text"
        placeholder="Enter the link"
        value={link}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Generate QR</button>
    </div>

    {showQR && (
      <div className="qr-gen">
        <QRCodeSVG value={link} />
      </div>
    )}
  </div>
  )
}

export default Qr_code
