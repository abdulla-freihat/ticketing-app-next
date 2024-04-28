import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";


const TicketCard = ({ticket}) => {
  return (
    <div className="flex flex-col  bg-card hover:bg-card-hover  rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
         <div className="ml-auto ">
        <DeleteBlock ticketId={ticket._id} />
        </div>
      </div>
      <h4 className="font-bold text-xl">{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2 "></hr>
      <p className="whitespace-pre-wrap text-sm"> {ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2 ">
      <div className="flex flex-col">
      <p className="text-xs my-1">{ticket.createdAt.slice(0,10)}</p>
      <ProgressDisplay progress={ticket.progress} />
      </div>

      <div className="ml-auto flex items-end">
      <StatusDisplay status={ticket.status} />
      </div>
      </div>
    </div>
  );
};

export default TicketCard;
