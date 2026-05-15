import { NextResponse } from "next/server";

const data: Record<string, object> = {
  "001": { name: "Ali Ahmed", lab: 8 },
  "002": { name: "Sara Khan", lab: 8 },
  "043": { name: "Malik Shajar Hussain", lab: 8 },
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const student = data[id];

  if (!student) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(student);
}