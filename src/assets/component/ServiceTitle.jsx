export default function ServiceTitle({ title, className }) {
   return (
      <h1 className={`font-mono text-primary font-bold text-4xl lg:text-5xl tracking-wider ${className}`}>{title}</h1>
   );
}
