import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "DELETE":
      const id = req.query.id as string;
      const token = req.cookies.token as string;
      try {
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.TOKEN_SECRET as string,
            {},
            async (err, token) => {
              if (err) {
                console.log(err);
              } else {
                const deleteTiket = await prisma.ticket.delete({
                  where: { tiketid: parseInt(id) },
                  select: { tiketid: true },
                });
                return res.status(200).json({ deleteTiket });
              }
            }
          );
        } else {
          console.log("no token");
        }
      } catch (err) {
        console.log(err);
      }
  }
}
