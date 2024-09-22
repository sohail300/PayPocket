-- CreateTable
CREATE TABLE "RecentContacts" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "contactId" UUID NOT NULL,
    "lastContactedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecentContacts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "RecentContacts_userId_lastContactedAt_idx" ON "RecentContacts"("userId", "lastContactedAt");

-- CreateIndex
CREATE UNIQUE INDEX "RecentContacts_userId_contactId_key" ON "RecentContacts"("userId", "contactId");

-- AddForeignKey
ALTER TABLE "RecentContacts" ADD CONSTRAINT "RecentContacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecentContacts" ADD CONSTRAINT "RecentContacts_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
