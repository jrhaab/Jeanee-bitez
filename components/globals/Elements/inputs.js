import { ActionButtonInstance } from "./buttons";
import { commonIcons, IconElement } from "./icons";

const styledInputWrapperClass = `w-full h-10 text-sm flex flex-row justify-between items-center gap-x-4 pl-2 rounded-full border border-gray-100 outline-none shadow-sm bg-[var(--light-input)]`;
const styledPasswordWrapperClass = `w-full h-10 text-sm flex flex-row justify-between items-center gap-x-4 px-2 rounded-full border border-gray-100 outline-none shadow-sm bg-[var(--light-input)]`;
const styledTextAreaWrapperClass = `w-full h-18 text-sm flex flex-row justify-between items-center rounded-lg border-gray-100 outline-none shadow-sm`;
const regularInputWrapperClass = `w-full flex text-sm flex-row justify-between items-center gap-x-4 rounded-full border-none outline shadow-sm`;

export const LabelInstance = ({ htmlFor, labelTitle, required }) => {
  return (
    <label
      className="max-w-full font-bold text-base text-black gap-x-2 flex flex-row justify-start items-center"
      htmlFor={htmlFor ?? "#"}
    >
      <span>{labelTitle}</span>
      {required && <sup className="text-red-700 font-bold">*</sup>}
    </label>
  );
};
export const InputInstance = ({ customclassName }) => {
  return (
    <input
      type={"text"}
      onChange={"someFunction"}
      className={`w-full bg-slate-300 rounded-[var(--radius-full)] h-12 opacity-35 ${customclassName}`}
      required
    ></input>
  );
};

//styled inputs
export const StyledTextInputInstance = ({
  name,
  placeholder,
  required,
  showLabel,
  label,
  customWrapperClass,
  customInputWrapperClass,
  custominputclassName,
  defaultValue,
  onChange,
  inputType,
  iconColor,
  iconSize,
  iconValue,
}) => {
  return (
    <div
      className={`w-full h-max flex flex-col justify-start items-start gap-y-2 ${customWrapperClass}`}
    >
      {showLabel && (
        <LabelInstance htmlFor={name} required={required} labelTitle={label} />
      )}
      <div className={`${styledInputWrapperClass} ${customInputWrapperClass}`}>
        <IconElement
          Icon={iconValue}
          size={iconSize ?? 22}
          color={iconColor ?? "black"}
        />
        <input
          name={name ?? "#"}
          placeholder={placeholder ?? ""}
          required={required}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          type={inputType}
          className={`w-[90%] h-full py-2 px-4 bg-transparent outline-none border-none text-black ${custominputclassName}`}
        />
      </div>
    </div>
  );
};

export const StyledPasswordInstance = ({
  name,
  placeholder,
  required,
  showLabel,
  label,
  customWrapperClass,
  customInputWrapperClass,
  custominputclassName,
  defaultValue,
  onChange,
  inputType,
  iconColor,
  iconSize,
  iconValue,
  showPassword,
  revealPasswordFunc,
}) => {
  return (
    <div
      className={`w-full h-max flex flex-col justify-start items-start gap-y-2 ${customWrapperClass}`}
    >
      {showLabel && (
        <LabelInstance htmlFor={name} required={required} labelTitle={label} />
      )}
      <div
        className={`${styledPasswordWrapperClass} ${customInputWrapperClass}`}
      >
        <IconElement
          Icon={iconValue}
          size={iconSize ?? 22}
          color={iconColor ?? "black"}
        />
        <input
          name={name ?? "#"}
          placeholder={placeholder ?? ""}
          required={required}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          type={showPassword ? "text" : "password"}
          className={`w-[75%] h-full py-2 px-4 bg-transparent outline-none border-none text-black ${custominputclassName}`}
        />
        <ActionButtonInstance
          iconValue={
            showPassword ? commonIcons.hashIcon : commonIcons.revealIcon
          }
          iconColor={`black`}
          iconSize={iconSize ?? 22}
          clickEvent={revealPasswordFunc}
        />
      </div>
    </div>
  );
};

