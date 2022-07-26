import { ReactComponent as BitcoinIcon } from "./assets/bitcoin-brands.svg";
import { ReactComponent as BoltIcon } from "./assets/bolt-solid.svg";
import { ReactComponent as MicrochipIcon } from "./assets/microchip-solid.svg";
import { ReactComponent as GithubIcon } from "./assets/github-brands.svg";
import { useState } from "react";

const App = () => {
    const [raspberryAlive, setRaspberryAlive] = useState<boolean>(false);

    return (
        <div className="app">
            <h1>The Gate Opener</h1>
            <h2>First* in the world remote gate opener</h2>
            <p className="smallText">*on that local network</p>
            <button>open the gate</button>
            <p className="status">
                connetion:
                {raspberryAlive ? <span className="green"> all good</span> : <span className="red"> not responding</span>}
            </p>
            <div className="peakOfHumor">
                <h3>About The Gate Opener</h3>
                <div className="perks">
                    <div className="perksRow">
                        <BitcoinIcon className="bitcoinIcon" />
                        <p className="perksText">
                            Powered by gate coin, first in the world cryptocurrency created for all your gate opening needs{" "}
                        </p>
                    </div>
                    <div className="perksRow">
                        <MicrochipIcon />
                        <p className="perksText">
                            Our powerful cutting-edge machine learning algorithm makes sure that your experience will only
                            get better
                        </p>
                    </div>
                    <div className="perksRow">
                        <BoltIcon />
                        <p className="perksText">Blazing fast and reliable - it just works</p>
                    </div>
                </div>
                <h3>Don't trust us, trust our clients</h3>
                <div className="clients">
                    <div className="opinion">
                        <p className="opinionText">Life changing</p>
                        <p className="opinionAuthor">-Tom</p>
                    </div>
                    <div className="opinion">
                        <p className="opinionText">
                            I don't know how we would live today without implementing blockchain into our gate openers
                        </p>
                        <p className="opinionAuthor">-Susan</p>
                    </div>
                    <div className="opinion">
                        <p className="opinionText">Gate NFT's when?</p>
                        <p className="opinionAuthor">-Jerremy</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a className="findMore" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I">
                    Click here to learn more about gate coin
                </a>
                <GithubIcon />
            </div>
        </div>
    );
};

export default App;
