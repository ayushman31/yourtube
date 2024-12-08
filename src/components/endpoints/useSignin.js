import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../utils/constants";

const useSignin = () => {
//   const navigate = useNavigate();

  const signin = async (email, password) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/signin`, {
        email,
        password
      });

      toast("Signed in successfully");
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      return true;
//       navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("Sign-in failed");
      return false
    }
  };

  return signin;
};

export default useSignin;
