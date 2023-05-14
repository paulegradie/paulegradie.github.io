import classnames from "classnames";
import React, { useState } from "react";
import cls from "./AnimatedDownArrow.module.css";

const AnimatedDownArrow = () => {
    const [active, setActive] = useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setActive((prev) => (prev + 1) % 3);
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="animated-arrow">
            <div className={classnames(cls.arrow, { [cls.active]: active === 0 })}></div>
            <div className={classnames(cls.arrow, { [cls.active]: active === 1 })}></div>
            <div className={classnames(cls.arrow, { [cls.active]: active === 2 })}></div>
        </div>
    );
};

export default AnimatedDownArrow;
