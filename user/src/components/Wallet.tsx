import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye } from "lucide-react";
import VisaSmartChip from "@/components/SmartChip";

const Wallet = () => {
  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className=" text-left w-full">Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#5419FB] text-white rounded-lg p-4 mb-4 h-56 relative">
            <div className="flex justify-between items-center absolute top-4 w-[92%]">
              <VisaSmartChip />
              <span>PayPocket</span>
            </div>

            <div className="flex justify-between items-end absolute bottom-4 w-[92%]">
              <div className="">
                <span className="text-sm flex items-center mb-2 text-gray-200">
                  <span>Balance</span>
                  <Eye size={20} className="ml-2" />
                </span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold mr-2">$24,098.00</span>
                </div>
              </div>
              <span className="font-bold text-xl">VISA</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="font-semibold text-lg">Balance</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Unlocked balance</span>
              <span>$24,098.00</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Locked Balance</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Balance</span>
              <span>$24,098.00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;
