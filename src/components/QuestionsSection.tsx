import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import QuestionItem from "./QuestionItem";
import NavigationControls from "./NavigationControls";
import type { Question, QuestionResponse } from "../types/question";

interface QuestionsSectionProps {
  questions: Question[];
  responses: QuestionResponse;
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
