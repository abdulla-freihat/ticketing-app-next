import { model, models, Schema  , mongoose} from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const TicketSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Ticket title is required."],
    },

    description: {
      type: String,
    },
    category:{

    type:String    
          
    },
    status: {
      type: String,

     
    },
    priority: {
      type: Number,
    },

    progress: {
      type: Number,
    },
    active:{

         type:Boolean
    }
  },
  { timestamps: true }
);

const Ticket = models.Ticket || model("Ticket", TicketSchema);

export default Ticket;
