import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:7070/appointment/getdept");
    const data = response.data;

    // Store the data in session storage
    sessionStorage.setItem("fetchedData", JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
