"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Checkbox, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";

const orgs = [{ name: "Facebook" }, { name: "Google" }, { name: "Microsoft" }, { name: "Apple" }, { name: "Amazon" }];

const SignupForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <Input type="name" variant="bordered" label="Name" labelPlacement="outside" placeholder="Name" className="w-[300px]" />
      <Input type="password" variant="bordered" label="Password" labelPlacement="outside" placeholder="Password" className="w-[300px]" />
      <Input type="email" variant="bordered" label="Email" labelPlacement="outside" placeholder="Email" className="w-[300px]" />
      <Select label="Select an organization" placeholder="Select an organization" labelPlacement="outside" className="max-w-xs">
        {orgs.map((org, index) => (
          <SelectItem key={index}>{org.name}</SelectItem>
        ))}
      </Select>
      <Checkbox size="sm">
        I agree to the{" "}
        <Link
          href={"/google.com"}
          className="hover:underline"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <strong>Terms and Conditions</strong>
        </Link>
      </Checkbox>

      <Button>Submit</Button>
    </div>
  );
};

export default SignupForm;
