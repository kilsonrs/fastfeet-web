import React, { useState } from 'react';
import Select from 'react-select';
import { Container } from './styles';

interface SelectInputOptions {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: SelectInputOptions[];
}

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
  const [onFocus, setOnFocus] = useState(false);

  return (
    <Container>
      <Select
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        onMenuClose={() => setOnFocus(false)}
        onMenuOpen={() => setOnFocus(true)}
        options={options}
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
            borderColor: onFocus ? '#aa82f0' : '#dddddd',
            boxShadow: 'none',
          }),
        }}
      />
    </Container>
  );
};

export default SelectInput;
