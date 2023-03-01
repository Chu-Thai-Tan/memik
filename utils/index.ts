import axios from "axios";
import jwt_decode from "jwt-decode";
import { authActions } from "../store/auth-slice";

export const createOrGetUser = async (response: any, dispatch: any) => {
  const decoded: { name: string; picture: string; sub: string } = jwt_decode(
    response.credential
  );

  const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: "user",
    userName: name,
    image: picture,
  };

  localStorage.setItem(
    "user",
    JSON.stringify({ userName: name, image: picture })
  );
  dispatch(authActions.addUser({ userName: name, image: picture }));

  await axios.post(`http://localhost:3000/api/auth`, user);
};
