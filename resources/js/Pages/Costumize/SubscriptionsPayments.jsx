import SubscriptionsPaymentsCard from "@/Components/SubscriptionsPaymentsCard";
import AuthenticatedLayoutCustom from "@/Layouts/Costumize/AuthenticatedLayoutCustom";
import { Head } from "@inertiajs/react";
export default function SubscriptionsPayments() {
    return (
        <AuthenticatedLayoutCustom>
            <Head title="Subscriptions Payments"></Head>

            {/* Start Main Body */}
            <div className="py-0 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* Start:Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Premium */}
                    <SubscriptionsPaymentsCard
                        isPremium
                        name="Premium"
                        price={390000}
                        durationInMonth={1}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                    {/* Standart */}
                    <SubscriptionsPaymentsCard
                        isStandard
                        name="Standard"
                        price={290000}
                        durationInMonth={1}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                    {/* Basic */}
                    <SubscriptionsPaymentsCard
                        isBasic
                        name="Basic"
                        price={190000}
                        durationInMonth={1}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />
                </div>

                {/* End:Pricing Card */}
            </div>
            {/* End Main Body */}
        </AuthenticatedLayoutCustom>
    );
}
