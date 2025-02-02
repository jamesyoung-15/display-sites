import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <section className="py-2 border-b-1 border-gray-700" id='about'>
            <div className='py-5 container max-w-[900px] mx-auto'>
                <h1 className="text-4xl font-bold text-center mb-4">About</h1>
                <div className="mx-2">
                    <p className="text-lg text-center">
                        Welcome to my homelab! My homelab consists of several servers for self-hosting services (eg. Nextcloud), development, and learning. 
                        I also use various network equipments for things like configurations with VLANs and VPNs. 
                    </p>
                    <p className='text-lg text-center my-5'>
                        I started this journey trying to setup PiHole and eventually went down the rabbit-hole of self-hosting services and learning about networking.
                        I have been tinkering with my homelab on and off for about 2 years now and plan to continue expanding.
                    </p>
                    <p className="text-center text-lg my-5">
                        Feel free to check out my blog and Youtube channel where I will document my journey and my repo for configuration files.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-2 justify-center align-center max-w-[600px] mx-auto'>
                        <a href="https://github.com/jamesyoung-15/homelab" className='mx-auto flex align-center justify-center gap-2 rounded bg-[#a6e3a1] text-black p-3 hover:bg-[#f9e2af]'>
                            <GitHubIcon className='hover:scale-105' />
                            <span>Homelab Repo</span>
                        </a>
                        <a href="https://youtube.com/@jyylab" className='mx-auto flex align-center justify-center gap-2 rounded bg-[#f38ba8] text-black p-3 hover:bg-[#f9e2af]'>
                            <GitHubIcon className='hover:scale-105' />
                            <span>Youtube Channel</span>
                        </a>
                        <a href="https://blog.jyylab.com" className='mx-auto flex align-center justify-center gap-2 rounded bg-[#fab387] text-black p-3 hover:bg-[#f9e2af]'>
                            <GitHubIcon className='hover:scale-105' />
                            <span>Personal Blog</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;