export default function Logo({ size = 48 }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <rect width="64" height="64" rx="14" fill="#DC2626" />
        <path
          d="M20 38L30 18L34 18L44 38H39L36 31H28L25 38H20ZM30 27H34L32 22L30 27Z"
          fill="white"
        />
      </svg>

      <span className="text-2xl md:text-3xl font-bold tracking-tight">
        1<span className="text-red-600">clik</span>fix
      </span>
    </div>
  )
}
