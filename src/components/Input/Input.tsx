type InputProps = {
  className: string;
  type: string;
  name: string;
};
export default function Input({ className, type, name }: InputProps) {
  return <input className={className} type={type} name={name} />;
}
