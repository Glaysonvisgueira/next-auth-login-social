import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";

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
  }),
  FacebookProvider({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,    
    authorization: {     
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
  }),
  InstagramProvider({
    clientId: process.env.INSTAGRAM_CLIENT_ID,
    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
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
