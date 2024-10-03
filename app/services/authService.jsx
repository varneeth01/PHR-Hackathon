const sendOTP = async (mobile) => {
    const response = await fetch('/send-otp', { method: 'POST', body: JSON.stringify({ mobile }) });
    return await response.json();
  };
  
  const registerUser = async (data) => {
    const response = await fetch('/register', { method: 'POST', body: JSON.stringify(data) });
    return await response.json();
  };
  
  const loginUser = async (data) => {
    const response = await fetch('/login', { method: 'POST', body: JSON.stringify(data) });
    return await response.json();
  };
  
  export default { sendOTP, registerUser, loginUser };
  