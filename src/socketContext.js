import { useEffect, useState, createContext } from "react";

const port = 3001;
const ws = new WebSocket(`ws://localhost:${port}`);

export const SocketContext = createContext(ws);

export const SocketProvides = (props) => {
    <SocketContext.Provider value={ws}>
        {props.children}
    </SocketContext.Provider>
}