"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import {
  ArrowUpCircle,
  ArrowDownCircle,
  RefreshCw,
  History,
  Calendar,
} from "lucide-react";
import RecentTransactions from "@/components/RecentTransactions";
import Wallet from "@/components/Wallet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserDashboard = () => {
  const transactions = [
    {
      id: 1,
      name: "Withdrawal",
      date: "Jan 16, 2022",
      amount: -835.0,
      status: "Failure",
      type: "withdraw",
    },
    {
      id: 2,
      name: "Deposited",
      date: "Jan 14, 2022",
      amount: 150.0,
      status: "Pending",
      type: "deposit",
    },
    {
      id: 3,
      name: "Sent to Antonio",
      date: "Jan 13, 2022",
      amount: 5200.0,
      status: "Success",
      type: "transfer",
    },
  ];

  const actionItems = [
    {
      icon: <ArrowDownCircle size={24} />,
      label: "Deposit",
      link: "/deposit",
      bgColor: "bg-green-50 hover:bg-green-100",
      textColor: "text-green-700",
    },
    {
      icon: <ArrowUpCircle size={24} />,
      label: "Withdraw",
      link: "/withdraw",
      bgColor: "bg-red-50 hover:bg-red-100",
      textColor: "text-red-700",
    },
    {
      icon: <RefreshCw size={24} />,
      label: "Transfer",
      link: "/transfer",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      textColor: "text-blue-700",
    },
    {
      icon: <History size={24} />,
      label: "History",
      link: "/history",
      bgColor: "bg-purple-50 hover:bg-purple-100",
      textColor: "text-purple-700",
    },
  ];

  const [timeRange, setTimeRange] = useState("7d");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(timeRange);
  }, [timeRange]);

  const fetchData = (range) => {
    const mockData = generateMockData(range);
    setData(mockData);
  };

  const generateMockData = (range) => {
    const now = new Date();
    const data = [];
    let days;

    switch (range) {
      case "today":
        days = 1;
        break;
      case "7d":
        days = 7;
        break;
      case "30d":
        days = 30;
        break;
      default:
        days = 7;
    }

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      data.push({
        date: date.toISOString().split("T")[0],
        amount: Math.floor(Math.random() * 1000) + 500,
      });
    }

    return data;
  };

  return (
    <div className="container mx-auto p-6 pt-10">
      <h1 className="text-3xl font-bold mb-6">Hey, User</h1>

      <div className="grid grid-cols-5 gap-6 mb-6">
        <div className="col-span-3 space-y-8">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Money Flow</CardTitle>
                <Select defaultValue="1">
                  <SelectTrigger className="w-[180px]">
                    <Calendar className="h-5 w-5 mr-2" />
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Today</SelectItem>
                    <SelectItem value="7">Last 7 Days</SelectItem>
                    <SelectItem value="30">Last 30 Days</SelectItem>
                    <SelectItem value="180">Last 6 Months</SelectItem>
                    <SelectItem value="365">Last 1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <RecentTransactions transactions={transactions} />
        </div>

        <div className="col-span-2 space-y-8">
          <Wallet />

          <div className="grid grid-cols-2 gap-4">
            {actionItems.map((item, index) => (
              <Link href={item.link} key={index}>
                <Button
                  variant="outline"
                  className={`flex flex-col items-center justify-center h-20 w-full ${item.bgColor} ${item.textColor} border-none`}
                >
                  {item.icon}
                  <span className="mt-2">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
