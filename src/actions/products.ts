"use server";

import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
  values?: {
    title?: string;
    price?: string;
    description?: string;
  };
};

export async function createProduct(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Укажите название";
  }

  if (!price) {
    errors.price = "Укажите цену";
  }

  if (!description) {
    errors.description = "Укажите описание";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      values: {
        title,
        price,
        description,
      },
    };
  }

  await addProduct(title, parseInt(price), description);
  redirect("/products-db");
}
