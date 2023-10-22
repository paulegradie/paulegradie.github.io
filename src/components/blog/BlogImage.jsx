
import Image from 'next/image'

export function BlogImage({ src, link = null, className = "", ...styles}) {

    const classNames = "rounded-2 shadow-md max-h-96 mt-4 " + className

    let cursor = "";
    if (link) cursor = "cursor-pointer";
    const linkCallback = () => {
        if (link) {
            window.open(link);
        }
    }
    return (
        <div className={`w-full flex justify-center ${cursor}`} onClick={linkCallback}>
            <Image alt={src} src={src} className={classNames} style={{ objectFit: "cover", ...styles }} />
        </div >
    );
};
