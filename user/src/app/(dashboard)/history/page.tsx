import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Upload } from "lucide-react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TransactionHistory = () => {
  const transactions = [
    {
      id: 1,
      name: "Withdraw",
      date: "Jan 29, 2022",
      time: "08:00 PM",
      transactionId: "PMX09812",
      amount: -6300.0,
      status: "Pending",
      recipient: { name: "", email: "" },
    },
    {
      id: 2,
      name: "Deposit",
      date: "Jan 25, 2022",
      time: "09:15 AM",
      transactionId: "PMX0979",
      amount: 5890.15,
      status: "Success",
      recipient: { name: "", email: "" },
    },
    {
      id: 3,
      name: "Deposit",
      date: "Jan 25, 2022",
      time: "05:45 AM",
      transactionId: "OVF19244",
      amount: 600.0,
      status: "Success",
      recipient: { name: "", email: "" },
    },
    {
      id: 4,
      name: "Withdraw",
      date: "Jan 23, 2022",
      time: "09:00 PM",
      transactionId: "AMX09871",
      amount: -1243.0,
      status: "Pending",
      recipient: { name: "", email: "" },
    },
    {
      id: 5,
      name: "Send to Antonio",
      date: "Jan 15, 2022",
      time: "10:15 AM",
      transactionId: "PMX09873",
      amount: -123.0,
      status: "Failed",
      recipient: { name: "Antonio", email: "antonio@profile.com" },
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800">
            Pending
          </Badge>
        );
      case "Success":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800">
            Success
          </Badge>
        );
      case "Failed":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800">
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6 pt-12">
      <h1 className="text-3xl font-bold mb-6">History</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for transactions..."
            className="pl-10 pr-4 py-2 w-64"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5" />
        </div>
        <div className="flex space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[160px]">
              <Filter className="h-4 w-4" />
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Withdrawal</SelectItem>
              <SelectItem value="deposit">Deposit</SelectItem>
              <SelectItem value="transfer">Transfer</SelectItem>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center">
            <Upload className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Recipient</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="flex items-center">
                <div className="">
                  <Image
                    className="w-10 h-10 rounded-full bg-gray-200 mr-3"
                    width={24}
                    height={24}
                    src={
                      transaction.name === "Withdraw"
                        ? "/red-arrow.png"
                        : transaction.name === "Deposit"
                        ? "/green-arrow.png"
                        : "/sample-person.jpeg"
                    }
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="font-semibold">{transaction.name}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>{transaction.date}</div>
                <div className="text-sm text-gray-500">{transaction.time}</div>
              </TableCell>
              <TableCell>{transaction.transactionId}</TableCell>
              <TableCell className="font-medium">
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </TableCell>
              <TableCell>{getStatusBadge(transaction.status)}</TableCell>
              <TableCell>
                {transaction.recipient.name !== "" ? (
                  <>
                    <div>{transaction.recipient.name}</div>
                    <div className="text-sm text-gray-500">
                      {transaction.recipient.email}
                    </div>
                  </>
                ) : (
                  <span className="text-gray-400">—————</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TransactionHistory;
