import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";







// GET ticket api route
export const GET = async (req, { params }) => {
    try {
      const { id } = params;
  
      const ticket = await Ticket.findOne({ _id: id });
  
      if (!ticket) {
        return NextResponse.json(
          { message: "Ticket not found" },
          { status: 404 }
        );
      }
  
  
      
  
      return NextResponse.json({ticket}, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };





// DELETE ticket api route
export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return NextResponse.json(
        { message: "Ticket not found" },
        { status: 404 }
      );
    }

    await Ticket.deleteOne({ _id: ticket._id });

    return NextResponse.json({ message: "Ticket deleted" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
};





// Update PUT ticket api route
export const PUT = async (req, { params }) => {
    try {
      const { id } = params;

      const body = await req.json();

       const ticktData = body.formData;
  
      const ticket = await Ticket.findById(id);
  
      if (!ticket) {
        return NextResponse.json(
          { message: "Ticket not found" },
          { status: 404 }
        );
      }
  
      await Ticket.updateOne({ _id: ticket._id } , {

            ...ticktData
      });
  
      return NextResponse.json({ message: "Ticket Updated." }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };