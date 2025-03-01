import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create a User
  const user = await prisma.user.create({
    data: {
      name: "Admin User",
      email: "admin@example.com",
      password: "hashedpassword", // Hash before using
    },
  });

  // Create a Product
  const product = await prisma.product.create({
    data: {
      name: "Sample Product",
      category: "Electronics",
      description: "A high-quality electronic product",
      imageUrl: "http://example.com/image.jpg",
      price: 199.99,
    },
  });

  // Create an Order linked to the User and Product
  await prisma.order.create({
    data: {
      status: "placed",
      customerId: user.id,  // Link to User
      productId: product.id, // Link to Product
    },
  });

  console.log("✅ Seeding completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
