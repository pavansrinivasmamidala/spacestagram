import axios from "axios";

export async function getImages() {
  try {
    const { data: response } = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=t3YbP5nPNKOD1Y7H04u7v6EbMbVY3YcLsbCuLAsF&count=5"
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getImagesByDays(from,to) {
  try {
    const { data: response } = await axios.get(
       `https://api.nasa.gov/planetary/apod?api_key=t3YbP5nPNKOD1Y7H04u7v6EbMbVY3YcLsbCuLAsF&start_date=${from}&end_date=${to}` // wanted to include a date picker 
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
