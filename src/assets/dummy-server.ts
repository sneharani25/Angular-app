export interface Server{
    serverId : number;
    serverName: string;
    serverImageUrl: string;
} 

export const servers: Server[] = [
    {
        serverId : 1,
        serverName : "Server1",
        serverImageUrl : '../../../assets/server image.jpg'
    },

    {
        serverId : 2,
        serverName : "Server2",
        serverImageUrl : '../../../assets/server image.jpg'
    },

    {
        serverId : 3,
        serverName : "Server3",
        serverImageUrl : '../../../assets/server image.jpg'
    }
]