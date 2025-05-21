import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const ticketCaed = ({ ticket }) => {
  return (
    <div className="flex flex-col rounded-md shadow-lg p-3 m-2  bg-[#303c4d]  ">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className=" ml-auto">
          <DeleteBlock id={ticket._id} />
        </div>
      </div>

      <h4>{ticket.title}</h4>
      <br className="h-px border-0 mb-2" />
      <p className="whitespace-pre-wrap"> {ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1"> {ticket.createdAt}</p>
          <ProgressDisplay progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default ticketCaed;
