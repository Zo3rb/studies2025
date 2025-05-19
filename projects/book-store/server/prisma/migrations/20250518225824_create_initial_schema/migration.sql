/*
  Warnings:

  - The primary key for the `books` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `publishedAt` on the `books` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `books` table. All the data in the column will be lost.
  - You are about to alter the column `title` on the `books` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Added the required column `publisher` to the `books` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `author` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "books_isbn_key";

-- AlterTable
ALTER TABLE "books" DROP CONSTRAINT "books_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "id",
DROP COLUMN "publishedAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "available_quantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "edition" INTEGER,
ADD COLUMN     "price" DECIMAL(6,2),
ADD COLUMN     "publication_date" DATE,
ADD COLUMN     "publisher" INTEGER NOT NULL,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(100),
DROP COLUMN "author",
ADD COLUMN     "author" INTEGER NOT NULL,
ALTER COLUMN "isbn" SET DATA TYPE VARCHAR,
ADD CONSTRAINT "books_pkey" PRIMARY KEY ("isbn");

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(100),
    "second_name" VARCHAR(100),
    "company_name" VARCHAR(100),

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publishers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "publishers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books_genres" (
    "book_id" VARCHAR NOT NULL,
    "genre_id" INTEGER NOT NULL,

    CONSTRAINT "books_genres_pkey" PRIMARY KEY ("book_id","genre_id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(100) NOT NULL,
    "last_name" VARCHAR(100) NOT NULL,
    "login" VARCHAR(100) NOT NULL,
    "passwordHash" VARCHAR(100),
    "postal_code" VARCHAR(6) NOT NULL,
    "street" VARCHAR(100) NOT NULL,
    "building_no" VARCHAR(5) NOT NULL,
    "flat_no" VARCHAR(5),
    "city" VARCHAR(100) NOT NULL,
    "nip" VARCHAR(10),
    "phone_number" VARCHAR(9),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shippers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "phone_number" VARCHAR(9),

    CONSTRAINT "shippers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discounts" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100),
    "value" DECIMAL(2,2) DEFAULT 0,

    CONSTRAINT "discounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers_discounts" (
    "customer_id" INTEGER NOT NULL,
    "discount_id" INTEGER NOT NULL,

    CONSTRAINT "customers_discounts_pkey" PRIMARY KEY ("customer_id","discount_id")
);

-- CreateTable
CREATE TABLE "books_discounts" (
    "book_id" VARCHAR NOT NULL,
    "discount_id" INTEGER NOT NULL,

    CONSTRAINT "books_discounts_pkey" PRIMARY KEY ("book_id","discount_id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "date" DATE DEFAULT CURRENT_TIMESTAMP,
    "discount_id" INTEGER,
    "shipper" INTEGER NOT NULL,
    "state" TEXT DEFAULT 'AWAITING',

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders_details" (
    "book_id" VARCHAR NOT NULL,
    "order_id" INTEGER NOT NULL,
    "amount" INTEGER,

    CONSTRAINT "orders_details_pkey" PRIMARY KEY ("book_id","order_id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" SERIAL NOT NULL,
    "book_id" VARCHAR NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "review" INTEGER,
    "date" DATE DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "authors_ind_1" ON "authors"("first_name", "second_name");

-- CreateIndex
CREATE INDEX "authors_ind_2" ON "authors"("company_name");

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "publishers_name_key" ON "publishers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "customers_login_key" ON "customers"("login");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_author_fkey" FOREIGN KEY ("author") REFERENCES "authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_publisher_fkey" FOREIGN KEY ("publisher") REFERENCES "publishers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_genres" ADD CONSTRAINT "books_genres_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_genres" ADD CONSTRAINT "books_genres_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_discounts" ADD CONSTRAINT "customers_discounts_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers_discounts" ADD CONSTRAINT "customers_discounts_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_discounts" ADD CONSTRAINT "books_discounts_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books_discounts" ADD CONSTRAINT "books_discounts_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_shipper_fkey" FOREIGN KEY ("shipper") REFERENCES "shippers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_details" ADD CONSTRAINT "orders_details_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders_details" ADD CONSTRAINT "orders_details_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "books"("isbn") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
