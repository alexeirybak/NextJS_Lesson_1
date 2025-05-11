import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Заполнение БД тестовыми данными
const seedProducts = async () => {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Продукт 1", price: 1000, description: "Описание 1" },
        { title: "Продукт 2", price: 2000, description: "Описание 2" },
        { title: "Продукт 3", price: 3000, description: "Описание 3" },
      ],
    });
  }
};
seedProducts();

// CRUD-операции
export async function getProducts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function addProduct(
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.create({
    data: { title, price, description },
  });
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.update({
    where: { id },
    data: { title, price, description },
  });
}

export async function deleteProduct(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.product.delete({
    where: { id },
  });
}
