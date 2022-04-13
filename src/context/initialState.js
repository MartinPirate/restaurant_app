import {fetchUser} from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();
export const initialState = {
    //get user from localstorage
    user: userInfo,
}
