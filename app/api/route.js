import Ticket from "../models/Ticket";
import { NextResponse } from "next/server";


// create ticket api route

export const POST = async (req, res, next) => {
  try {
    const body = await req.json();

    const ticketData = body.formData;

    const newTicket = await Ticket.create(ticketData);

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};
