import * as React from "react";

const Input = React.forwardRef((props, ref) => {
  // @ts-ignore
  const {attribute, disabled, label, name, onChange, required, value} =
    props; // these are just some of the props passed by the content-manager


  const handleChange = (e: any) => {
    onChange({
      target: {name, type: attribute.type, value: e.currentTarget.value},
    });
  };

  return (
    <label
      style={{display: "flex", flexDirection: "column", gap: 4, position: "relative"}}
    >
      {label || "Badge Color"}
      {/*// select from 3 options: red, green, blue*/}
      <select
        // @ts-ignore
        ref={ref}
        name={name}
        disabled={disabled}
        value={value}
        required={required}
        onChange={handleChange}
        style={{
          padding: "8px 16px",
          border: "1px solid #ccc",
          borderRadius: 4,
          appearance: "none",
          backgroundColor: "#fff",
        }}
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
      {/*color preview box*/}
      <div
        style={{
          position: "absolute",
          top: "2.5rem",
          right: 30,
          width: 20,
          height: 20,
          backgroundColor: value || "transparent",
          border: "1px solid #ccc",
          borderRadius: 4,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />
    </label>
  );
});

export {Input};
