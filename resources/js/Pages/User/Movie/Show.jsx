import { Head, Link } from "@inertiajs/react";
import ReactPlayer from "react-player";

export default function Show({ movie }) {
    return (
        <>
            <Head title="Show Movie"></Head>

            <section
                className="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg"
                id="stream"
            >
                {/* Video Player */}
                <div className="pt-[100px]">
                    <ReactPlayer
                        url={movie.video_url}
                        className="react-player"
                        controls
                        width={"100%"}
                        height={"550px"}
                    />
                </div>
                {/* Button back to dashboard */}
                <div className="absolute top-5 left-5 z-20">
                    <Link href={route("dashboard")}>
                        <img
                            src="/icons/ic_arrow-left.svg"
                            className="transition-all btn-back w-[46px]"
                            alt="stream"
                        />
                    </Link>
                </div>

                {/* Video Title */}
                <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
                    <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                        {movie.name}
                    </span>
                </div>
            </section>
        </>
    );
}
