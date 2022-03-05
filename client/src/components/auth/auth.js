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

const authService = {
  startSession,
  endSession,
  isLoggedIn,
};

export default authService;
