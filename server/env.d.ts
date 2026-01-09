


declare global {
    namespace Express {
        export interface Request {
            body: any,
        }
    }
    namespace NodeJS {
        interface ProcessEnv {

            NODEMAILER_USERNAME : string;
            NODEMAILER_PASSWORD : string;
            ACCESS_TOKEN_SECRET :string;
            REFRESH_TOKEN_SECRET :string;
            ACCESS_TOKEN_EXPIRES_IN : string;
            REFRESH_TOKEN_EXPIRES_IN : string;
            ROOT_USERNAME: string;
            ROOT_EMAIL: string;
            ROOT_PASSWORD: string;
            REACT_APP_BASE_URL: string;
        }
    }
}

export {}
