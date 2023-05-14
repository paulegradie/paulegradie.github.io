/* eslint-disable @next/next/no-img-element */
export const Masthead = () => {
    return (
        <section className="relative flex justify-left items-center">
            <div className="overflow-hidden max-h-screen">
                <img src="/paul-1.jpg" alt="paul-1" />
            </div>
            <div className="absolute z-10 text-left px-8 drop-shadow-lg shadow-black">
                <div className="text-black uppercase text-left text-sm ml-5">Welcome to</div>
                <div className="text-4xl text-left font-mplus font-medium ml-5 text-black">
                    Paul Gradies <span className="text-orange-500">Personal</span> Website
                </div>
            </div>
        </section>
    );
};
