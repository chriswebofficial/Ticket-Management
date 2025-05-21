import { dbConnect } from "../../../lib/db";
import Ticket from "../../(Models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json(); // body = formData directly
    await Ticket.create(body); // no need to access body.formData
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await dbConnect(); // Make sure you connect to DB

    const tickets = await Ticket.find(); // Use plural name and await

    return NextResponse.json({ tickets }, { status: 200 }); // Return successfully fetched data
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}
