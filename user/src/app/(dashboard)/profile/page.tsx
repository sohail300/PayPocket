"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, Trash2 } from "lucide-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Profile() {
  const [profileCompletion, setProfileCompletion] = useState(80);

  return (
    <div className="container mx-auto p-4 pt-12">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <Card className="mb-6 relative">
        <CardHeader>
          <CardTitle>Personal Informations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/sample-person.jpeg" alt="Profile picture" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex flex-col">
              <Button className="bg-violet-600 hover:bg-violet-700">
                Upload new picture
              </Button>
              <Button
                variant="outline"
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <Input id="firstName" />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <Input id="lastName" />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone number
              </label>
              <Input id="phone" />
            </div>
          </div>

          <Card className="mb-6 bg-[#5419FB] text-white absolute top-0 right-6 w-1/3">
            <CardContent className="p-6 flex justify-between">
              <div className="w-24 h-24 mr-4">
                <CircularProgressbar
                  value={profileCompletion}
                  text={`${profileCompletion}%`}
                  strokeWidth={7}
                  styles={buildStyles({
                    textSize: "28px",
                    pathColor: "white",
                    textColor: "white",
                    trailColor: "rgba(255, 255, 255, 0.2)",
                  })}
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Complete profile</h2>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 overflow-x-auto py-2">
            {["Francine", "Cyndy L", "Roselle", "Tanner S"].map(
              (name, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center min-w-[80px]"
                >
                  <Avatar className="w-12 h-12 mb-2">
                    <AvatarImage src={`https://picsum.photos/200`} alt={name} />
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs">{name}</span>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
