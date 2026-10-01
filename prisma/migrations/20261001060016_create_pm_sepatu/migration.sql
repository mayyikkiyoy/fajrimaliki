-- CreateTable
CREATE TABLE "pm_sepatu" (
    "no_urut" SERIAL NOT NULL,
    "nama_sepatu" TEXT NOT NULL,
    "jenis_sepatu" TEXT NOT NULL,

    CONSTRAINT "pm_sepatu_pkey" PRIMARY KEY ("no_urut")
);
