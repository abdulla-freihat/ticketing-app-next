import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";




// DELETE ticket api route

export const DELETE = async (req , {params}) => {
    try {

         const {id} = params;

          const ticket = await Ticket.findById(id);

            if(!ticket){

                return NextResponse.json({ message: "Ticket not found"}, { status: 404 });
 
            }


             await Ticket.deleteOne({ _id: ticket._id })

    
      return NextResponse.json({ message: "Ticket deleted" }, { status: 201 });
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  };
  