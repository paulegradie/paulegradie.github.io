import Image from 'next/image'
export function BlogImage  ({ src }) {
    return (
        <div className="flex justify-center mb-5" >
            <Image alt={src} src={src} className="rounded-2 shadow-md max-h-96" />
        </div>
    );
};
