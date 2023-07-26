import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export default async function handleDelete(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
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
                res.status(400).json("Internal server error, token invalid");
              } else {
                const rows = await prisma.ticket.findFirst({
                  where: { tiketid: parseInt(id) },
                });
                res.status(200).json({ rows });
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
