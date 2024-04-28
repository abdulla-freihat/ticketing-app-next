

import TicketCard from "./components/TicketCard";


const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets");

    return res.json();
  } catch (err) {
    console.log('Failed to get tickets.' , err.message);
  }
};

const Dashboard = async () => {


  const {tickets} = await getTickets();


    const uniqueCategories = [

         ...new Set(tickets?.map(({category}) => category))
    ]


  return (
    <div className="p-5">
    <div>
    {tickets && uniqueCategories?.map((uniqueCategory , categoryIndex)=>(

        <div key={categoryIndex} className="mb-4">

        <h2 className="text-2xl font-bold">{uniqueCategory}</h2>


        <div className="grid lg:grid-cols-2  xl:grid-cols-4">
             {tickets.filter((ticket)=> ticket.category === uniqueCategory).map((filteredTicket , index)=>(

                   <TicketCard id={index} key={index} ticket ={filteredTicket} />
             ))}
        </div>

        </div>
         
    ))}
     
      </div>
    </div>
  );
};

export default Dashboard;
