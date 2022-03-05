function startSession(userData) {
  localStorage.setItem("user", JSON.stringify(userData));
}

function endSession() {
  localStorage.removeItem("user");
  localStorage.clear();
}

function isLoggedIn() {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData["auth-token"]) {
    return true;
  }

  return false;
}

function loggedUser() {
  const userData = JSON.parse(localStorage.getItem("user"));
  if (userData && userData["auth-token"] && userData["userId"]) {
    return userData;
  }
  return {};
}

const authService = {
  startSession,
  endSession,
  isLoggedIn,
  loggedUser,
};

export default authService;
