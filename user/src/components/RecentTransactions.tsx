import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Transaction } from "@/types/interfaces";

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions = ({ transactions }: RecentTransactionsProps) => {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="">
                    <Image
                      className="w-10 h-10 rounded-full bg-gray-200 mr-3"
                      width={24}
                      height={24}
                      src={
                        transaction.type === "withdraw"
                          ? "/red-arrow.png"
                          : transaction.type === "deposit"
                          ? "/green-arrow.png"
                          : transaction.type === "transfer"
                          ? "/sample-person.jpeg"
                          : ""
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-gray-500 flex">
                      <CalendarDays className=" mr-2" size={18} />
                      {transaction.date}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div
                    className={`font-medium ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : "-"}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                  <Badge
                    variant={
                      transaction.status === "Success"
                        ? "success"
                        : transaction.status === "Pending"
                        ? "pending"
                        : transaction.status === "Failure"
                        ? "failure"
                        : "default"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
          <Link href={"/history"}>
            <Button variant="link" className="mt-4 w-full">
              View all →
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentTransactions;
