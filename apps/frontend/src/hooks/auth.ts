import { useEffect } from "react";
import { useAppDispatch } from "./redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setIdToken } from "@frontend/store/auth/slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken();
        dispatch(setIdToken(idToken));
      } else {
        dispatch(setIdToken(null));
      }
    });
    return unsubscribe;
  }, [dispatch]);
};
