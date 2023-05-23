export const getLocalStorage = (key) => {
  try {
    const jwtToken = JSON.parse(localStorage.getItem(key));
    return jwtToken;
  } catch (error) {
    return "";
  }
};

export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
