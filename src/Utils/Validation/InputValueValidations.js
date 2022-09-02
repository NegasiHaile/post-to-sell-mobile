export const validName = (name) => {
  if (name?.length >= 3) {
    return true;
  } else {
    return false;
  }
};

export const validEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

export const validPhoneNumber = (number) => {
  var regex =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  return regex.test(number); // returns true
};

export const validPassword = (password) => {
  var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};
