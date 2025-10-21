/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceLine, ReferenceDot } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
import { Info, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const chartData = [
  { month: "Jan", earnings: 60, comparison: 80 },
  { month: "Feb", earnings: 150, comparison: 120 },
  { month: "Mar", earnings: 145, comparison: 140 },
  { month: "Apr", earnings: 165, comparison: 180 },
  { month: "May", earnings: 180, comparison: 160 },
  { month: "June", earnings: 234, comparison: 200 },
  { month: "July", earnings: 220, comparison: 190 },
  { month: "Aug", earnings: 200, comparison: 170 },
  { month: "Sep", earnings: 235, comparison: 160 },
  { month: "Oct", earnings: 215, comparison: 150 },
  { month: "Nov", earnings: 180, comparison: 140 },
  { month: "Dec", earnings: 190, comparison: 130 },
];

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "#0D9488",
  },
  comparison: {
    label: "Comparison",
    color: "#D1D5DB",
  },
} satisfies ChartConfig;

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200">
        <p className="text-xs text-gray-500 mb-1">Daily</p>
        <p className="text-lg font-bold text-gray-900">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function EarningsOverviewChart() {
  return (
    <Card className="w-full shadow-sm mt-[48px]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-gray-900">
              Earnings Overview
            </h3>
            <Info className="h-4 w-4 text-gray-400" />
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-xs text-gray-600 border-gray-300"
          >
            <Calendar className="h-3 w-3 mr-1" />
            March, 2025
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pb-4">
        <ChartContainer config={chartConfig} className="h-[280px] w-full">
          <AreaChart
            data={chartData}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0D9488" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0D9488" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="colorComparison" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D1D5DB" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#D1D5DB" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid 
              strokeDasharray="0" 
              stroke="#F3F4F6" 
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              ticks={[50, 100, 150, 200]}
              tickFormatter={(value) => `$${value}`}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Reference line and dot for June */}
            <ReferenceLine
              x="June"
              stroke="#0D9488"
              strokeDasharray="3 3"
              strokeWidth={1}
            />
            
            <ReferenceDot
              x="June"
              y={234}
              r={6}
              fill="#0D9488"
              stroke="#fff"
              strokeWidth={3}
            />

            {/* Comparison area (gray) */}
            <Area
              dataKey="comparison"
              type="monotone"
              stroke="#D1D5DB"
              strokeWidth={2}
              fill="url(#colorComparison)"
              fillOpacity={1}
            />

            {/* Earnings area (teal) */}
            <Area
              dataKey="earnings"
              type="monotone"
              stroke="#0D9488"
              strokeWidth={2.5}
              fill="url(#colorEarnings)"
              fillOpacity={1}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default EarningsOverviewChart;