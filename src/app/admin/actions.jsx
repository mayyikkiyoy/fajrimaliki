"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function tambahSepatu(formData) {
  const nama_sepatu = formData.get("nama_sepatu");
  const jenis_sepatu = formData.get("jenis_sepatu");

  await prisma.pm_sepatu.create({
    data: {
      nama_sepatu,
      jenis_sepatu,
    },
  });

  revalidatePath("/admin");
}

export async function editSepatu(formData) {
  const no_urut = Number(formData.get("no_urut"));
  const nama_sepatu = formData.get("nama_sepatu");
  const jenis_sepatu = formData.get("jenis_sepatu");

  await prisma.pm_sepatu.update({
    where: {
      no_urut: no_urut,
    },
    data: {
      nama_sepatu,
      jenis_sepatu,
    },
  });

  revalidatePath("/admin");
  redirect("/admin");
}

export async function hapusSepatu(formData) {
  const no_urut = Number(formData.get("no_urut"));

  await prisma.pm_sepatu.delete({
    where: {
      no_urut: no_urut,
    },
  });

  revalidatePath("/admin");
}