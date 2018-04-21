let authenticated = false;

function isAuthenticated(): boolean {
  return authenticated;
}

function login(username: string, password: string): boolean {
  if (username === 'toto' && password === 'secret123') {
    authenticated = true;
    return authenticated;
  }
  return authenticated;
}

function logout(): boolean {
  authenticated = false;
  return authenticated;
}

export default {
  isAuthenticated,
  login,
  logout,
};
