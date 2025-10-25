"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { PageHeader } from "@/components/page-header/PageHeader";
import { useQuery } from "@tanstack/react-query";

type Course = {
  _id: string;
  title: string;
  level: string;
  thumbnail: string;
  introductionVideo: string;
  courseVideo: string;
  duration: string;
  targetAudience: string;
  language: string;
  modules: number;
  extraFile: string;
  price: number;
  discount: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

function CoursesRequest() {
  const [page, setPage] = useState(1);
  const limit = 7;

  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", page],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/course?page=${page}&limit=${limit}`
      );
      if (!res.ok) throw new Error("Failed to fetch courses");
      return res.json();
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10">Error: {(error as Error).message}</p>;

  const courses: Course[] = data?.data || [];
  const totalResults = data?.meta?.total || 0;
  const totalPages = Math.ceil(totalResults / limit);

  const handleApprove = (id: string, title: string) => {
    console.log(`Approved course ${id}: ${title}`);
  };

  const handleCancel = (id: string, title: string) => {
    console.log(`Cancelled course ${id}: ${title}`);
  };

  const handleDownload = (id: string, title: string, file: string) => {
    console.log(`Downloading course ${id}: ${title}`);
    if (file) window.open(file, "_blank");
  };

  return (
    <div className="">
      {/* Table Container */}
      <div className="mb-[48px]">
        <PageHeader
          title="Dashboard"
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Courses Request" },
          ]}
        />
      </div>
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#0080001A] border-b border-gray-200">
              <TableHead className="font-semibold text-gray-900 text-[18px] py-5 px-6 rounded-tl-lg">
                Courses Title
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6 text-center">
                Level
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6">
                Price
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6">
                Discount
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6">
                Status
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 rounded-tr-lg text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course) => (
              <TableRow
                key={course._id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  {course.title}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6 text-center">
                  {course.level}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  ${course.price}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  {course.discount}%
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  {course.status}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6 text-center">
                  <div className="flex items-center gap-2 justify-center">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 h-7 rounded"
                      onClick={() => handleApprove(course._id, course.title)}
                    >
                      Approved
                    </Button>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 h-7 rounded"
                      onClick={() => handleCancel(course._id, course.title)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 w-7 rounded"
                      onClick={() => handleDownload(course._id, course.title, course.extraFile)}
                    >
                      <Download className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Showing {(page - 1) * limit + 1} to{" "}
          {Math.min(page * limit, totalResults)} of {totalResults} results
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 bg-white border-gray-300"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Button
              key={p}
              variant={p === page ? "default" : "outline"}
              size="icon"
              className={`h-9 w-9 ${
                p === page
                  ? "bg-green-700 hover:bg-green-800 text-white border-green-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setPage(p)}
            >
              {p}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 bg-white border-gray-300"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CoursesRequest;
