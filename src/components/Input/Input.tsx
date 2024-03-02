type InputProps = {
  className: string;
  type: string;
  name: string;
  placeholder?: string;
};
export default function Input({ className, type, name, placeholder }: InputProps) {
  return <input className={className} type={type} name={name} placeholder={placeholder} />;
}
