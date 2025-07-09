import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Radio,
  FormControlLabel,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface Question {
  id: number;
  text: string;
  value: string;
}

interface QuestionsSectionProps {
  questions: Question[];
  responses: { [key: number]: string };
  onResponseChange: (questionId: number, value: string) => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  allQuestionsAnswered: boolean;
  isSubmitted: boolean;
}

// Question Item Component
const QuestionItem: React.FC<{
  question: Question;
  response: string;
  onResponseChange: (questionId: number, value: string) => void;
}> = ({ question, response, onResponseChange }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "#FAFAFA",
        borderRadius: 2,
        overflowX: { xs: "auto", md: "visible" },
        pb: { xs: 1, md: 0 },
      }}
    >
      <Box
        sx={{
          p: { xs: "8px 12px", md: "12px 16px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, md: 2 },
          minWidth: { xs: "600px", md: "auto" }, // Ensure minimum width for scrolling
          width: { xs: "max-content", md: "100%" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "0.9rem", md: "1rem" },
            minWidth: { xs: "200px", md: "auto" },
            flexShrink: 0,
            pr: { xs: 1, md: 2 },
          }}
        >
          {question.text}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              whiteSpace: "nowrap",
              minWidth: "fit-content",
              flexShrink: 0,
            }}
          >
            Strongly Disagree
          </Typography>

          <Box
            sx={{
              display: "flex",
              minWidth: "fit-content",
              gap: { xs: 0.2, md: 0 },
              flexShrink: 0,
            }}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={
                  <Radio
                    size={isMobile ? "small" : "medium"}
                    checked={response === value.toString()}
                    onChange={(e) =>
                      onResponseChange(question.id, e.target.value)
                    }
                    sx={{
                      color: "#D1D5DB",
                      "&.Mui-checked": {
                        color: "#7C3AED",
                      },
                      p: { xs: 0.3, md: 1 },
                    }}
                  />
                }
                label=""
                sx={{ margin: 0 }}
              />
            ))}
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              whiteSpace: "nowrap",
              minWidth: "fit-content",
              flexShrink: 0,
            }}
          >
            Strongly Agree
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Page Navigation Component
const PageNavigation: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
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

// Navigation Controls Component
const NavigationControls: React.FC<{
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onPageChange: (page: number) => void;
  allQuestionsAnswered: boolean;
  isSubmitted: boolean;
}> = ({
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

// Main Questions Section Component
const QuestionsSection: React.FC<QuestionsSectionProps> = ({
  questions,
  responses,
  onResponseChange,
  currentPage,
  totalPages,
  onPageChange,
  onNext,
  onPrevious,
  onSubmit,
  allQuestionsAnswered,
  isSubmitted,
}) => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent sx={{ p: { xs: 2, md: 4 } }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            mb: { xs: 2, md: 3 },
          }}
        >
          Questions
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 },
          }}
        >
          {questions?.map((question) => (
            <QuestionItem
              key={question.id}
              question={question}
              response={responses[question.id]}
              onResponseChange={onResponseChange}
            />
          ))}
        </Box>

        <NavigationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={onPrevious}
          onNext={onNext}
          onSubmit={onSubmit}
          onPageChange={onPageChange}
          allQuestionsAnswered={allQuestionsAnswered}
          isSubmitted={isSubmitted}
        />
      </CardContent>
    </Card>
  );
};

export default QuestionsSection;
