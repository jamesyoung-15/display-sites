const LabSetup = () => {
  return (
    <section className="py-4 mx-auto border-b-1 border-gray-700">
      <div className="max-w-[900px] container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 items-center">
        {/* Description */}
        <div className="mx-5">
          <h2 className="text-3xl font-bold mb-4 text-center">Network Setup</h2>
          <p className="text-lg text-center">
            The diagram shows a basic topology of my homelab. Not all machines and services are listed and is meant to provide a basic overview of the setup.
          </p>
        </div>
        {/* Diagram */}
        <div className="flex justify-center mx-5">
          <img
            src="https://github.com/jamesyoung-15/HomeLab/blob/main/Documentation/Diagrams/HomeNetwork.drawio.png?raw=true"
            alt="Homelab Network Diagram"
            className="rounded-lg shadow-md max-h-192"
          />
        </div>
        <div className="flex flex-col gap-2 align-center justify-center text-center text-base">
          <p className="">
            In essence, the routing and firewall is managed by OPNSense. The network is segregated into VLANs for different purposes, such as IoT devices, guest network, etc.
          </p>
          <p className="">
            My servers mainly run Proxmox for virtualization, where I use a mix of LXC, VMs, and Docker containers depending on the services and applications. 
            I also have some other devices like a Raspberry Pi, KVM (never used tho), and old laptop that I will repurpose eventually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LabSetup;
