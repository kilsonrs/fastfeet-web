/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';
import Select, { OptionTypeBase, Props as SelectProps } from 'react-select';
import { MdReportProblem } from 'react-icons/md';

import { Container, Error } from './styles';

interface SelectInputOptions {
  value: string;
  label: string;
}

interface SelectInputProps extends SelectProps<OptionTypeBase> {
  name: string;
  options: SelectInputOptions[];
}

const SelectInput: React.FC<SelectInputProps> = ({ options, name }) => {
  const [onFocus, setOnFocus] = useState(false);
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
      setValue: (ref: any, value: any) => {
        ref.select.setValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error}>
      <Select
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        onMenuClose={() => setOnFocus(false)}
        onMenuOpen={() => setOnFocus(true)}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        options={options}
        placeholder=""
        theme={theme => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#aa82f0',
            primary25: '#eee6fc',
            primary50: '#dcc7ff',
            primary75: '#c5aaf4',
          },
        })}
        styles={{
          control: base => ({
            ...base,
            '&:hover': {},
            borderColor: error ? '#de3b3b' : onFocus ? '#aa82f0' : '#dddddd',
            boxShadow: 'none',
          }),
        }}
      />
      {error && (
        <Error>
          <MdReportProblem size={18} color="#de3b3b" />
          <small>{error}</small>
        </Error>
      )}
    </Container>
  );
};

export default SelectInput;
