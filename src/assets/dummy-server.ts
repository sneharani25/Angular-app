export interface Server{
    serverId : number;
    serverName: string;
} 

export const servers: Server[] = [
    {
        serverId : 1,
        serverName : "Server1"
    },

    {
        serverId : 2,
        serverName : "Server2"
    },

    {
        serverId : 3,
        serverName : "Server3"
    }
]