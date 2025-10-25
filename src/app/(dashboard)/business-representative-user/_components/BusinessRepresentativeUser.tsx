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
// import { PageHeader } from "@/components/page-header/PageHeader";
// import { Card, CardContent } from "@/components/ui/card";

// Updated data for the table matching the images
const salesData = [
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
    {
        userId: "112",
        userName: "Mr. X",
        email: "example123@gmail.com",
        businessName: "Agency",
        industry: "Healthcare",
        kvkVatNumber: "KVK/VAT Number"
    },
];

function BusinessRepresentativeUser() {
    const totalResults = 12;
    const currentPage = 1;
    const resultsPerPage = 5;

    return (
        <div>
            <div className="w-full bg-white rounded-lg shadow-sm">
                {/* Table Container */}
                <div className="overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-[#0080001A] border-b border-gray-200">
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-5 text-center px-4">
                                    User ID
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-4 px-4 text-center">
                                    User Name
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-4 px-4 text-center">
                                    User Email
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-4 px-4 text-center">
                                    Business Name
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-4 px-4 text-center">
                                    Industry
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-4 px-4 text-center">
                                    KVK/VAT Number
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 text-[14px] py-4 px-4 text-center">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {salesData.slice(0, 5).map((item, index) => (
                                <TableRow
                                    key={index}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        {item.userId}
                                    </TableCell>
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        {item.userName}
                                    </TableCell>
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        {item.email}
                                    </TableCell>
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        {item.businessName}
                                    </TableCell>
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        {item.industry}
                                    </TableCell>
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        {item.kvkVatNumber}
                                    </TableCell>
                                    <TableCell className="text-[14px] text-gray-700 py-5 px-4 text-center">
                                        <div className="flex justify-center items-center gap-2">
                                            <Button
                                                variant="outline"
                                                className="bg-white border-green-600 text-green-600 hover:bg-green-50 px-4 h-8 text-xs font-medium"
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="bg-white border-red-500 text-red-500 hover:bg-red-50 px-4 h-8 text-xs font-medium"
                                            >
                                                Reject
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
                        Showing {currentPage} to {resultsPerPage} of {totalResults} results
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

                        <Button
                            variant="default"
                            size="icon"
                            className="h-9 w-9 bg-green-600 hover:bg-green-700 text-white border-green-600"
                        >
                            1
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        >
                            2
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        >
                            3
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            disabled
                        >
                            ...
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        >
                            8
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 bg-white border-gray-300"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessRepresentativeUser;