import SubscriptionsPaymentsCard from "@/Components/SubscriptionsPaymentsCard";
import AuthenticatedLayoutCustom from "@/Layouts/Costumize/AuthenticatedLayoutCustom";
import { Head } from "@inertiajs/react";
export default function SubscriptionsPayments({ auth, subscriptionPlans }) {
    return (
        <AuthenticatedLayoutCustom auth={auth}>
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
                    {subscriptionPlans.map((data) => (
                        <SubscriptionsPaymentsCard
                            key={data.id}
                            name={data.name}
                            price={data.price}
                            durationInMonth={data.active_period_in_month}
                            features={JSON.parse(data.features)}
                            // Set boolean flags based on plan name
                            isPremium={data.name === "Premium"}
                            isStandard={data.name === "Standard"}
                            isBasic={data.name === "Basic"}
                        />
                    ))}
                </div>

                {/* End:Pricing Card */}
            </div>
            {/* End Main Body */}
        </AuthenticatedLayoutCustom>
    );
}
