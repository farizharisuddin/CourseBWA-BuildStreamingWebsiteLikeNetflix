export default function SubscriptionDetails({ subscription }) {
    return (
        <>
            {/* Start:Subscription details */}
            <div className="pr-[10px]">
                <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                    <div className="text-black text-lg font-semibold mb-8">
                        Basic
                    </div>
                    <div className="text-black text-sm mb-2">5 of 30 hari</div>
                    <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                        <div className="rounded-full h-full w-2/12 bg-alerange"></div>
                    </div>
                </div>
            </div>
            {/* End:Subscription details */}
        </>
    );
}
