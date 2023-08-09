// Type : API
//This file is used to create a new report.
//It checks if the user is logged in and if the user have a token.
//If the user is logged in and have a token it creates a new report in the database.
//If the user is not logged in or don't have a token it sends an error message to the client.

import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";
import formidable from "formidable";
// import savePhoto from "@/hooks/save-file";

interface DecodedToken {
  id: number;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

type ParsedData =
  | {
      fields: formidable.Fields;
      files: formidable.Files;
    }
  | {
      err: any;
    };

const getFormData = async (req: NextApiRequest) => {
  const data: ParsedData = await new Promise((resolve, reject) => {
    const form = formidable();
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
  return data;
};

export default async function handleForm(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies.token as string;

  switch (req.method) {
    case "POST":
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
                const data = await getFormData(req);
                if ("err" in data) {
                  res.status(400).json({ message: "Error" });
                } else {
                  // const photo = await savePhoto(req);

                  const Laporan = await prisma.ticket.create({
                    data: {
                      jenis: data.fields.judulLaporan[0] as string,
                      pengaju: data.fields.name[0] as string,
                      email: data.fields.email[0] as string,
                      url: data.fields.url[0] as string,
                      keterangan: data.fields.deskripsiLaporan[0] as string,
                      tanggalpengajuan: formattedDate,
                      status: "Draft",
                      usersUserid: id,
                      filepengajuan: data.fields.pdf as string,
                    },
                  });
                  return res.status(200).json({ Laporan });
                }
              }
            }
          );
        } else {
          console.log("no token");
        }
      } catch (err) {
        console.log(err);
      }
      break;
  }
}
