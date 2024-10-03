const updateProfile = async (data) => {
    const response = await fetch('/update-profile', { method: 'PUT', body: JSON.stringify(data) });
    return await response.json();
  };
  
  export default { updateProfile };
  