import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface User {
    _id?: string;
    token?: string;
  }
  interface Session {
    user: {
      id?: string;
      token?: string;
    };
  }
}

export const jwtCallback = async ({
  token,
  user,
}: {
  token: JWT;
  user?: User | AdapterUser;
}): Promise<JWT> => {
  if (user) {
    token.id = user._id;
    token.token = user.token;
  }
  console.log("jwtCallback");
  console.log(user);
  console.log(token);
  return token;
};

export const sessionCallback = async ({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}): Promise<Session> => {
  if (session.user) {
    session.user.id = token.id as string;
    session.user.token = token.token as string;
    console.log("sessionCallback");
    console.log(session);
    console.log(token);
  }
  return session;
};
