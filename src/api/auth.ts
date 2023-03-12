import Api from "./axios";
import IApiResponse from 'types/apiResponse';
import IUserAuthResponse from 'types/userAuthResponse';
import { nanoid } from "nanoid";

export const loginApi = async (username: string, password: string) => {
    let result: IApiResponse<IUserAuthResponse>;
    try {
        const { data } = await Api.get(`auth?username=${username}&password=${password}`);
        if (data.length > 0) {
            result = {
                status: "SUCCESS",
                data,
                error: ""
            }
        } else {
            result = {
                status: "FAILED",
                data: [],
                error: "wrong user name or password"
            }
        }
        return result;
    } catch (error) {
        console.log("error")
        result = {
            status: "FAILED",
            data: [],
            error: "wrong user name or password"
        }
        return result;
    }
}

export const signupApi = async (username: string, password: string) => {
    let result: IApiResponse<IUserAuthResponse>;
    try {
        const isExistRes = await Api.get(`auth?username=${username}`);
        if (isExistRes.data.length > 0) {
            result = {
                status: "FAILED",
                data: [],
                error: "username already taken"
            }
            return result;
        }

        const { data } = await Api.post("auth", {
            id: nanoid(8),
            username,
            password,
            token: nanoid()
        });

        if (data) {
            result = {
                status: "SUCCESS",
                data,
                error: ""
            }
        } else {
            result = {
                status: "FAILED",
                data: [],
                error: "something went wrong"
            }
        }
        return result;
    } catch (error) {
        console.log(error);
        result = {
            status: "FAILED",
            data: [],
            error: "Api error"
        }
        return result;
    }
}
