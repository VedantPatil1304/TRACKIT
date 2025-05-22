import React, { forwardRef } from 'react';

const Input = forwardRef(
  (
    { label, error, helpText, leftIcon, rightIcon, className = '', ...props },
    ref
  ) => {
    const baseInputClasses =
      'block w-full rounded-md border-gray-300 shadow-sm transition duration-150 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50';
    const errorClasses = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : '';
    const leftIconClasses = leftIcon ? 'pl-10' : '';
    const rightIconClasses = rightIcon ? 'pr-10' : '';

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`${baseInputClasses} ${errorClasses} ${leftIconClasses} ${rightIconClasses} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {helpText && !error && <p className="mt-1 text-sm text-gray-500">{helpText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
