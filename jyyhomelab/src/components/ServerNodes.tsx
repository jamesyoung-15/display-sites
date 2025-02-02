import MainNode from "../assets/MainNode.jpg";
import NodeCluster from "../assets/NodeCluster.jpg";
import Server2 from "../assets/Server2.jpg";
import GPUNode from "../assets/GPU_Node.jpg";
import OtherDevices from "../assets/OtherDevices.jpg";

const ServerNodes = () => {
  // Server builds data
  const serverBuilds = [
    {
      id: 1,
      name: "Main Server",
      image: MainNode,
      description:
        "This server features a I3-12100 with 64 GB RAM and contains 4x12 TB drives running 2 pools of mirrored storage with ZFS. I use this for my personal services like Nextcloud.",
    },
    {
      id: 2,
      name: "Lab Cluster Server",
      image: NodeCluster,
      description:
        "This contains 3 mini-nodes J5005 processor and is used for development and testing. Will eventually use to learn Kubernetes and explore other clustering options.",
    },
    {
      id: 3,
      name: "Backup Server",
      image: Server2,
      description:
        "This server is used for backups for my important data, featuring 2x6 TB mirrored storage.",
    },
    {
        id: 4,
        name: "GPU Instance",
        image: GPUNode,
        description:
          "This server uses some of my old gaming PC hardware with a A2000 GPU. Used for machine learning and self-hosting LLM.",
      },
      {
        id: 5,
        name: "Other Devices",
        image: OtherDevices,
        description:
          "Homelab also includes other devices include a Raspberry Pi 5, Orange Pi 5, and an old laptop.",
      },
  ];

  return (
    <section className="py-16 border-b-1 border-gray-700 mx-auto" id="serverNodes">
      <div className="container max-w-[900px] mx-auto max-[640px]:px-3">
        <h2 className="text-3xl font-bold text-center mb-12">Server Nodes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serverBuilds.map((server) => (
            <div
              key={server.id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:scale-101"
            >
              <img
                src={server.image}
                alt={server.name}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{server.name}</h3>
              <p className="text-sm">{server.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServerNodes;
