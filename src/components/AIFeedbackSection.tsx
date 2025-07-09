import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

const AIFeedbackSection: React.FC = () => {
  return (
    <Card>
      <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, mb: 3, fontSize: "1.5rem" }}
        >
          AI Feedback
        </Typography>

        <Box sx={{ display: "flex", gap: { xs: 2, sm: 3 } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                bgcolor: "#10B981",
                height: "12px",
                width: "12px",
                zIndex: 1,
                borderRadius: "50%",
                position: "absolute",
                top: { xs: "12%", sm: "18%", md: "22%" },
                right: "5%",
              }}
            />
            <Avatar
              sx={{
                width: { xs: 40, sm: 50, md: 60 },
                height: { xs: 40, sm: 50, md: 60 },
                bgcolor: "#fff",
                color: "#262d3a",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: ".55rem", sm: ".65rem", md: "0.75rem" },
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                MAI
                <br />
                Avatar
              </Typography>
            </Avatar>
          </Box>
          <Box
            sx={{
              flex: 1,
              bgcolor: "#f9fafc",
              borderRadius: 2,
              p: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Typography variant="body1">EduAI Assistant</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Hello! Based on your assessment, it looks like you're a highly
              motivated student. That's fantastic! To help you reach your full
              potential, I'd recommend focusing on time management strategies.
              Breaking down large tasks into smaller, manageable chunks can make
              a big difference. Would you like me to share some resources on
              that?
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderRadius: 2,
                  bgcolor: "#7C3AED",
                  fontSize: "0.875rem",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#5B21B6" },
                }}
              >
                Yes, please!
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderRadius: 2,
                  fontSize: "0.875rem",
                  textTransform: "none",
                }}
              >
                No, thanks
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AIFeedbackSection;
