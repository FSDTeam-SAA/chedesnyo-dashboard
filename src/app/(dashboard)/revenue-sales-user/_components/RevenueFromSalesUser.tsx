"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageHeader } from "@/components/page-header/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

// Dummy data for the table
const salesData = [
  {
    userId: "112",
    userName: "Mr. X",
    totalServicePrice: "$180",
    revenue: "$18",
  },
  {
    userId: "112",
    userName: "Mr. X",
    totalServicePrice: "$180",
    revenue: "$18",
  },
  {
    userId: "112",
    userName: "Mr. X",
    totalServicePrice: "$180",
    revenue: "$18",
  },
  {
    userId: "112",
    userName: "Mr. X",
    totalServicePrice: "$180",
    revenue: "$18",
  },
  {
    userId: "112",
    userName: "Mr. X",
    totalServicePrice: "$180",
    revenue: "$18",
  },
  {
    userId: "113",
    userName: "Mr. Y",
    totalServicePrice: "$220",
    revenue: "$22",
  },
  {
    userId: "114",
    userName: "Mr. Z",
    totalServicePrice: "$150",
    revenue: "$15",
  },
  {
    userId: "115",
    userName: "Ms. A",
    totalServicePrice: "$190",
    revenue: "$19",
  },
];

function RevenueFromSalesUser() {
  const totalResults = salesData.length;

  return (
    <div>
      <div className="flex justify-between items-center mb-[48px]">
        <div>
          <PageHeader
            title="Dashboard"
            breadcrumbs={[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Revenue from Sales user" },
            ]}
          />
        </div>
        <div>
          <Card className="bg-[#008000] shadow-sm hover:shadow-md transition-shadow rounded-lg w-[248px] h-[85px]">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <p className="font-semibold text-base leading-[120%] text-white">
                      Total Revenue
                    </p>
                  </div>
                  <p className="text-[16px] ml-5 font-normal text-white mt-1">$12,650</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="w-full bg-white rounded-lg shadow-sm">
        {/* Table Container */}
        <div className="overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-green-50 border-b border-gray-200 rounded-t-lg">
                <TableHead className="font-semibold text-gray-900 text-[18px] py-5 text-center px-6 rounded-tl-lg">
                  User ID
                </TableHead>
                <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 text-center">
                  User Name
                </TableHead>
                <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 text-center">
                  Total Service Price($)
                </TableHead>
                <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 rounded-tr-lg text-center">
                  Revenue (15%)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {salesData.map((item, index) => (
                <TableRow
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item.userId}
                  </TableCell>
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item.userName}
                  </TableCell>
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item.totalServicePrice}
                  </TableCell>
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item.revenue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Static Pagination Design Only */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Showing 1 to {totalResults} of {totalResults} results
          </p>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 bg-white border-gray-300"
              disabled
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {[1, 2, 3, "...", 10].map((page, index) => (
              <Button
                key={index}
                variant={page === 1 ? "default" : "outline"}
                size="icon"
                className={`h-9 w-9 ${
                  page === 1
                    ? "bg-green-700 hover:bg-green-800 text-white border-green-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
                disabled
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 bg-white border-gray-300"
              disabled
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RevenueFromSalesUser;
