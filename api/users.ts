export const getUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
};

export const getPhoto = async () => {
  const response = await fetch(
    "https://random-data-api.com/api/v2/users?size=10&is_xml=true",
  );
  const data = await response.json();

  return data;
};
