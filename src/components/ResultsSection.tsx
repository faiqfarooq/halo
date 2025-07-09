import React, { useRef, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import RadarChart from "./RadarChart";
import SummarySection from "./SummarySection";
import ShareMenu from "./ShareMenu";
import ExportActions from "./ExportActions";
import { exportToPDF } from "../utils/exportUtils";
import type { ResultsSectionProps } from "../types/results";

const ResultsSection: React.FC<ResultsSectionProps> = ({ radarData }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [shareAnchorEl, setShareAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Function to export as PDF
  const handleExportPDF = async () => {
    const result = await exportToPDF(contentRef.current);
    setSnackbarMessage(result.message);
    setSnackbarOpen(true);
  };

  // Function to handle share button click
  const handleShareClick = (event: React.MouseEvent<HTMLElement>) => {
    setShareAnchorEl(event.currentTarget);
  };

  // Function to close share menu
  const handleShareClose = () => {
    setShareAnchorEl(null);
  };

  // Function to handle notifications
  const handleNotification = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }} ref={contentRef}>
        {/* Flex Layout: Results on Left, Summary on Right */}
        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side - Results with Graph - 70% width on desktop */}
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, fontSize: "1.5rem", mb: 3 }}
            >
              Results
            </Typography>

            <RadarChart data={radarData} />
          </Box>

          {/* Right Side - Summary with Export Buttons - 30% width on desktop */}
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
            }}
          >
            <ExportActions
              onExportPDF={handleExportPDF}
              onShareClick={handleShareClick}
            />

            <SummarySection data={radarData} />
          </Box>
        </Box>
      </CardContent>

      {/* Share Menu */}
      <ShareMenu
        anchorEl={shareAnchorEl}
        open={Boolean(shareAnchorEl)}
        onClose={handleShareClose}
        radarData={radarData}
        onNotification={handleNotification}
      />

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ResultsSection;
