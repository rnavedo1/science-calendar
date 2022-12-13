export default function FormInput({ label, type, name, onChange, value }) {
  return (
    <div className="w-full flex flex-col mb-3">
      <label className="mb-1 ">{label}</label>
      <input
        className="border border-gray-800 rounded p-1 w-full md:w-8/12 lg:w-6/12"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
