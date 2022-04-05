const apiKey = process.env.REACT_APP_DULEY;
const apiHost = "v1-sneakers.p.rapidapi.com";
const apiUrl = "https://v1-sneakers.p.rapidapi.com";

export const getAllShoes = async () => {
  try {
    const response = await fetch(`${apiUrl}/v1/sneakers?limit=16&brand=Nike`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": apiHost,
        "x-rapidapi-key": apiKey,
      },
    });

    let data = await response.json();
    data = data.results;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const remoteURL = "http://localhost:8088";

export const getShoesById = (shoesId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/myCollection/${shoesId}`).then((res) =>
    res.json()
  );
};

export const getAllShoeCollections = () => {
  return fetch(`${remoteURL}/myCollection`).then((res) => res.json());
};

export const deleteShoe = (id) => {
  return fetch(`${remoteURL}/myCollection/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const addShoe = (newShoe) => {
  return fetch(`${remoteURL}/myCollection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShoe),
  }).then((response) => response.json());
};

export const updateShoe = (editedShoe) => {
  return fetch(`${remoteURL}/myCollection/${editedShoe.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedShoe),
  }).then((data) => data.json());
};
