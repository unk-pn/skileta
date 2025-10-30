import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function GET() {
  try {
    const quotes = await db.user.findMany({
      where: {
        isApproved: true,
      },
      orderBy: {
        quoteTime: "desc",
      },
    });

    return NextResponse.json(quotes);
  } catch (error) {
    console.log("Error fetching quotes:", error);
    return NextResponse.json(
      { error: "Failed to fetch quotes" },
      { status: 500 }
    );
  }
}
