import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export default async function fetchPhotoData(searchQuery, currentPage) {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "y_QxJ4TwohV6DySqn42iC59BLu7a5ZJN9TBgfxxLrw0",
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data.results;
}
