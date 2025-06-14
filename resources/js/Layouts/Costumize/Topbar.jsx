import { useState, useRef } from "react";
import { Link } from "@inertiajs/react";
export default function Topbar({ name }) {
    // how to dropdown works
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        setDropdownOpen(!dropdownOpen);
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
    };
    return (
        <div className="flex justify-between items-center cursor-pointer">
            <input
                id="search"
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4">
                <span className="text-black text-sm font-medium">
                    Welcome, {name}
                </span>
                {/* Avatar */}
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <div
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        onClick={triggerDropdown}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-gray-100 rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden"
                        ref={dropdownTarget}
                    >
                        <Link
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </Link>
                        <Link
                            href={route("profile.edit")}
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </Link>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="transition-all hover:bg-sky-100 p-4 text-left"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
            </div>
            <style jsx="true">
                {`
                    .top-search {
                        background-image: url("/icons/ic_search.svg");
                    }
                `}
            </style>
        </div>
    );
}
