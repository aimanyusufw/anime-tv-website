export const fetchApi = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_API_URL}/${resource}?${query}`
  );
  return response.json();
};
