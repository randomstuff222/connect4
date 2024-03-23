import { SocketContext } from "../socketContext";
import { useContext } from "react";

export const useSocket = () => {
    const socket = useContext(SocketContext);

    return socket;
}