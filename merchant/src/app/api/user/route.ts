import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../lib/authOptions";

export async function GET(req: NextRequest, res: NextResponse) {
  const session = await getServerSession(authOptions);
  console.log("Server Session:", session);

  if (session) {
    return NextResponse.json({ msg: "Session present", session });
  } else {
    return NextResponse.json({ msg: "Session not present" });
  }
}
