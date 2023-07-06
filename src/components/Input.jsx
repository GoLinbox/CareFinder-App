import React from "react";
import { useFormContext, useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from "../utils";

export default function Input({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className="FormInput">
      <div className="MyForm">
        <label htmlFor={id}>
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />
    </div>
  );
}

const framer_error = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
  transition: {
    duration: 0.2,
  },
};
const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};
