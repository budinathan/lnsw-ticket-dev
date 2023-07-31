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
  const { name, email, judulLaporan, deskripsiLaporan, url } = req.body;

  switch (req.method) {
    case "POST":
      if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        typeof judulLaporan !== "string" ||
        typeof deskripsiLaporan !== "string" ||
        typeof url !== "string"
      ) {
        return res.status(406).json({ message: "Type is not a string" });
      }
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
                const date = new Date();
                const options: Intl.DateTimeFormatOptions = {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                };
                const formattedDate = date.toLocaleDateString("id-ID", options);
                const Laporan = await prisma.ticket.create({
                  data: {
                    jenis: judulLaporan,
                    pengaju: name,
                    email: email,
                    url: url,
                    keterangan: deskripsiLaporan,
                    tanggalpengajuan: formattedDate,
                    status: "Draft",
                    usersUserid: id,
                  },
                });
                return res.status(200).json({ Laporan });
              }
            }
          );
        } else {
          console.log("no token");
        }
      } catch (err) {
        console.log(err);
      }
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
