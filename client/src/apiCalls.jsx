export const getStats = async () => {
  const query = JSON.parse(localStorage.getItem("query"));
  const response = await fetch(
    `/api/profile/${query.platform}/${query.username}`
  );
  if (!response.ok) {
    throw Error("Not found");
  }
  const data = await response.json();
  if (data.errors) {
    throw Error("Not found");
  }
  return data;
};
