import AuthenticatedLayoutCustom from "@/Layouts/Costumize/AuthenticatedLayoutCustom";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
export default function Dashboard({ auth, feturedMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <AuthenticatedLayoutCustom auth={auth}>
            <Head title="Dashboard">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>
            {/* Start Main Body */}
            
            {/* Start:Featured */}
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {feturedMovies.map((data) => (
                        <FeaturedMovie
                            key={data.id}
                            slug={data.slug}
                            name={data.name}
                            category={data.category}
                            thumbnail={data.thumbnail}
                            rating={data.rating}
                        />
                    ))}
                </Flickity>
            </div>
            {/* End:Featured */}
            {/* Start:Browse/MovieCard */}
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse / Movie Card
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movies.map((data) => (
                        <MovieCard
                            key={data.id}
                            slug={data.slug}
                            name={data.name}
                            category={data.category}
                            thumbnail={data.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
            {/* End:Browse */}
            
            {/* End Main Body */}
        </AuthenticatedLayoutCustom>
    );
}
