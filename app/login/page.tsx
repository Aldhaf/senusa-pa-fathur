"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLoginButton = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
    router.push("/createreport");
  };

  return (
    <div className="grid grid-cols-3 h-screen">
      <div className="grid col-span-2 p-5 bg-gray-200">this is background</div>
      <div className="flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Senusa Report Apps</CardTitle>
            <CardDescription>
              Apps for generate comprehensive variant report
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLoginButton}>
              <div className="mb-2">
                <Label>Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                ></Input>
              </div>

              <div className="mb-2">
                <Label>Password</Label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  placeholder="Enter your email"
                ></Input>
              </div>

              <Button
                type="submit"
                variant="outline"
                className="w-full mt-5 hover:bg-violet-800 hover:text-white"
              >
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="flex w-full justify-between items-center justi">
              <small>Forget Password</small>
              <Button variant="ghost">Click Here</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
