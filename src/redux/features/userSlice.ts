import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IUser from 'types/user';
import { AppDispatch } from 'redux/store';
// api
import { loginApi, signupApi } from 'api/auth';

const LOCAL_STORAGE_KEY = "GSG_TT_8_UP_WORK_CLONE_USER";


interface IUserSlice {
    isLoggedIn: boolean;
    isFetching: boolean;
    user: IUser
}

const defaultUser = {
    id: '',
    username: '',
    photo: '',
    token: '',
    location: "",
    job_title: "",
    hourly_rate: 0,
    overview: "",
    portfolio: [],
    skills: [],
    recentSearches: [],
}

const initialState: IUserSlice = {
    isLoggedIn: Boolean(localStorage.getItem(LOCAL_STORAGE_KEY)),
    isFetching: false,
    user: localStorage.getItem(LOCAL_STORAGE_KEY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "") : defaultUser
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        startFetching: (state) => { state.isFetching = true },
        endFetching: (state) => { state.isFetching = true },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(action.payload))
            state.user = action.payload;
        },
        resetUser: (state) => {
            state.user = {
                id: '',
                username: '',
                photo: '',
                token: '',
                location: "",
                job_title: "",
                hourly_rate: 0,
                overview: "",
                portfolio: [],
                skills: [],
                recentSearches: [],
            }
        },
        logout: (state) => {
            state.isFetching = false;
            state.isLoggedIn = false;
            state.user = defaultUser;
            localStorage.removeItem(LOCAL_STORAGE_KEY)
        }
    },
});

export const {
    setIsLoggedIn,
    endFetching,
    startFetching,
    resetUser,
    setUser,
    logout } = userSlice.actions;


export const login = (username: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(startFetching());
    const { data, status } = await loginApi(username, password);
    if (status === "SUCCESS") {
        dispatch(setIsLoggedIn(true));
        dispatch(setUser(data as IUser));
        dispatch(endFetching());
        return true;
    } else {
        dispatch(resetUser());
        dispatch(setIsLoggedIn(false));
        dispatch(endFetching());
        return false;
    }
}

export const signup = (username: string, password: string) => async (dispatch: AppDispatch) => {
    dispatch(startFetching());
    const { data, status } = await signupApi(username, password);
    if (status === 'SUCCESS') {
        dispatch(setIsLoggedIn(true));
        dispatch(setUser(data as IUser));
        dispatch(endFetching());
        return true;
    } else {
        dispatch(resetUser());
        dispatch(setIsLoggedIn(false));
        dispatch(endFetching());
        return false;
    }
}

export default userSlice.reducer;
