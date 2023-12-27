import axios from "axios";


export const fetchData = async () => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/showalldebate`;
    const responseData = await axios.get(url);
    // console.log("API Response:", responseData.data);
    // setItems(responseData.data.mainDebates);
    return responseData.data.mainDebates;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
