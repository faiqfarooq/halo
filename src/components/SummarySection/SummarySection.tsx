import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import type { RadarDataPoint } from "../../types/results";

interface SummarySectionProps {
  data: RadarDataPoint[];
  summaryText?: string;
}

const SummarySection: React.FC<SummarySectionProps> = ({ 
  data, 
  summaryText = "Based on your responses, your strengths lie in your motivation and collaboration skills. Areas for improvement include time management and stress handling." 
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        px: "12px",
        bgcolor: "#f9fafc",
        borderRadius: 2,
        p: 3,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        Summary
      </Typography>
      
      {data?.map((item, index) => (
        <Box key={`summary-${index}`}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "0.875rem", fontWeight: 500 }}
            >
              {item?.subject}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, fontSize: "0.875rem" }}
            >
              {item?.A}/{item?.fullMark}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={80}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: "#E5E7EB",
              "& .MuiLinearProgress-bar": {
                bgcolor: item?.color || "#7C3AED",
                borderRadius: 4,
              },
            }}
          />
        </Box>
      ))}

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 3, lineHeight: 1.6, fontSize: "0.875rem" }}
      >
        {summaryText}
      </Typography>
    </Box>
  );
};

export default SummarySection;
