const GetPhotos = async ({ limit = 5 }) => {
  const response = await fetch(
    `https://api.unsplash.com/photos/?per_page=${limit}&client_id=E7tdtB2AMzvzRrM9QO37LvN5Xf-5A77tJhmL8xC5eOE`
  ).then((res) => res.json());
  console.log(limit);
  return response;
};

export default GetPhotos;
