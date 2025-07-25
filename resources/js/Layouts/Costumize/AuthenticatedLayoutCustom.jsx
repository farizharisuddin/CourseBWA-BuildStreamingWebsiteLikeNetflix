import Sidebar from "./sidebar";
import Topbar from "./Topbar";

export default function AuthenticatedLayoutCustom({ auth, children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* START: Sidebar */}
                <Sidebar />
                {/* END: Sidebar */}

                {/* START: Body */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* Start:Topbar */}
                        <Topbar name={auth.user.name} />
                        {/* End:Topbar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* End: Body */}
            </div>

            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
