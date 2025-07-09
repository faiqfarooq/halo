import React from "react";
import { Box, Button } from "@mui/material";
import PageNavigation from "../PageNavigation";

interface NavigationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onPageChange: (page: number) => void;
  allQuestionsAnswered: boolean;
  isSubmitted: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onSubmit,
  onPageChange,
  allQuestionsAnswered,
  isSubmitted,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        mt: 4,
        pt: 3,
        borderTop: "1px solid #E5E7EB",
        gap: { xs: 2, sm: 0 },
      }}
    >
      <Button
        variant="outlined"
        onClick={onPrevious}
        disabled={currentPage === 1}
        sx={{
          color: "text.primary",
          borderColor: "grey.300",
          bgcolor: currentPage === 1 ? "#f5f5f5" : "#e4e4e4",
          borderRadius: "6px",
          minWidth: { xs: "80px", md: "100px" },
          fontSize: { xs: "0.8rem", md: "0.875rem" },
          order: { xs: 2, sm: 1 },
          "&:hover": { bgcolor: currentPage === 1 ? "#f5f5f5" : "#d4d4d4" },
          "&:disabled": {
            color: "text.disabled",
            borderColor: "grey.200",
          },
        }}
      >
        Previous
      </Button>

      <Box sx={{ order: { xs: 1, sm: 2 } }}>
        <PageNavigation
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </Box>

      {currentPage === totalPages ? (
        <Button
          variant="contained"
          onClick={onSubmit}
          disabled={!allQuestionsAnswered || isSubmitted}
          sx={{
            borderRadius: 2,
            bgcolor:
              allQuestionsAnswered && !isSubmitted
                ? "primary.main"
                : "grey.400",
            minWidth: { xs: "80px", md: "100px" },
            fontSize: { xs: "0.8rem", md: "0.875rem" },
            order: { xs: 3, sm: 3 },
            "&:hover": {
              bgcolor:
                allQuestionsAnswered && !isSubmitted
                  ? "primary.dark"
                  : "grey.400",
            },
            "&:disabled": {
              bgcolor: "grey.400",
              color: "white",
            },
          }}
        >
          {isSubmitted ? "Submitted" : "Submit"}
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={onNext}
          sx={{
            borderRadius: 4,
            bgcolor: "primary.main",
            minWidth: { xs: "80px", md: "100px" },
            fontSize: { xs: "0.8rem", md: "0.875rem" },
            order: { xs: 3, sm: 3 },
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          {`Next >`}
        </Button>
      )}
    </Box>
  );
};

export default NavigationControls;
