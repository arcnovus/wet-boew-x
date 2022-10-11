import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { useLanguage } from "@arcnovus/wet-boew-react";

export type MultiCheckboxSelectProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
> & {
  id: string;
  label: string;
  required?: boolean;
  selectionLabel?: string;
  options: Array<{ label: string; value: string }>;
};

export function MultiCheckboxSelect({
  children,
  label,
  options,
  selectionLabel,
  ...props
}: MultiCheckboxSelectProps) {
  const [display, setDisplay] = useState("none");
  const [marginFix, setMarginFix] = useState("28px");
  const [numChecked, setNumChecked] = useState(0);
  const optionsRef = useRef<HTMLFieldSetElement | null>(null);
  let chevronDirection = display === "none" ? "down" : "up";
  let requiredLabel =
    useLanguage().currentLanguage === "fr" ? "(obligatoire)" : "(required)";

  useEffect(() => {
    const handleSubmit = (e: any) => {
      let fix = props.required && numChecked === 0 ? "56px" : "28px";
      setMarginFix(fix);
    };
    optionsRef.current?.form?.addEventListener("submit", handleSubmit);
    return optionsRef.current?.form?.removeEventListener(
      "submit",
      handleSubmit,
      true
    );
  });

  const onCheckToggle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let isInErrorState = Boolean(
      optionsRef.current?.form?.getElementsByClassName("error")?.length
    );

    let errorWillClear = e.target.checked || numChecked > 1;
    let errorWillReAppear = !e.target.checked && numChecked < 2;

    if (isInErrorState && errorWillClear) {
      setMarginFix("28px");
    }

    if (isInErrorState && errorWillReAppear) {
      setMarginFix("56px");
    }

    setNumChecked((prev) => (e.target.checked ? prev + 1 : prev - 1));
  };

  const onClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (display === "none") {
      setDisplay("block");
    } else {
      setDisplay("none");
    }
  };

  const onKeyPress: React.KeyboardEventHandler<HTMLElement> = (e) => {
    let enterKey = "Enter";
    let spacebar = " ";
    if (e.key === spacebar || e.key === enterKey) {
      onClick(e as any);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setDisplay("none");
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <fieldset
      className="chkbxrdio-grp"
      id={props.id}
      ref={optionsRef}
      style={{
        width: "255px",
      }}
    >
      <legend
        className={props.required ? "required" : ""}
        style={{ border: "none" }}
      >
        <span className="field-name">{label} </span>
        {props.required && (
          <strong className="required">{requiredLabel}</strong>
        )}
      </legend>
      <span
        onClick={onClick}
        tabIndex={0}
        style={{
          width: "229px",
          cursor: "pointer",
          border: "solid 1px #ccc",
          height: "37px",
          marginTop: marginFix,
          borderRadius: "3px",
          borderBottomLeftRadius: display === "block" ? "0" : "3px",
          borderBottomRightRadius: display === "block" ? "0" : "3px",
          padding: "6px 6px",
          display: "block",
        }}
        aria-hidden="false"
        role="select"
        onKeyPressCapture={onKeyPress}
        {...props}
      >
        {selectionLabel}
        <span
          className={`glyphicon glyphicon-menu-${chevronDirection}`}
          style={{ float: "right", paddingTop: "3px" }}
        ></span>
      </span>
      <ul
        className="form-group list-unstyled"
        aria-hidden={display === "none"}
        style={{
          width: "229px",
          visibility: display === "none" ? "hidden" : "visible",
          border: "solid 1px #ccc",
          borderTop: "none",
          backgroundColor: "white",
          color: "#555",
          maxHeight: "88px",
          overflow: "scroll",
          zIndex: 99,
          position: "absolute",
          borderRadius: "3px",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        {options.map((option, i) => (
          <li
            key={option.value}
            style={{ padding: "1px 6px" }}
            onBlur={(e: any) => {
              if (!optionsRef.current?.contains(e.relatedTarget)) {
                setDisplay("none");
              }
            }}
          >
            <input
              type="checkbox"
              name={props.id}
              value={option.value}
              id={option.value}
              required={props.required && i === 0}
              tabIndex={0}
              onChange={onCheckToggle}
            />{" "}
            <label htmlFor={option.value} style={{ fontWeight: "normal" }}>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
