import PrimaryButton from "@/Components/PrimaryButton";
export default function SubscraptionsPaymentsCard({
    isPremium,
    isStandard,
    isBasic,
    id,
    name,
    price,
    durationInMonth,
    features,
    onSelectSubscription,
}) {
    return (
        <>
            {/* Premium */}
            {isPremium && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-2 outline-alerange rounded-[26px] text-white w-[300px] bg-black">
                    {/* Ornament Icon */}

                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="flex justify-normal">
                            <div className="bg-alerange rounded-full p-[12px] max-w-max">
                                <img
                                    src="/icons/ic_star.svg"
                                    width="14"
                                    alt=""
                                />
                            </div>
                            <div className="pt-4 pl-3">{name}</div>
                        </div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-white text-xs font-bold">
                            / {durationInMonth} months
                        </p>
                    </div>

                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                className="flex items-center gap-2"
                                key={`${index}-${id}-${features}`}
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <PrimaryButton type="button">
                            <span className="text-base font-semibold">
                                Subscribe Now
                            </span>
                        </PrimaryButton>
                    </div>
                </div>
            )}
            {/* Standart */}
            {isStandard && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-2 outline-alerange rounded-[26px] text-white w-[300px] bg-alerange">
                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="text-sm mb-2">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-white text-xs font-bold">
                            / {durationInMonth} months
                        </p>
                    </div>

                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={`${index}-${id}-${features}`}
                                className="flex items-center gap-2"
                            >
                                <img src="/icons/ic_tick.svg" alt="" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <PrimaryButton type="button" variant="white-outline bg-white">
                            <span className="text-base">Start {name}</span>
                        </PrimaryButton>
                    </div>
                </div>
            )}
            {/* Basic */}
            {isBasic && (
                <div className="flex flex-col gap-[30px] py-[30px] px-7 outline outline-2 outline-alerange rounded-[26px] text-black w-[300px] ">
                    {/* Top Content: Name-Price */}
                    <div>
                        <div className="text-sm mb-2">{name}</div>
                        <div className="text-[28px] font-bold">
                            IDR {price.toLocaleString()}
                        </div>
                        <p className="text-black text-xs font-bold">
                            / {durationInMonth} months
                        </p>
                    </div>

                    {/* Mid Content: Benefits */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={`${index}-${id}-${features}`}
                                className="flex items-center gap-2"
                            >
                                <img src="/icons/ic_tick.svg" alt="" />
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: CTA Button */}
                    <div onClick={onSelectSubscription}>
                        <PrimaryButton type="button" variant="white-outline">
                            <span className="text-base">Start {name}</span>
                        </PrimaryButton>
                    </div>
                </div>
            )}
        </>
    );
}
