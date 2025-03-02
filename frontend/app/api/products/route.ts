import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // ✅ Uses absolute path


export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const product = await prisma.product.create({
      data: body,
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error adding product" }, { status: 500 });
  }
}
