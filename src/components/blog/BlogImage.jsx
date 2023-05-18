import Image from 'next/image'
export function BlogImage({ src }) {
    return (
        <div className="w-full flex justify-center">
            <Image alt={src} src={src} className="rounded-2 shadow-md max-h-96" style={{ objectFit: "cover" }} />
        </div>
    );
};
