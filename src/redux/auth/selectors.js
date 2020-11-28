const isAuthenticated = state => !!state.auth.user.token;
const getLoading = state => state.auth.loading;
const getUser = state => state.auth.user;
export default {
  isAuthenticated,
  getLoading,
  getUser,
};
