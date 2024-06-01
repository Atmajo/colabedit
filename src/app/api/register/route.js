import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {v4} from "uuid";

export async function POST(request) {
  const body = await request.json();
  const email = body.email;
  const id = v4();
  
  let password;
  try {
    password = await bcrypt.hash(body.password, 10);
  } catch (error) {
    return NextResponse.json(
      { error: "Error hashing password" },
      { status: 500 }
    );
  }
  
  try {
    if (!email || !password)
      throw new Error("Name, email and password are required");
    await sql`INSERT INTO users (id, email, password) VALUES (${id}, ${email}, ${password});`;
    return NextResponse.json({ body }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
