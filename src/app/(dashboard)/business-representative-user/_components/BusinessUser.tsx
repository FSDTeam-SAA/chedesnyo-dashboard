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
import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/page-header/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import BusinessRepresentativeUser from "./BusinessRepresentativeUser";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { DeleteModal } from "@/components/Dialog/DeleteModal";

// 💡 TypeScript types for API response
type SalesUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage?: string;
  location?: string;
  verified?: boolean;
  role: string;
  status?: string;
  createdAt: string;
  updatedAt: string;
  stripeAccountId?: string;
};

type SalesUserResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    total: number;
    page: number;
    limit: number;
  };
  data: SalesUser[];
};

// 🧩 All Business Users Table
function AllBusinessUser() {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const session = useSession();
  const TOKEN = session?.data?.user?.accessToken;

  const {
    data: salesUser,
    isLoading,
    error,
    refetch, // ✅ for refreshing table after deletion
  } = useQuery<SalesUserResponse>({
    queryKey: ["salesUser"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/all-user?role=seles`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      if (!res.ok) throw new Error("Failed to fetch sales users");
      return res.json();
    },
    enabled: !!TOKEN, // only fetch if token exists
  });

  const confirmDelete = async () => {
    if (!selectedUserId) return;
    // setIsDeleting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/${selectedUserId}`,
        { method: "DELETE", headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}`, } }
      );

      if (!res.ok) throw new Error("Failed to delete user");

      toast.success("User deleted successfully");
      setDeleteModalOpen(false);
      setSelectedUserId(null);

      // ✅ Refetch after deletion
      refetch();
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    } finally {
      // setIsDeleting(false);
    }
  };

  const salesData: SalesUser[] = salesUser?.data || [];
  const totalResults = salesData.length;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm">
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#0080001A] border-b border-gray-200 rounded-t-lg">
              <TableHead className="font-semibold text-gray-900 text-[18px] py-5 text-center px-6 rounded-tl-lg">
                User ID
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 text-center">
                User Name
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 text-center">
                User Email
              </TableHead>
              <TableHead className="font-semibold text-gray-900 text-[18px] py-4 px-6 rounded-tr-lg text-center">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                  Loading...
                </TableCell>
              </TableRow>
            ) : error ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6 text-red-500">
                  {(error as Error).message}
                </TableCell>
              </TableRow>
            ) : salesData.length > 0 ? (
              salesData.map((item) => (
                <TableRow
                  key={item._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item._id}
                  </TableCell>
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item.firstName} {item.lastName}
                  </TableCell>
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    {item.email}
                  </TableCell>
                  <TableCell className="text-[18px] text-gray-700 py-5 px-6 text-center">
                    <div className="flex justify-center items-center">
                      <Trash2
                        className="w-5 h-5 text-red-600 hover:text-red-700 cursor-pointer transition-colors duration-200"
                        onClick={() => {
                          setSelectedUserId(item._id);
                          setDeleteModalOpen(true);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-6 text-gray-500">
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <DeleteModal
          open={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        // isDeleting={isDeleting}
        />
      </div>

      {/* Pagination */}
      {totalResults > 6 && (
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
                className={`h-9 w-9 ${page === 1
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
      )}
    </div>
  );
}

// 🟢 Main Component
export default function BusinessUser() {
  const [activeTab, setActiveTab] = useState<"all" | "request">("all");

  return (
    <div>
      <div className="flex justify-between items-center">
        <PageHeader
          title="Dashboard"
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Business Representative User" },
          ]}
        />

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
                <p className="text-[16px] ml-5 font-normal text-white mt-1">
                  $12,650
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Toggle Buttons */}
      <div className="flex items-center gap-4 my-[28px]">
        <Button
          onClick={() => setActiveTab("all")}
          className={`px-6 h-[43px] text-sm font-medium ${activeTab === "all"
              ? "bg-[#008000] text-white hover:bg-[#045e04]"
              : "border-[#008000] text-[#008000] bg-white hover:bg-green-50"
            }`}
        >
          All Business User
        </Button>

        <Button
          onClick={() => setActiveTab("request")}
          className={`px-6 h-[43px] text-sm font-medium ${activeTab === "request"
              ? "bg-[#008000] text-white hover:bg-[#045e04]"
              : "border-[#008000] text-[#008000] bg-white hover:bg-green-50"
            }`}
        >
          Request Business User
        </Button>
      </div>

      {/* Conditional Rendering */}
      {activeTab === "all" ? <AllBusinessUser /> : <BusinessRepresentativeUser />}
    </div>
  );
}
