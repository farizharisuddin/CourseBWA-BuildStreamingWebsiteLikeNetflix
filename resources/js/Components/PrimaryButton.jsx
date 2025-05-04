export default function PrimaryButton({
    className = "",
    disabled,
    children,
    variant = "primary",
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] text-center w-full ${
                disabled ? "opacity-30" : ""
            } btn-${variant} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
