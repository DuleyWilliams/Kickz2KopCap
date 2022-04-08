const remoteURL = "http://localhost:8088";

export const getKickzById = (kickzId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(`${remoteURL}/kicksDbApi`).then((res) => res.json());
};

export const getAllKickz = () => {
  return fetch(`${remoteURL}/kicksDbApi`).then((res) => res.json());
};

export const deleteKick = (id) => {
  return fetch(`${remoteURL}/kicksDbApi/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const addKick = (newKick) => {
  return fetch(`${remoteURL}/kicksDbApi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newKick),
  }).then((response) => response.json());
};

export const updateKick = (editedKick) => {
  return fetch(`${remoteURL}/kicksDbApi/${editedKick.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedKick),
  }).then((data) => data.json());
};
