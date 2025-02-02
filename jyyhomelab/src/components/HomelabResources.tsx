const HomelabResources = () => {
    const youtubeChannels = [
        {
            name: "Apalrd's Adventures",
            url: "https://www.youtube.com/channel/UC4QZ_LsYcvcq7qOsOhpAX4A",
            description: "Lots of helpful videos related to Proxmox",
        },
        {
            name: "MRP",
            url: "https://www.youtube.com/@MRPtech",
            description: "Lots of helpful videos related to Proxmox",
        },
        {
            name: "Christian Lempa",
            url: "https://www.youtube.com/@christianlempa/videos",
            description: "Uses wide range of technologies in his homelab",
        },
        {
            name: "Lawrence Systems",
            url: "https://www.youtube.com/@LawrenceSystems",
            description: "Lots of helpful videos related setting up networking and OPNSense",
        }
    ]

    const forums = [
        {
            name: "r/homelab",
            url: "https://www.reddit.com/r/homelab/",
            description: "Homelab subreddit, great starting point",
            image: "https://static-00.iconduck.com/assets.00/reddit-icon-2048x2048-ya82zt8l.png"
        },
        {
            name: "r/homeserver",
            url: "https://www.reddit.com/r/homeserver/",
            description: "HomeServer subreddit more focused on hardware for server",
            image: "https://static-00.iconduck.com/assets.00/reddit-icon-2048x2048-ya82zt8l.png"
        },
        {
            name: "selfhosted@lemmy.world",
            url: "https://lemmy.world/c/selfhosted",
            description: "Lemmy forum for discussing self-hosted services",
            image: "https://git.join-lemmy.org/avatars/c62fdf1fd62f5ef73499a01b8c0d7073"
        },
        {
            name: "homelab@lemmy.world",
            url: "https://lemmy.ml/c/homelab",
            description: "Lemmy forum for discussing homelab setups",
            image: "https://git.join-lemmy.org/avatars/c62fdf1fd62f5ef73499a01b8c0d7073"
        }
    ]

    return (
        <section className="container py-4 text-center mx-auto mb-4 max-w-[900px] max-[640px]:px-3" id="homelabresources">
            <h2 className="text-4xl font-bold mb-4">Resources I Used</h2>
            <p>Prior to homelab, I already had Linux experience since I daily-drive Linux. Most of the time I use documentation and Google to solve issues.</p>
            <p>Below are some Youtube channels and communities I follow that got me started and helped me along this journey.</p>
            <h4 className="text-lg mt-3 font-bold mb-4">Youtube Channels</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-1">
                {youtubeChannels.map((channel, id) => (
                    <div key={id} className="flex flex-col gap-3 bg-gray-700 rounded-lg shadow-md py-6 px-4 hover:scale-101">
                        <a href={channel.url} target="_blank">
                            <h3 className="font-bold mb-4">{channel.name}</h3>
                            <img src="/youtube-logo.png" alt=""  className="mx-auto my-4"/>
                            <p>{channel.description}</p>
                        </a>
                    </div>
                ))}
            </div>
            <h4 className="text-lg mt-3 font-bold mb-4">Forums</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mx-1">
                {forums.map((forum, id) => (
                    <div key={id} className="flex flex-col gap-3 bg-gray-700 rounded-lg shadow-md py-6 px-4 hover:scale-101">
                        <a href={forum.url} target="_blank">
                            <h3 className="font-bold mb-4 text-sm truncate">{forum.name}</h3>
                            <img src={forum.image} alt="" className="mx-auto my-4 w-32 h-32 bg-white" />
                            <p>{forum.description}</p>
                        </a>
                    </div>
                ))}
            </div>
            
        </section>
    )

}

export default HomelabResources;