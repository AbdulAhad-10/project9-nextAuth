export { default } from "next-auth/middleware";

//specify routes for which we want to authenticate users

export const config = { matcher: ["/extra", "/dashboard"] };
