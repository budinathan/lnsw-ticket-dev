//Type : API
//This file is used to login a user.
//It checks if the username exists and if the password is correct.
//If the user is found and the password is correct it creates a JWT token and sends it to the client.
//The client then stores the token in a cookie and uses it to authenticate the user.
//If the user is not found or the password is incorrect it sends an error message to the client.
//The client then displays the error message to the user.
//The client also uses the token to get the username and id of the user.
//This is used to display the username of the user on the client.

import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

export default async function handleRegister(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username, password } = req.body;
  if (typeof username !== "string" || typeof password !== "string") {
    return res
      .status(406)
      .json({ message: "Username or password is not a string" });
  }
  switch (req.method) {
    case "POST":
      try {
        const findUser = await prisma.users.findFirst({
          where: { username: username },
        });
        if (findUser) {
          const checkPass = await bcrypt.compare(password, findUser.password);
          if (checkPass) {
            try {
              const token = await new Promise((resolve, reject) => {
                jwt.sign(
                  { username, id: findUser.userid },
                  process.env.TOKEN_SECRET as string,
                  {},
                  (err, token) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(token);
                  }
                );
              });
              const serializedData = serialize("token", JSON.stringify(token), {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict",
              });
              res.setHeader("Set-Cookie", serializedData);
              res.status(200).json({ token });
            } catch (err) {
              console.log(err);
            }
          } else {
            res.status(401).json({ message: "Password is incorrect" });
          }
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (err) {
        console.log(err);
      }
      break;
    case "GET":
      try {
        const token = req.cookies.token as string;
        if (token) {
          jwt.verify(
            token.substring(1, token.length - 1),
            process.env.TOKEN_SECRET as string,
            {},
            (err, token) => {
              if (err) {
                res.status(400).json({ message: "Credential not found" });
              } else {
                res.json(token);
              }
            }
          );
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } catch (err) {
        console.log(err);
      }
  }
}
