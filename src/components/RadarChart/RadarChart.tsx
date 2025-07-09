import React from "react";
import { Box, Typography } from "@mui/material";
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import type { RadarDataPoint } from "../../types/results";

interface RadarChartProps {
  data: RadarDataPoint[];
}

const RadarChart: React.FC<RadarChartProps> = ({ data }) => {
  return (
    <Box sx={{ bgcolor: "#f9fafc", borderRadius: 2, p: 3 }}>
      <Box sx={{ height: 400, mb: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart data={data}>
            <PolarGrid stroke="#E5E7EB" />
            <PolarAngleAxis
              dataKey="subject"
              tick={{ fontSize: 12, fill: "#6B7280" }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 5]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Assessment"
              dataKey="A"
              stroke="#7C3AED"
              fill="#7C3AED"
              fillOpacity={0.2}
              strokeWidth={2}
            />
          </RechartsRadarChart>
        </ResponsiveContainer>
      </Box>
      
      {/* Legend */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          px: "12px",
        }}
      >
        {data?.map((item, index) => (
          <Box
            key={`color-${index}`}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                bgcolor: item?.color,
                borderRadius: "50%",
              }}
            />
            <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
              {item?.subject}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RadarChart;
