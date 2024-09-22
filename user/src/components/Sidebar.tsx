"use client";
import React from "react";
import {
  Home,
  ArrowUpCircle,
  ArrowDownCircle,
  RefreshCw,
  History,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = React.useState("Dashboard");

  const tabs = [
    { name: "Dashboard", link: "dashboard", icon: <Home size={20} /> },
    { name: "Deposit", link: "deposit", icon: <ArrowDownCircle size={20} /> },
    { name: "Withdraw", link: "withdraw", icon: <ArrowUpCircle size={20} /> },
    { name: "Transfer", link: "transfer", icon: <RefreshCw size={20} /> },
    {
      name: "History",
      link: "history",
      icon: <History size={20} />,
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 pt-6 h-screen bg-[#1C1C1C] border-r border-gray-200 flex flex-col transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 text-gray-600"
        onClick={toggleSidebar}
      >
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </Button>

      <nav className="flex-1 mt-16">
        <ul>
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Link href={`/${tab.link}`}>
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`w-full flex items-center px-4 py-3 text-left transition-colors duration-200
                  ${
                    activeTab === tab.name
                      ? "bg-[#343434] text-green-600 border-r-4 border-green-600"
                      : "text-gray-400"
                  }`}
                >
                  <span className="mr-3">{tab.icon}</span>
                  {isOpen && (
                    <span className="text-sm font-medium">{tab.name}</span>
                  )}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
