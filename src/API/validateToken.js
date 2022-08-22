import decode from "jwt-decode";
function validToken(acssToken) {
  if (acssToken) {
    return true;
  } else {
    localStorage.clear();
    window.location.href = "/";
  }
}

export default validToken;
