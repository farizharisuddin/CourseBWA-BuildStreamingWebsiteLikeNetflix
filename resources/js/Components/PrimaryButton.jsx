export default function PrimaryButton({
    className = "",
    disabled,
    children,
    variant = "primary",
    processing,
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing ? "opacity-30" : ""
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
