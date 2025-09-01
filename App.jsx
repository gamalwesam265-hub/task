import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [bills, setBills] = useState({ 200: 0, 100: 0, 50: 0, });
  const [showResult, setShowResult] = useState(false);

  const handleChange = (e) => {
    setAmount(e.target.value);
    setShowResult(false);  
  };

  const calculateBills = () => {
    const num = parseInt(amount);
    if (isNaN(num) || num <= 0) {
      alert("أدخل مبلغ صالح!");
      return;
    }

    let result = { 200: 0, 100: 0, 50: 0, 1: 0 };
    let remaining = num;

    result[200] = Math.floor(remaining / 200);
    remaining %= 200;

    result[100] = Math.floor(remaining / 100);
    remaining %= 100;

    result[50] = Math.floor(remaining / 50);
    remaining %= 50;

    result[1] = remaining;

    setBills(result);
    setShowResult(true);
  };

  return (
    <div style={{ margin: "20px" }}> 
      <h2>ATM محاكاة ماكينة</h2>
      <div style={{ marginBottom: "10px" }}> 
        <input
          type="number"
          placeholder="أدخل المبلغ"
          value={amount}
          onChange={handleChange}
        />
        <button onClick={calculateBills} style={{ marginLeft: "5px" }}>
          احسب
        </button>
      </div>

      {showResult && (
        <div style={{ marginTop: "10px", borderTop: "1px solid black", paddingTop: "10px" }}>
          <h3>تفاصيل الأوراق:</h3>
          <p>200: {bills[200]}</p>
          <p>100: {bills[100]}</p>
          <p>50: {bills[50]}</p>
          
        </div>
      )}
    </div>
  );
}
