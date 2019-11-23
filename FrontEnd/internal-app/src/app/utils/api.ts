import { environment } from '../../environments/environment';

export const API = {
    IMAGE : {
      AVATAR: `https://ui-avatars.com/api/?rounded=true&background=FFFFFF&color=0066CC&name=`,
    },
    URL: {
      AUTHENTICATE: {
          LOGIN: `${environment.baseURL_DEV}/Authenticate`,
      },
      GOODS: {
        GETLIST: `${environment.baseURL_DEV}/good/get-list`,
        GETDETAIL: `${environment.baseURL_DEV}/good/get-detail/`,
      }
    },
    HEADER: {
      DEFAULT: {
          'Content-Type': 'application/json; charset=UTF-8',
          'Provider': 2,
          'Access-Control-Allow-Methods': 'POST, GET,PUT, DELETE, OPTIONS'
      },
      KEY: {
          AUTH: 'access_token'
      }
    }
};
