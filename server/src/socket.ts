import { nanoid } from "nanoid";
import { Server, Socket } from "socket.io";
import logger from "./utils/logger";

const EVENTS = {
  connection: "connection",
  CLIENT: {
    CREATE_ROOM: "CREATE_ROOM",
    SEND_ROOM_MESSAGE: "SEND_ROOM_MESSAGE",
  },
  SERVER: {
    ROOM_MESSAGE: "ROOM_MESSAGE",
  },
};

const rooms: Array<string> = [];
//здесь хранятся все чаты с админом

function socket({ io }: { io: Server }) {
  logger.info(`Sockets enabled`);

  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User connected ${socket.id}`);
    
    
    // when user sends message to admin, 
    // it's created a new room 
    socket.on(EVENTS.CLIENT.CREATE_ROOM, ({ userId }) => {
      // add a new room to the rooms 
      if(!rooms.includes(userId)){
        rooms.push(userId)
      }
      // add socket to room id(userId)
      socket.join(userId);
     
    });

   

    socket.on(
      EVENTS.CLIENT.SEND_ROOM_MESSAGE,
      ({ userId, msg }) => {
        const date = new Date();
        socket.to(userId).emit(EVENTS.SERVER.ROOM_MESSAGE, {
          msg,
          date: date.getTime(),
          id: nanoid(),
          author: userId
        });
      }
    );
  });
}

export default socket;
