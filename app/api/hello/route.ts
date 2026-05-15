import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Vercel Serverless!",
    time: new Date().toISOString(),
    student: "Malik Shajar Hussain",
    enrollment: "01-131232-043",
  });
}