import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { code } = req.query;
    if (!code) {
      return res.status(400).json({ error: "Code is required" });
    }

    try {
      const challenge = await prisma.challenges.findUnique({
        where: { code },
      });
      console.log("Challenge query executed");

      if (challenge) {
        console.log(`Challenge found: ${challenge.description}`);
        return res.status(200).json({ description: challenge.description });
      } else {
        console.log(`Challenge not found for code: ${code}`);
        return res.status(404).json({ error: "Challenge not found" });
      }
    } catch (error) {
      console.error("Error fetching challenge:", error);
      return res.status(500).json({ error: "Unable to fetch data" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
