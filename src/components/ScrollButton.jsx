import React, { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import styles from "./ScrollButton.module.css";
import { useState } from "react";

export const ScrollButton = () => {
    const [isScrollVisible, setIsScrollVisible] = useState(false);

    useEffect(() => {
        const handleScrollVisible = () => {
            window.scrollY > 400
                ? setIsScrollVisible(true)
                : setIsScrollVisible(false);
        };

        window.addEventListener("scroll", handleScrollVisible);
        console.log("Resize scroll ");

        return () => window.removeEventListener("scroll", handleScrollVisible);
    }, [window.scrollY]);

    return (
        <>
            {isScrollVisible && (
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={styles.scrollBtn}
                >
                    <ArrowUpwardIcon fontSize="large" />
                </div>
            )}
        </>
    );
};
