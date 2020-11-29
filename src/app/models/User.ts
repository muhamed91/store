export interface User {
    authorizedMandators:
      {id: string, name: string, logo: string }[];
    locale: string | null;
    messages: [];
    success: boolean;
    user: {
      id: string, avatar: string, email: string, firstname: string, name: string
    };
    userSettings: {
      userid: string, defaultMandatorId: string
    };
}