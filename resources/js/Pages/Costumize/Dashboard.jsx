import AuthenticatedLayoutCustom from "@/Layouts/Costumize/AuthenticatedLayoutCustom";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
export default function Dashboard() {
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
        <AuthenticatedLayoutCustom>
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
                    {[1, 2, 3, 4, 5].map((item) => (
                        <FeaturedMovie
                            key={item}
                            slug="featured-movie"
                            name={`Test Name ${item}`}
                            category="Action"
                            thumbnail="https://picsum.photos/520/340"
                            rating={Math.random() * 5}
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
                    {[1, 2, 3, 4, 5].map((item) => (
                        <MovieCard
                            key={item}
                            slug="browse-movie"
                            name={`Browse Movie ${item}`}
                            category={`Comedy`}
                            thumbnail="https://picsum.photos/250/340"
                        />
                    ))}
                </Flickity>
            </div>
            {/* End:Browse */}
            
            {/* End Main Body */}
        </AuthenticatedLayoutCustom>
    );
}
