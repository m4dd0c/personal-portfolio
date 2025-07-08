-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "subtitle" VARCHAR(255),
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);
