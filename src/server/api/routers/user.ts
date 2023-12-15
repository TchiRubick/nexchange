import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { userInfo } from "@/server/db/schema";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export const userRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ 
      lastname: z.string(),
      firstname: z.string(),
      cin: z.string() ,
      birth_date: z.date(),
    }))

    .mutation(async ({ ctx, input }) => {
      const session  = await getServerAuthSession();
      if (!session?.user.id){
        redirect('/')
      }
      await ctx.db.insert(userInfo).values({
        lastname: input.lastname,
        firstname: input.firstname,
        cin: input.cin,
        birth_Date: input.birth_date,
        userId: session.user.id,
      });
    }),
});
   