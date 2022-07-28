import { FC } from "react";
import "./peakOfHumor.scss";
import { ReactComponent as BitcoinIcon } from "../../assets/bitcoin-brands.svg";
import { ReactComponent as BoltIcon } from "../../assets/bolt-solid.svg";
import { ReactComponent as MicrochipIcon } from "../../assets/microchip-solid.svg";
import { ReactComponent as GithubIcon } from "../../assets/github-brands.svg";

const PeakOfHumor: FC = () => {
    return (
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
                        Our powerful cutting-edge machine learning algorithm makes sure that your experience will only get
                        better
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
            <div className="footer">
                <a className="findMore" href="https://www.youtube.com/watch?v=Tt7bzxurJ1I">
                    Learn more about gate coin
                </a>
                <a href="https://github.com/Neidz/raspberry-gate-opener">
                    <GithubIcon />
                </a>
            </div>
        </div>
    );
};

export default PeakOfHumor;
