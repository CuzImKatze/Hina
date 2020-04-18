const config = {
    activities: [
        "Weathering With You",
        "over $guilds Guilds!",
        "over $users Users!",
    ],
    activityType: "WATCHING",
    prefix: "hd+",
    status: "Online",
};

interface IConfig {
    activities: string[];
    activityType: string;
    prefix: string;
    status: string;
}

export { config, IConfig };
