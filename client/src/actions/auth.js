import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const SignIn = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    Navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = (formData, Navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    Navigate("/");
  } catch (error) {
    console.log(error);
  }
};
