import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

interface CustomSelectProps {
  options: (string | number)[];
  label: string;
  onChange: (event: SelectChangeEvent<string[]>) => void;
  value: string[];
  size?: "sm" | "md" | "lg";
  width?: number;
}

const sizeStyles = {
  sm: "max-width: 20rem;",
  md: "max-width: 24rem;",
  lg: "max-width: 28rem;",
};

const StyledFormControl = styled(FormControl)<{ size: "sm" | "md" | "lg" }>`
  width: 100%;
  ${({ size }) => sizeStyles[size]}
`;

const StyledSelect = styled(Select)<{ size: "sm" | "md" | "lg" }>`
  height: 2.25rem;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 1);
  }
`;

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  label,
  onChange,
  value,
  size = "md",
  width = 300,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <StyledFormControl size={size} sx={{ width: width }}>
      <InputLabel
        id="custom-select-label"
        shrink={value.length > 0 || isFocused}
        sx={{
          transform:
            isFocused || value.length > 0
              ? "translate(14px, -9px) scale(0.75)"
              : "translate(14px, 6px) scale(1)",
          transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
        }}
      >
        {label}
      </InputLabel>
      <StyledSelect
        labelId="custom-select-label"
        id="custom-select"
        multiple
        value={value}
        onChange={
          onChange as (
            event: SelectChangeEvent<unknown>,
            child: React.ReactNode
          ) => void
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        input={<OutlinedInput label={label} />}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 28 * 4.5 + 8,
              width: isMobile ? "200px" : isTablet ? "30%" : "160px",
              maxWidth: isMobile ? "200px" : isTablet ? "900px" : "auto",
            },
          },
        }}
        size={size}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option} sx={{ minWidth: 150 }}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

export default CustomSelect;
