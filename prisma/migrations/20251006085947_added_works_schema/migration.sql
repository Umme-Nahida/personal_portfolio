-- CreateTable
CREATE TABLE "public"."Works" (
    "id" SERIAL NOT NULL,
    "slides" JSONB NOT NULL,

    CONSTRAINT "Works_pkey" PRIMARY KEY ("id")
);