export const StyledSelectInstance = ({
  name,
  required,
  showLabel,
  label,
  customWrapperClass,
  customInputWrapperClass,
  custominputclassName,
  defaultValue,
  onChange,
  selectOptions,
  iconColor,
  iconSize,
  iconValue,
}) => {
  return (
    <div
      className={`w-full h-max flex flex-col justify-start items-start gap-y-2 ${customWrapperClass}`}
    >
      {showLabel && (
        <LabelInstance htmlFor={name} required={required} labelTitle={label} />
      )}
      <div className={`${styledInputWrapperClass} ${customInputWrapperClass}`}>
        <IconElement
          Icon={iconValue}
          size={iconSize ?? 22}
          color={iconColor ?? "black"}
        />
        <select
          onChange={(e) => onChange(e.target.value)}
          defaultValue={defaultValue}
          className={`w-[90%] h-full py-2 px-4 bg-transparent outline-none border-none text-black ${custominputclassName}`}
        >
          <option disabled>Select an option</option>
          {selectOptions.map((_option, _idx) => (
            <option key={_idx} value={_option?.value}>
              {_option?.label ?? _option?.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const StyledTextAreaInstance = ({
  name,
  placeholder,
  required,
  showLabel,
  label,
  customWrapperClass,
  customInputWrapperClass,
  custominputclassName,
  defaultValue,
  onChange,
  iconColor,
  iconSize,
  iconValue,
}) => {
  return (
    <div
      className={`w-full h-max flex flex-col justify-start items-start gap-y-2 ${customWrapperClass}`}
    >
      <div className="w-full row-all-start gap-x-4">
        {showLabel && (
          <LabelInstance
            htmlFor={name}
            required={required}
            labelTitle={label}
          />
        )}
        <IconElement
          Icon={iconValue}
          size={iconSize ?? 22}
          color={iconColor ?? "black"}
        />
      </div>

      <div
        className={`${styledTextAreaWrapperClass} ${customInputWrapperClass}`}
      >
        <input
          name={name ?? "#"}
          placeholder={placeholder ?? ""}
          required={required}
          defaultValue={defaultValue}
          onChange={(e) => onChange(e.target.value)}
          type={inputType}
          className={`w-full h-full py-2 px-4 bg-transparent outline-none border-none text-black ${custominputclassName}`}
        />
      </div>
    </div>
  );
};
export const RegularTextInputInstance = ({ customclassName }) => {
  return (
    <div>
      <input
        type={"text"}
        onChange={"someFunction"}
        className={` w-full bg-slate-300 rounded-[var(--radius-full)] h-12 opacity-35 ${customclassName}`}
        required
      />
    </div>
  );
};
export const RegularSelectInstance = ({ customclassName }) => {
  return (
    <div>
      <input
        type={"text"}
        onChange={"someFunction"}
        className={` w-full bg-slate-300 rounded-[var(--radius-full)] h-12 opacity-35 ${customclassName}`}
        required
      />
    </div>
  );
};

export const RegularTextAreaInstance = ({ customclassName }) => {
  return (
    <div>
      <input
        type={"text"}
        onChange={"someFunction"}
        className={` w-full bg-slate-300 rounded-[var(--radius-full)] h-12 opacity-35 ${customclassName}`}
        required
      />{" "}
    </div>
  );
};

export const CheckBoxInstance = ({
  onChange,
  label,
  name,
  customWrapperClass,
  customInputClass,
}) => {
  return (
    <div
      className={`w-full flex flex-row justify-start items-center gap-x-4 font-medium text-base text-black ${customWrapperClass}`}
    >
      <input
        name={name}
        type="checkbox"
        id="name"
        onChange={onChange}
        className={`${customInputClass} w-4 h-4`}
      />
      <LabelInstance labelTitle={label} htmlFor={name} />
    </div>
  );
};
