import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { cva } from "class-variance-authority";
import cn from "classnames";

interface CustomSelectProps {
  options: (string | number)[];
  label: string;
  onChange: (value: string[]) => void;
  value: string[];
  size?: "sm" | "md" | "lg";
  width?: number;
}

const selectStyles = cva(
  "w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
  {
    variants: {
      size: {
        sm: "max-w-xs",
        md: "max-w-sm",
        lg: "max-w-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

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

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },
    } = event;
    onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ width: width }}>
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
      <Select
        labelId="custom-select-label"
        id="custom-select"
        multiple
        value={value}
        onChange={handleChange}
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
        className={cn(selectStyles({ size }), "h-9")}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option} sx={{ minWidth: 150 }}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
