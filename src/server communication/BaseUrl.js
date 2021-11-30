import { ServiceConstent } from "./ServiceConstants";

const baseURL = (safeName = ServiceConstent.getSafeName()) => `https://safe101.com.au/safe101-${safeName}/api/`;

//https://safe101.com.au/safe101-demo/api/loginApi/validate

export const Auth = {
    initMobile: (safeName) => `${baseURL(safeName)}appApi/initMobile`,
    validate: (safeName) => `${baseURL(safeName)}loginApi/validate`
};

export const validate = (safeName) => `${baseURL(safeName)}loginApi/validate`;
