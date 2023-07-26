-- CreateTable
CREATE TABLE "users" (
    "userid" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userid")
);

-- CreateTable
CREATE TABLE "ticket" (
    "tiketid" SERIAL NOT NULL,
    "jenis" VARCHAR(255) NOT NULL,
    "keterangan" VARCHAR(255) NOT NULL,
    "tanggalpengajuan" VARCHAR(225) NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "pengaju" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255),
    "filepengajuan" VARCHAR(255),
    "usersUserid" INTEGER NOT NULL,

    CONSTRAINT "ticket_pkey" PRIMARY KEY ("tiketid")
);

-- AddForeignKey
ALTER TABLE "ticket" ADD CONSTRAINT "ticket_usersUserid_fkey" FOREIGN KEY ("usersUserid") REFERENCES "users"("userid") ON DELETE RESTRICT ON UPDATE CASCADE;
