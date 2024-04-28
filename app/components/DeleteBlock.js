"use client";
import { FaX } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ ticketId }) => {
  const router = useRouter();

  const deleteTicket = async () => {
    try {

      const res = await fetch(`http://localhost:3000/api/tickets/${ticketId}`,
      {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
        toast.success("Ticket deleted successfully.");
      }else{

        toast.error("Failed to delete the ticket.");

      }
    } catch (err) {
      toast.error("Ticket not found.");
    }
  };

  return (
    <FaX
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
