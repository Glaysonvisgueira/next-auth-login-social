import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

export const authOptions = { 
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
       authorization: {     
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
     clientId: process.env.GITHUB_ID,
     clientSecret: process.env.GITHUB_SECRET,   
      authorization: {       
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      }, 
  })
  ],

  callbacks: {
    session({ session, token }) {
      session.user = token.user;
      return session;
    },

    async jwt({ token, account, user }) {
      if (account) {
        token.user = user;
      }

      return token;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  secret: "adiaodasdjasdjlkdjljdlkjdlkajdasdlsa",
};
export default NextAuth(authOptions);
