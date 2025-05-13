"use server";

import { addProduct, deleteProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { updateProduct } from "@/prisma-db";
import { revalidatePath } from "next/cache";

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

export async function editProduct(
  id: number,
  prevState: FormState,
  formData: FormData
) {
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

  await updateProduct(id, title, parseInt(price), description);
  redirect("/products-db");
}

export async function removeProduct(id: number) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
