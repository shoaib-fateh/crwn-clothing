import CreateActionTypes from "./user.type";

const setCurrentUser = (user) => ({
  type: CreateActionTypes.SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
