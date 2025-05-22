import React, { forwardRef } from 'react';

const Select = forwardRef(
  (
    { label, options, error, helpText, size = 'md', className = '', ...props },
    ref
  ) => {
    const baseSelectClasses =
      'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50';
    const errorClasses = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : '';

    const sizeClasses = {
      sm: 'py-1 text-sm',
      md: 'py-2',
      lg: 'py-3 text-lg',
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`${baseSelectClasses} ${errorClasses} ${sizeClasses[size]} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {helpText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helpText}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;
