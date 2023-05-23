// localStorage의 메소드들을 모은 컴포넌트 입니다. 코드 중복을 피하기 위해서 작성하였습니다.

//localStorage.getItem을 사용하여 키로부터 데이터를 가져옵니다.
export const getLocalStorage = (key) => {
  try {
    const userInfo = localStorage.getItem(key);
    return userInfo;
  } catch (error) {
    return "";
  }
};

//localStorage.setItem 사용하여 키로부터 데이터를 읽어옵니다.
export const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

//localStorage.removeItem 사용하여 키의 데이터를 삭제합니다.
export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};
