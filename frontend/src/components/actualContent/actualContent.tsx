import { FC, useEffect, useState } from "react";
import "./actualContent.scss";

const ActualContent: FC = () => {
    const [raspberryStatus, setRaspberryStatus] = useState<"alive" | "disconnected" | "checking">("checking");
    const [openingStatus, setOpeningStatus] = useState<"open the gate" | "opening" | "try again?">("open the gate");

    const checkStatus = async () => {
        const controller = new AbortController();

        const timer = setTimeout(() => controller.abort(), 2500);
        try {
            const response = await fetch("http://192.168.1.84:8080/status", { signal: controller.signal });
            clearTimeout(timer);

            const status = await response.json();
            status === "alive" && setRaspberryStatus("alive");
        } catch (err: unknown) {
            console.log(err);
            setRaspberryStatus("disconnected");
        }
    };

    const openGate = async () => {
        try {
            const response = await fetch("http://192.168.1.84:8080/open");
            const responseJson = await response.json();

            responseJson === "opening" ? setOpeningStatus("opening") : setOpeningStatus("try again?");
        } catch (err: unknown) {
            setOpeningStatus("try again?");
            console.log(err);
        }
    };

    useEffect(() => {
        setRaspberryStatus("checking");
        setInterval(() => checkStatus(), 3000);
    }, []);

    return (
        <div className="actualContent">
            <h1>The Gate Opener</h1>
            <h2>First* in the world remote gate opener</h2>
            <p className="smallText">*on that local network</p>
            <button onClick={() => openGate()}>{openingStatus}</button>
            <p className="status">
                connetion:
                {raspberryStatus === "alive" && <span className="green"> all good</span>}
                {raspberryStatus === "disconnected" && <span className="red"> not responding</span>}
                {raspberryStatus === "checking" && <span className="orange"> checking</span>}
            </p>
        </div>
    );
};

export default ActualContent;
