const api = "https://jsonplaceholder.typicode.com/users/1";

const getData = async () => {
  const response = await fetch(api);
  const result = await response.json();

  console.log(result.name);
};

getData();
