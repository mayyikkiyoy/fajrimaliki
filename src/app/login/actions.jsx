"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function loginAdmin(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (!user || user.password !== password) {
    return;
  }

  redirect("/admin");
}