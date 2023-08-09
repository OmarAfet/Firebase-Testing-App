const Input = ({
  name,
  value,
  onBlur,
  onChange,
  type,
  placeholder,
  onKeyDown,
}) => {
  return (
    <>
      <div className="flex flex-col justify-center relative">
        <input
          required
          title=""
          name={name}
          value={value}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onChange={onChange}
          id={placeholder}
          className="peer border-2 rounded-lg px-2 py-1 focus:border-OpenColor-gray-9"
          autoComplete="off"
          type={type}
        />
        <label
          className={`absolute ml-2 my-1 border-2 border-transparent text-OpenColor-gray-5 peer cursor-text bg-white select-none leading-3 ${
            value ? "-top-4" : "top-1.5 peer-focus:-top-4"
          }`}
          htmlFor={placeholder}
        >
          {placeholder}
        </label>
      </div>
    </>
  );
};

export default Input;
