export default function Experience() {
    return (
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Full-Stack Developer</h3>
                        <div className="subheading mb-3">Atlas Yazılım&Bilisim</div>
                        <p>Conducted research and development of Full-Stack Blockchain applications.</p>
                        <ul>
                            <li>Developed and tested smart contracts (Solidity, Ethers.js,Hardhat, Mocha, Rust (Anchor Framework - Solana)).</li>
                            <li>Designed and implemented DeFi projects.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2023 – 2024</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Full-Stack Developer</h3>
                        <div className="subheading mb-3">SAMPAS / METAPERA</div>
                        <p>Researched and developed Full-Stack Blockchain applications in DeFi and Metaverse using the SERN stack. (<a href="https://metapera.io/" target="_blank">metapera.io</a> )
                        </p>
                        <ul>
                            <li>Developed, managed, and tested smart contracts (Truffle, Mocha, Solidity, Web3.js, Slither).</li>
                            <ul>
                                <li>REIT DeFi V1 and V2</li>
                                <ul>
                                    <li>Developed protocol core, ERC20, UUPS, governance, and integration with Uniswap V2, Compound, etc.</li>
                                    <li>Designed and built decentralized applications (dApps).</li>
                                    <li>Implemented on-chain/off-chain data management solutions to enhance user experience.</li>
                                </ul>

                                <li>METAPERA Metaverse</li>
                                <ul>
                                    <li>Developed a customizable ERC721 token with a sale contract on the Polygon (MATIC) Blockchain.</li>
                                    <li>Built backend solutions for image generation, metadata file upload to IPFS, and URI synchronization with Polygon.</li>
                                </ul>
                            </ul>
                            <li>Engaged in market research, application deployment, and marketing strategies.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2021 – 2023</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Developer Intern</h3>
                        <div className="subheading mb-3">Mavi Alp</div>
                        <p>Worked on an IoT project using LoRa technology.</p>
                        <ul>
                            <li>Gained experience in embedded systems and application development.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2019 Summer</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Developer Intern</h3>
                        <div className="subheading mb-3">Proline Integrated Intelligence</div>
                        <p>Developed Full-Stack Web Applications as part of the R&D department</p>
                        <ul>
                            <li>Worked with various technologies such as JavaScript, Apache Kafka, MySQL, and MongoDB to build web applications.</li>
                        </ul>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2018 Summer</span></div>
                </div>
            </div>
        </section>

    )
}