export const Button = ({
  className = "",
  size = "default",
  children,
}) => {
  const baseClasses = `
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-full cursor-pointer
    font-semibold tracking-wide
    transition-all duration-500 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70
    active:scale-[0.97]
  `;

  const sizeClasses = {
    sm: "px-5 py-2 text-sm",
    default: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes}>
      {/* Main Background */}
      <span
        className="
          absolute inset-0 rounded-full
          bg-primary
          transition-all duration-500
          group-hover:scale-105
          group-hover:brightness-110
        "
      />

      {/* Glass Overlay */}
      <span
        className="
          absolute inset-[1px] rounded-full
          bg-white/5 backdrop-blur-md
        "
      />

      {/* Glow */}
      <span
        className="
          absolute inset-0 rounded-full
          shadow-[0_0_25px_rgba(32,178,166,0.35)]
          opacity-70 transition-all duration-500
          group-hover:shadow-[0_0_40px_rgba(32,178,166,0.6)]
        "
      />

      {/* Animated Shine */}
      <span
        className="
          absolute left-[-120%] top-0 h-full w-[120%]
          skew-x-[-20deg]
          bg-gradient-to-r from-transparent via-white/20 to-transparent
          transition-all duration-1000
          group-hover:left-[120%]
        "
      />

      {/* Floating Letters */}
      <span
        className="
          absolute left-4 top-1
          text-[10px] font-black text-white/20
          transition-all duration-500
          group-hover:-translate-y-1 group-hover:rotate-12
        "
      >
        A
      </span>

      <span
        className="
          absolute right-5 bottom-1
          text-[10px] font-black text-highlight/40
          transition-all duration-500
          group-hover:translate-y-1 group-hover:-rotate-12
        "
      >
        ✦
      </span>

      <span
        className="
          absolute right-10 top-1
          text-[9px] font-black text-primary-foreground/20
          transition-all duration-500
          group-hover:scale-125
        "
      >
        X
      </span>

      {/* Content */}
      <span
        className="
          relative z-10 flex items-center gap-2
          text-primary-foreground
          transition-all duration-300
          group-hover:tracking-[0.15em]
        "
      >
        {children}

        <span
          className="
            transition-all duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </span>
    </button>
  );
};