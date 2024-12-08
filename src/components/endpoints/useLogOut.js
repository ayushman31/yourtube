import React from 'react'
import { useNavigate } from 'react-router-dom';

const useLogOut = () => {
  localStorage.removeItem("token");
  alert("Logged out successfully.");
  window.location.href = '/login';

}

export default useLogOut