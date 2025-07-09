import React, { useState } from "react";
import { Container, Typography, Box, LinearProgress } from "@mui/material";
import {
  QuestionsSection,
  ResultsSection,
  AIFeedbackSection,
} from "../components";

interface Question {
  id: number;
  text: string;
  value: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: "I am confident in my ability to learn new concepts.",
    value: "",
  },
  {
    id: 2,
    text: "I feel comfortable asking for help when I'm stuck.",
    value: "",
  },
  {
    id: 3,
    text: "I believe I can overcome challenges in my studies.",
    value: "",
  },
  { id: 4, text: "I am good at managing my time effectively.", value: "" },
  {
    id: 5,
    text: "I can stay focused during long study sessions.",
    value: "",
  },
  {
    id: 6,
    text: "I actively seek feedback to improve my performance.",
    value: "",
  },
  {
    id: 7,
    text: "I can adapt my learning strategies when needed.",
    value: "",
  },
  {
    id: 8,
    text: "I feel motivated to achieve my academic goals.",
    value: "",
  },
  {
    id: 9,
    text: "I can handle stress and pressure effectively.",
    value: "",
  },
  {
    id: 10,
    text: "I take responsibility for my own learning progress.",
    value: "",
  },
];

const radarData = [
  { subject: "Confidence", A: 4, fullMark: 5, color: "#37d39a" },
  { subject: "Collaboration", A: 4.5, fullMark: 5, color: "#f9b927" },
  { subject: "Motivation", A: 3.5, fullMark: 5, color: "#f97216" },
  { subject: "Stress Management", A: 2.5, fullMark: 5, color: "#EF4444" },
  { subject: "Time Management", A: 3, fullMark: 5, color: "#8b5cf6" },
];

const Home: React.FC = () => {
  const [responses, setResponses] = useState<{ [key: number]: string }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const questionsPerPage = 4;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Calculate progress based on answered questions
  const calculateProgress = (responses: { [key: number]: string }) => {
    const answeredCount = Object.keys(responses).filter(
      (key) => responses[parseInt(key)] !== ""
    ).length;
    return Math.round((answeredCount / questions.length) * 100);
  };

  const [progress, setProgress] = useState(0);

  // Check if all questions are answered
  const areAllQuestionsAnswered = () => {
    return questions.every(
      (question) => responses[question.id] && responses[question.id] !== ""
    );
  };

  const handleSubmit = () => {
    if (areAllQuestionsAnswered()) {
      setIsSubmitted(true);
    }
  };

  const handleResponseChange = (questionId: number, value: string) => {
    const newResponses = { ...responses, [questionId]: value };
    setResponses(newResponses);
    setProgress(calculateProgress(newResponses));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get current questions for the page
  const getCurrentQuestions = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    return questions.slice(startIndex, endIndex);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Title Section */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
            Learner Success Assessment
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Please answer the following questions to help us understand your
            learning style and needs.
          </Typography>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              Progress
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                width: "100%",
                height: 16,
                mx: "12px",
                borderRadius: 4,
                bgcolor: "grey.200",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 4,
                },
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ minWidth: {xs:"110px",sm:"126px"} }}
            >
              {progress}% Complete
            </Typography>
          </Box>
        </Box>

        {/* Three-Box Layout */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {/* Box 1: Questions Section - Full Width */}
          <Box sx={{ width: "100%" }}>
            <QuestionsSection
              questions={getCurrentQuestions()}
              responses={responses}
              onResponseChange={handleResponseChange}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSubmit={handleSubmit}
              allQuestionsAnswered={areAllQuestionsAnswered()}
              isSubmitted={isSubmitted}
            />
          </Box>

          {/* Box 2: Results Section - Full Width - Only show after submission */}
          {isSubmitted && (
            <Box sx={{ width: "100%" }}>
              <ResultsSection radarData={radarData} />
            </Box>
          )}

          {/* Box 3: AI Feedback Section - Full Width - Only show after submission */}
          {isSubmitted && (
            <Box sx={{ width: "100%" }}>
              <AIFeedbackSection />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
