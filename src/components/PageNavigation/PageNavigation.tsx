import React from "react";
import { Box, Chip } from "@mui/material";

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PageNavigation: React.FC<PageNavigationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 0.5, md: 1 },
        overflowX: "auto",
        pb: { xs: 1, md: 0 },
        minWidth: "fit-content",
        maxWidth: { xs: "200px", sm: "300px", md: "none" },
        mx: { xs: "auto", md: 0 },
      }}
    >
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;
        const isActive = pageNumber === currentPage;

        return (
          <Chip
            key={pageNumber}
            label={pageNumber.toString()}
            onClick={() => onPageChange(pageNumber)}
            sx={{
              bgcolor: isActive ? "primary.main" : "transparent",
              color: isActive ? "white" : "text.primary",
              borderRadius: "6px",
              fontWeight: 600,
              minWidth: { xs: 28, md: 32 },
              height: { xs: 28, md: 32 },
              cursor: "pointer",
              border: isActive ? "none" : "1px solid transparent",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
              flexShrink: 0,
              "&:hover": {
                bgcolor: isActive ? "primary.dark" : "grey.100",
              },
            }}
          />
        );
      })}
    </Box>
  );
};

export default PageNavigation;
