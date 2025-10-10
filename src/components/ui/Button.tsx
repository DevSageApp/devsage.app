export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="rounded-md bg-brand px-4 py-2 text-white font-semibold hover:bg-brand-dark transition"
    >
      {children}
    </button>
  );
}
