const generateToken = async (qrData) => {
    const response = await fetch('/generate-token', { method: 'POST', body: JSON.stringify({ qrData }) });
    return await response.json();
  };
  
  export default { generateToken };
  