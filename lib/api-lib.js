export const fetchApi = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ANIME_API_URL}/${resource}?${query}`
  );
  return response.json();
};

export const fetchNestedAnime = async (resource, object) => {
  const response = await fetchApi(resource);
  return response.data?.flatMap((data) => data.entry);
};
