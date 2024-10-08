import { NextRequest, NextResponse } from "next/server";
import getSession from "@/libs/session";
import db from "@/libs/db";

export async function GET(request: NextRequest) {
  const session = await getSession();

  try {
    const user = await db.user.findUnique({
      where: {
        id: session.id,
      },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
