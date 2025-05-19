import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // --- Seed Simple Independent Tables ---

  const genre1 = await prisma.genre.upsert({
    where: { name: "Science Fiction" },
    update: {},
    create: { name: "Science Fiction" },
  });
  const genre2 = await prisma.genre.upsert({
    where: { name: "Fantasy" },
    update: {},
    create: { name: "Fantasy" },
  });
  const genre3 = await prisma.genre.upsert({
    where: { name: "Mystery" },
    update: {},
    create: { name: "Mystery" },
  });
  const genre4 = await prisma.genre.upsert({
    where: { name: "Programming" },
    update: {},
    create: { name: "Programming" },
  });
  console.log("Seeded Genres:", { genre1, genre2, genre3, genre4 });

  const publisher1 = await prisma.publisher.upsert({
    where: { name: "Cosmic Reads" },
    update: {},
    create: { name: "Cosmic Reads" },
  });
  const publisher2 = await prisma.publisher.upsert({
    where: { name: "Tech Press" },
    update: {},
    create: { name: "Tech Press" },
  });
  console.log("Seeded Publishers:", { publisher1, publisher2 });

  const author1 = await prisma.author.upsert({
    where: { id: 1 }, // Using ID for upsert, ensure it's unique or use a compound unique key if available
    update: { first_name: "Jane", second_name: "Doe" },
    create: { id: 1, first_name: "Jane", second_name: "Doe" },
  });
  const author2 = await prisma.author.upsert({
    where: { id: 2 },
    update: { first_name: "John", second_name: "Smith" },
    create: { id: 2, first_name: "John", second_name: "Smith" },
  });
  const author3 = await prisma.author.upsert({
    where: { id: 3 },
    update: { company_name: "AI Writers Inc." },
    create: { id: 3, company_name: "AI Writers Inc." },
  });
  console.log("Seeded Authors:", { author1, author2, author3 });

  const shipper1 = await prisma.shipper.upsert({
    where: { id: 1 },
    update: { name: "SpeedyShip", phone_number: "123456789" },
    create: { id: 1, name: "SpeedyShip", phone_number: "123456789" },
  });
  const shipper2 = await prisma.shipper.upsert({
    where: { id: 2 },
    update: { name: "ReliableCouriers", phone_number: "987654321" },
    create: { id: 2, name: "ReliableCouriers", phone_number: "987654321" },
  });
  console.log("Seeded Shippers:", { shipper1, shipper2 });

  const discount1 = await prisma.discount.upsert({
    where: { id: 1 },
    update: { name: "Spring Sale", value: new Prisma.Decimal(0.1) }, // 10%
    create: { id: 1, name: "Spring Sale", value: new Prisma.Decimal(0.1) },
  });
  const discount2 = await prisma.discount.upsert({
    where: { id: 2 },
    update: { name: "Loyalty Discount", value: new Prisma.Decimal(0.05) }, // 5%
    create: {
      id: 2,
      name: "Loyalty Discount",
      value: new Prisma.Decimal(0.05),
    },
  });
  console.log("Seeded Discounts:", { discount1, discount2 });

  // --- Seed Tables with Dependencies (e.g., Books) ---

  const book1 = await prisma.book.upsert({
    where: { isbn: "978-0000000001" },
    update: {},
    create: {
      isbn: "978-0000000001",
      title: "The Galactic Observer",
      publication_date: new Date("2022-05-15"),
      edition: 1,
      available_quantity: 50,
      price: new Prisma.Decimal(29.99),
      author_id: author1.id,
      publisher_id: publisher1.id,
    },
  });
  const book2 = await prisma.book.upsert({
    where: { isbn: "978-0000000002" },
    update: {},
    create: {
      isbn: "978-0000000002",
      title: "Code Alchemist",
      publication_date: new Date("2023-01-20"),
      edition: 2,
      available_quantity: 100,
      price: new Prisma.Decimal(45.5),
      author_id: author2.id,
      publisher_id: publisher2.id,
    },
  });
  const book3 = await prisma.book.upsert({
    where: { isbn: "978-0000000003" },
    update: {},
    create: {
      isbn: "978-0000000003",
      title: "AI: The Next Frontier",
      publication_date: new Date("2023-07-10"),
      edition: 1,
      available_quantity: 75,
      price: new Prisma.Decimal(39.99),
      author_id: author3.id,
      publisher_id: publisher2.id,
    },
  });
  console.log("Seeded Books:", { book1, book2, book3 });

  // --- Seed Join Tables (Many-to-Many) ---

  // Book 1: Sci-Fi, Fantasy
  await prisma.bookGenre.upsert({
    where: { book_id_genre_id: { book_id: book1.isbn, genre_id: genre1.id } },
    update: {},
    create: { book_id: book1.isbn, genre_id: genre1.id },
  });
  await prisma.bookGenre.upsert({
    where: { book_id_genre_id: { book_id: book1.isbn, genre_id: genre2.id } },
    update: {},
    create: { book_id: book1.isbn, genre_id: genre2.id },
  });
  // Book 2: Programming
  await prisma.bookGenre.upsert({
    where: { book_id_genre_id: { book_id: book2.isbn, genre_id: genre4.id } },
    update: {},
    create: { book_id: book2.isbn, genre_id: genre4.id },
  });
  // Book 3: Programming, Sci-Fi
  await prisma.bookGenre.upsert({
    where: { book_id_genre_id: { book_id: book3.isbn, genre_id: genre4.id } },
    update: {},
    create: { book_id: book3.isbn, genre_id: genre4.id },
  });
  await prisma.bookGenre.upsert({
    where: { book_id_genre_id: { book_id: book3.isbn, genre_id: genre1.id } },
    update: {},
    create: { book_id: book3.isbn, genre_id: genre1.id },
  });
  console.log("Seeded BookGenres");

  // Book 2 has a discount
  await prisma.bookDiscount.upsert({
    where: {
      book_id_discount_id: { book_id: book2.isbn, discount_id: discount1.id },
    },
    update: {},
    create: { book_id: book2.isbn, discount_id: discount1.id },
  });
  console.log("Seeded BookDiscounts");

  // --- Seed Customers ---
  const customer1 = await prisma.customer.upsert({
    where: { login: "alice_c" },
    update: {},
    create: {
      login: "alice_c",
      first_name: "Alice",
      last_name: "Wonder",
      passwordHash: "hashed_password123", // In a real app, use a proper hashing library
      postal_code: "12-345",
      street: "Rabbit Hole Ln",
      building_no: "1A",
      city: "Storyville",
      phone_number: "111222333",
    },
  });
  const customer2 = await prisma.customer.upsert({
    where: { login: "bob_b" },
    update: {},
    create: {
      login: "bob_b",
      first_name: "Bob",
      last_name: "Builder",
      passwordHash: "hashed_password456",
      postal_code: "67-890",
      street: "Toolbox Ave",
      building_no: "20",
      city: "Constructicon",
      nip: "1234567890", // Example NIP
    },
  });
  console.log("Seeded Customers:", { customer1, customer2 });

  // Customer 1 has a loyalty discount
  await prisma.customerDiscount.upsert({
    where: {
      customer_id_discount_id: {
        customer_id: customer1.id,
        discount_id: discount2.id,
      },
    },
    update: {},
    create: { customer_id: customer1.id, discount_id: discount2.id },
  });
  console.log("Seeded CustomerDiscounts");

  // --- Seed Orders ---
  const order1 = await prisma.order.create({
    // Using create as orders are usually unique events
    data: {
      customer_id: customer1.id,
      shipper_id: shipper1.id,
      discount_id: discount2.id, // Alice gets her loyalty discount
      date: new Date("2023-10-01T10:00:00Z"),
      state: "PAID",
      orders_details: {
        create: [
          { book_id: book1.isbn, amount: 1 },
          { book_id: book2.isbn, amount: 1 },
        ],
      },
    },
  });
  const order2 = await prisma.order.create({
    data: {
      customer_id: customer2.id,
      shipper_id: shipper2.id,
      date: new Date("2023-10-05T14:30:00Z"),
      state: "SENT",
      orders_details: {
        create: [{ book_id: book3.isbn, amount: 2 }],
      },
    },
  });
  console.log("Seeded Orders:", { order1, order2 });
  // Note: OrderDetails are created inline with Orders using nested writes.

  // --- Seed Reviews ---
  // Alice reviews Book 1
  await prisma.review.create({
    // Using create as reviews are usually unique per user/book
    data: {
      book_id: book1.isbn,
      customer_id: customer1.id,
      review: 8, // Rating out of 10
      date: new Date("2023-10-03T12:00:00Z"),
    },
  });
  // Bob reviews Book 3
  await prisma.review.create({
    data: {
      book_id: book3.isbn,
      customer_id: customer2.id,
      review: 9,
      date: new Date("2023-10-07T18:00:00Z"),
    },
  });
  console.log("Seeded Reviews");

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error("Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
