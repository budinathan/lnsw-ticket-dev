// Type : API
//This file is used to get the report of a user.
//It checks if the user is logged in and if the user have a token.
//If the user is logged in and have a token it gets the report of the user from the database.

import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

interface DecodedToken {
  id: number;
}

export default async function handleForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token as string;

  switch (req.method) {
    case "GET":
      try {
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.TOKEN_SECRET as string,
            {},
            async (err, decodedToken) => {
              if (err) {
                res.status(400).json({ message: "Credential not found" });
              } else {
                const { id } = decodedToken as DecodedToken;
                const rows = await prisma.ticket.findMany({
                  where: { usersUserid: id },
                  orderBy: { tiketid: "desc" },
                });
                return res.status(200).json({ rows });
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
