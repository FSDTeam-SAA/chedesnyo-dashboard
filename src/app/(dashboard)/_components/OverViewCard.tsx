"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PageHeader } from "@/components/page-header/PageHeader";

function OverViewCard() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Products" },
        ]}
        actionButton={{
          label: "Add Product",
          href: "/products/new",
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[65px]">
        {/* Total Revenue Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium">
                  Total Revenue
                </p>
                <p className="text-2xl font-bold text-gray-900">$12,650</p>
              </div>
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/images/overviewcard1.png"
                  alt="Total Revenue"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Business User Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium">
                  Total Business Users
                </p>
                <p className="text-2xl font-bold text-gray-900">12,650</p>
              </div>
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/images/overviewcard2.png"
                  alt="Business Users"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Total Sales User Card */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-500 font-medium">
                  Total Sales User
                </p>
                <p className="text-2xl font-bold text-gray-900">12,650</p>
              </div>
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/images/overviewcard3.png"
                  alt="Business Users"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default OverViewCard;
