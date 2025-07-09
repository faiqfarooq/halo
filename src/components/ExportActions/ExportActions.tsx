import React from "react";
import { Box, Button } from "@mui/material";
import { GetApp, Share } from "@mui/icons-material";

interface ExportActionsProps {
  onExportPDF: () => void;
  onShareClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const ExportActions: React.FC<ExportActionsProps> = ({
  onExportPDF,
  onShareClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-end" },
        alignItems: "center",
        mb: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Button
          variant="outlined"
          startIcon={<GetApp />}
          size="small"
          onClick={onExportPDF}
          sx={{
            fontSize: "0.875rem",
            textTransform: "none",
          }}
        >
          Export as PDF
        </Button>
        <Button
          variant="outlined"
          startIcon={<Share />}
          size="small"
          onClick={onShareClick}
          sx={{
            fontSize: "0.875rem",
            textTransform: "none",
          }}
        >
          Share
        </Button>
      </Box>
    </Box>
  );
};

export default ExportActions;
