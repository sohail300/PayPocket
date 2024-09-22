import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { userLoginSchema } from "@common/zod/src/userLogin";
import prisma from "@db/src/index";
import bcrypt from "bcrypt";
import { User } from "@/types/interfaces";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // adapter: MongoDBAdapter(clientPromise) as Adapter,
  providers: [
    CredentialsProvider({
      id: "credentials",
      credentials: {
        number: { label: "Phone Number", type: "number" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        try {
          console.log(credentials);
          if (!credentials) {
            throw new Error("Credentials not found");
          }

          const parsedInput = userLoginSchema.safeParse(credentials);

          if (parsedInput.success === false) {
            throw new Error("Invalid input");
          }

          const { number, password } = parsedInput.data;

          const existingUser = await prisma.user.findFirst({
            where: {
              number: number,
            },
          });

          if (existingUser) {
            const passwordValidation = await bcrypt.compare(
              password,
              existingUser.password
            );
            if (passwordValidation) {
              return {
                id: existingUser.id.toString(),
                number: number,
              };
            }
            return null;
          } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
              data: {
                number: number,
                password: hashedPassword,
              },
            });

            await prisma.balance.create({
              data: {
                amount: 0,
                locked: 0,
                userId: user.id,
              },
            });

            if (user) {
              return {
                id: user.id.toString(),
                number: user.number,
              };
            } else {
              return null;
            }
          }
        } catch (err) {
          console.log("Error:", err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id?.toString();
        token.number = user.number;
      }
      // console.log(token);
      return token;
    },
    async session({ token, session }) {
      if (token) {
        if (session.user !== undefined) {
          session.user.id = token.id;
          session.user.number = token.number;
        }
      }
      // console.log(session);
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
};
