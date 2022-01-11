import axios from "axios";

export async function getImages() {
  try {
    const { data: response } = await axios.get(
      "https://api.nasa.gov/planetary/apod?api_key=7aOnFz6aoLe5BVeSnURKDee0oMeh6ZZXi6b6M4cV&count=5"
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
       `https://api.nasa.gov/planetary/apod?api_key=7aOnFz6aoLe5BVeSnURKDee0oMeh6ZZXi6b6M4cV&start_date=${from}&end_date=${to}`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}
