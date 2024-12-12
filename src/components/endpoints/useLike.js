import axios from "axios";
import { BACKEND_URL } from "../../utils/constants";

const useLike = () => {
  const likeVideo = async (videoId) => {
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      if (!token) {
        console.log('No token found');
        return;
      }

      await axios.post(`${BACKEND_URL}/like`, {
        videoId
      }, {
        headers: {
          token: token // Include the token in the request headers
        }
      });
    } catch (e) {
      console.error("Error during liking", e);
    }
  };

  return likeVideo; // Return the function
};

export default useLike;
