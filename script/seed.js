const { db } = require("@vercel/postgres");
const fs = require("fs");

async function seedEmails(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "emails" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS emails (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        email TEXT NOT NULL UNIQUE
      );
    `;

    console.log(`Created "emails" table`);

    // Insert data into the "emails" table
    const insertEmail = await client.sql`
      INSERT INTO emails (email)
      VALUES ('btk.kzc@gmail.com')
      ON CONFLICT (id) DO NOTHING;
    `;

    console.log(`Seeded 1 email`);

    return {
      createTable,
      emails: insertEmail,
    };
  } catch (error) {
    console.error("Error seeding emails:", error);
    throw error;
  }
}

async function seedCVPdf(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createFileTable = await client.sql`
      CREATE TABLE IF NOT EXISTS pdf_table (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        pdf_name TEXT NOT NULL UNIQUE,
        pdf_file BYTEA 
      );
    `;

    console.log(`Created "file" table`);
    const pdfData = fs.readFileSync(
      "public/assets/Lebenslauf-BedirhanKuzucu.pdf"
    );

    if (!pdfData) {
      throw new Error("file can not be readed");
    }

    const insertPDF = await client.sql`
      INSERT INTO pdf_table (pdf_name, pdf_file)
      VALUES ( 'firstCV' ,${pdfData});
    `;

    console.log(`Seeded 1 file`);

    return {
      createFileTable,
      pdfData: insertPDF,
    };
  } catch (error) {
    console.error("Error seeding emails:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedCVPdf(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
