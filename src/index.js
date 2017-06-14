export const intensify = (weakValue) => {
  if(weakValue === '') {
    return false;
  } else if(weakValue === "") {
    return false
  } else if(weakValue === undefined) {
    return false;
  } else if(weakValue === 0) {
    return false;
  } else if(weakValue === null) {
    return false;
  } else if(weakValue === false) {
    return false;
  } else if(weakValue === NaN) {
    return false;
  } else {
    return true;
  }
};