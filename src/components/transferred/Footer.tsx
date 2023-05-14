import { HOMEPAGE_URL } from "../../config";

export const Footer = () => {
    const today = new Date();

    return (
        <footer className="pt-10 pb-10 text-center bg-success dark:bg-success-dark">
            &copy; {today.getFullYear()}
            <a href={HOMEPAGE_URL}>Paul Gradie</a>. All rights reserved.
        </footer>
    );
};
