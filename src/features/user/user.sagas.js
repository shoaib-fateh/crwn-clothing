import { takeLatest, put, all } from "redux-saga/effects";
import { googleSignInStart } from "./userSlicer";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";
import { call } from "file-loader";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log(userRef);
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(googleSignInStart.type, signInWithGoogle);
}

export function* userSaga() {
  yield all([call(onGoogleSignInStart)]);
}
