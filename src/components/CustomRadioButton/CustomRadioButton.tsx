import React from "react";
import { Box } from "@mui/material";

interface CustomRadioButtonProps {
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  size?: "small" | "medium";
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  value,
  checked,
  onChange,
  size = "medium",
}) => {
  const buttonSize = size === "small" ? 20 : 24;
  const innerSize = size === "small" ? 8 : 10;

  return (
    <Box
      onClick={() => onChange(value)}
      sx={{
        width: buttonSize,
        height: buttonSize,
        borderRadius: "50%",
        border: "2px solid",
        borderColor: checked ? "#7C3AED" : "#D1D5DB",
        backgroundColor: checked ? "#7C3AED" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        mx: { xs: 0.3, md: 1 },
        "&:hover": {
          borderColor: "#7C3AED",
          transform: "scale(1.1)",
        },
      }}
    >
      {checked && (
        <Box
          sx={{
            width: innerSize,
            height: innerSize,
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        />
      )}
    </Box>
  );
};

export default CustomRadioButton;
