'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import {  toast } from 'react-toastify';


const TicketForm = ({ticket}) => {


    const EDITMODE = ticket._id !== 'new';
    const router = useRouter();

    let initialFormData = {
        title: '',
        description: '',
        category: 'Hardware Problem',
        priority: 1,
        progress: 0,
        status: "Not Started",
    };

    if (EDITMODE) {
        initialFormData = {
            title: ticket.title,
            description: ticket.description,
            category: ticket.category,
            priority: ticket.priority,
            progress: ticket.progress,
            status: ticket.status,
        };
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

         if(EDITMODE){


            try {
                const res = await fetch(`/api/tickets/${ticket._id}`, {
                    method: 'PUT',
                    body: JSON.stringify({ formData }),
                    headers: { 'content-type': 'application/json' }
                });
    
                if (!res.ok) {
                    toast.error('Failed to update Ticket, try again.');
                }

              
            } catch (err) {
                toast.error('Failed to update Ticket, try again.');
            }


             
         }else{


            try {
                const res = await fetch('/api/tickets', {
                    method: 'POST',
                    body: JSON.stringify({ formData }),
                    headers: { 'content-type': 'application/json' }
                });
    
                if (!res.ok) {
                    toast.error('Failed to create Ticket, try again.');
                }
    
                
            } catch (err) {
                toast.error('Failed to create Ticket, try again.');
            }

             
         }




         toast.success(EDITMODE ? 'Ticket Updated Successfully' : 'Ticket Created Successfully');
         router.refresh();
         router.push('/');
       
    };




  return (
    <div className=" max-w-3xl mx-auto p-5">
    <form className="flex flex-col gap-6" method='post' onSubmit={handleSubmit}>
         <h3 className="text-xl font-bold"> {EDITMODE ? 'Update Your Ticket' : 'Create Your Ticket'}</h3>

           <div className="flex flex-col gap-3">
              <label htmlFor="title">Title</label>
              <input type='text' id='title' name='title' className="outline-none p-1 bg-[#475667] rounded-md"  required  value={formData.title} onChange={handleChange} />
           </div>

           <div className="flex flex-col gap-3">
              <label htmlFor="description">Description</label>
              <textarea className=" p-1 bg-[#475667] rounded-md resize-none" rows='5' id='description'  name='description'  required value={formData.description}  onChange={handleChange}> </textarea>
           </div>

           <div className="flex flex-col gap-3">
              <label htmlFor="category">Category</label>
              <select type='text' name='category' className="outline-none p-1 bg-[#475667] rounded-md" value={formData.category} onChange={handleChange} >

                     <option value='Hardware Problem'>Hardware Problem</option>
                     <option value='Software Problem'>Software Problem</option>

                     <option value='Project'>Project</option>

              </select>
           </div>


           <div className="flex flex-col gap-3">
              <label htmlFor="category">Priority</label>
              <div className="flex  gap-2">
                 <div className="flex items-center gap-1">
                     <input id='priority-1' name='priority' type='radio'  value={1} onChange={handleChange} checked={formData.priority ==1 }/>
                     <span>1</span>
                 </div>

                 <div className="flex items-center gap-1">
                     <input id='priority-2' name='priority' type='radio' value={2} onChange={handleChange} checked={formData.priority ==2 } />
                     <span>2</span>
                 </div>


                 <div className="flex items-center gap-1">
                     <input id='priority-3' name='priority' type='radio' value={3} onChange={handleChange} checked={formData.priority ==3 } />
                     <span>3</span>
                 </div>

                 <div className="flex items-center gap-1">
                     <input id='priority-4' name='priority' type='radio' value={4} onChange={handleChange} checked={formData.priority ==4 } />
                     <span>4</span>
                 </div>


                 <div className="flex items-center gap-1">
                     <input id='priority-5' name='priority' type='radio' value={5} onChange={handleChange}  checked={formData.priority ==5 }/>
                     <span>5</span>
                 </div>
                 </div>
           </div>



           <div className="flex flex-col  gap-3">
                <label htmlFor="progress">progress</label>
           <input type='range' id='progress' name='progress' value={formData.progress} min='0' max='100' onChange={handleChange} />
           </div>


           <div className="flex flex-col gap-3">
              <label htmlFor="status">Status</label>
              <select type='text' name='status' className="outline-none p-1 bg-[#475667] rounded-md" value={formData.status} onChange={handleChange} >

                     
                     <option value='Started'>Started</option>
                     <option value='Not Started'>Not Started</option>
                     <option value='Done'>Done</option>


              </select>
           </div>


           <button type='submit' className="bg-blue-accent hover:bg-blue-accent-hover rounded-md p-2">{EDITMODE ? 'Update Ticket' : 'Create Ticket'}</button>

    </form>

    </div>
  )
}

export default TicketForm