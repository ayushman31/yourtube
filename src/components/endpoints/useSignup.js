import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useSignup = () => {
//   const navigate = useNavigate();

  const signup = async (username, email, password) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/signup`, {
        username,
        email,
        password
      });

      const jwt = response.data.token;
      alert("You have signed up");
      toast("Signed in successfully");
      localStorage.setItem("token", jwt);
    //   navigate("/");
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  return signup;
};

export default useSignup;
