import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const challenges = await prisma.challenges.findMany();
      res.status(200).json(challenges);
    } catch (error) {
      res.status(500).json({ error: "Unable to fetch data" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
