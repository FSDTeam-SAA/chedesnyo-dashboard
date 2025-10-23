"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import { PageHeader } from "@/components/page-header/PageHeader";

// Dummy data for the table
const assignmentData = [
  {
    id: 1,
    title: "Web Development",
    sellerName: "Darrell Steward",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Darrell",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  {
    id: 2,
    title: "Web Development",
    sellerName: "Theresa Webb",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Theresa",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  {
    id: 3,
    title: "Web Development",
    sellerName: "Cameron Williamson",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cameron",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  {
    id: 4,
    title: "Web Development",
    sellerName: "Ronald Richards",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ronald",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  {
    id: 5,
    title: "Web Development",
    sellerName: "Floyd Miles",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Floyd",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  {
    id: 5,
    title: "Web Development",
    sellerName: "Floyd Miles",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Floyd",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  {
    id: 5,
    title: "Web Development",
    sellerName: "Floyd Miles",
    sellerAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Floyd",
    price: "$8.00",
    discountPrice: "$0.25",
    date: "04/21/2025",
    time: "03:18pm",
  },
  
];

function AssignmentRequest() {
  const handleApprove = (id: number, name: string) => {
    console.log(`Approved assignment ${id} for ${name}`);
  };

  const handleCancel = (id: number, name: string) => {
    console.log(`Cancelled assignment ${id} for ${name}`);
  };

  const handleDownload = (id: number, title: string) => {
    console.log(`Downloading assignment ${id}: ${title}`);
  };

  return (
    <div className="">
      {/* Table Container */}
      <div className="mb-[48px]">
        <PageHeader
          title="Dashboard"
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Assignments Request" },
          ]}
        />
      </div>
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#0080001A] border-b border-gray-200">
              <TableHead className="font-semibold text-gray-900 text-[18px] py-5 px-6 rounded-tl-lg">
                Assignment Title
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6 text-center">
                Seller Name
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6">
                Price
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6">
                Discount Price
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-base py-4 px-6">
                Date & Time
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 rounded-tr-lg text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assignmentData.map((item) => (
              <TableRow
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  {item.title}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  <div className="flex items-center gap-3 justify-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage
                        src={item.sellerAvatar}
                        alt={item.sellerName}
                      />
                      <AvatarFallback>
                        {item.sellerName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{item.sellerName}</span>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  {item.price}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  {item.discountPrice}
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6">
                  <div>
                    <div>{item.date}</div>
                    <div className="text-xs text-gray-500">{item.time}</div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-gray-700 py-5 px-6 ">
                  <div className="flex items-center gap-2 justify-center">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1 h-7 rounded"
                      onClick={() => handleApprove(item.id, item.sellerName)}
                    >
                      Approved
                    </Button>
                    <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 h-7 rounded"
                      onClick={() => handleCancel(item.id, item.sellerName)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white p-1 h-7 w-7 rounded"
                      onClick={() => handleDownload(item.id, item.title)}
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

      {/* Pagination — static design only */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">Showing 1 to 5 of 5 results</p>

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
  );
}

export default AssignmentRequest;
