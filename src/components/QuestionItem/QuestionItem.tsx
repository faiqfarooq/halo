import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CustomRadioButton from "../CustomRadioButton";
import type { Question } from "../../types/question";

interface QuestionItemProps {
  question: Question;
  response: string;
  onResponseChange: (questionId: number, value: string) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({
  question,
  response,
  onResponseChange,
}) => {
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
          minWidth: { xs: "600px", md: "auto" },
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
              alignItems: "center",
            }}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <CustomRadioButton
                key={value}
                value={value.toString()}
                checked={response === value.toString()}
                onChange={(selectedValue) =>
                  onResponseChange(question.id, selectedValue)
                }
                size={isMobile ? "small" : "medium"}
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

export default QuestionItem;
