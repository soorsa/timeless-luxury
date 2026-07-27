"use client";
import { useField } from "formik";
import { Info } from "lucide-react";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface RadioProps {
  name: string;
  label?: string;
  options: Option[];
  className?: string;
  optionClassName?: string;
  orientation?: "horizontal" | "vertical";
  size?: "xs" | "sm" | "md" | "lg";
}

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  options,
  className = "",
  optionClassName = "",
  orientation = "vertical",
  size = "sm",
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className={`w-full ${className}`}>
      {label && <p className="mb-0.5 font-semibold text-sm">{label}</p>}
      <div
        className={`flex ${size === "xs" && "gap-1"} ${
          size === "sm" && "gap-2"
        } ${
          orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"
        } ${className}`}
      >
        {options.map((option) => {
          const isSelected = field.value === option.value;

          return (
            <label
              key={option.value}
              className={`flex items-center justify-between border ${
                size === "xs" && "rounded-md p-1.5"
              } ${
                size === "sm" && "rounded-xl p-3"
              } cursor-pointer transition-all 
                ${
                  isSelected
                    ? !hasError
                      ? "border-gold-dark bg-gold-dark"
                      : "border-red-500"
                    : "bg-gray-200 border-gray-200"
                }
                ${hasError ? "border-red-500" : ""} ${optionClassName}
              `}
            >
              <div className="flex items-center gap-3">
                {/* Custom Radio Circle */}
                <div
                  className={`
                    ${size === "sm" && "w-5 h-5"} ${
                    size === "xs" && "w-5 h-5"
                  } rounded-full border flex items-center justify-center
                    ${
                      isSelected
                        ? !hasError
                          ? "border-white bg-white"
                          : "border-red-500 bg-red-500"
                        : "border-gray-400 bg-gray-400"
                    }
                  `}
                >
                  <div
                    className={`${
                      isSelected ? "bg-gold-dark" : "bg-gray-200"
                    } rounded-full ${size === "xs" && "w-3 h-3"} ${
                      size === "sm" && "w-3 h-3"
                    }`}
                  />
                </div>

                <span
                  className={`${isSelected ? "text-cream" : "text-gray-900"} ${
                    size === "xs" && "text-xs"
                  } ${size === "sm" && "text-sm"} capitalize`}
                >
                  {option.label}
                </span>
              </div>

              {/* Hidden native radio input */}
              <input
                type="radio"
                {...field}
                value={option.value}
                checked={isSelected}
                onChange={() => helpers.setValue(option.value)}
                className="hidden"
              />
            </label>
          );
        })}
      </div>

      {/* Error Message */}
      {hasError && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <Info className="w-4 h-4" />
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default Radio;
