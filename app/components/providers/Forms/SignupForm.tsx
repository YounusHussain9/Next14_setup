"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { Checkbox, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { signUpFormSchema } from "@/schemas/SignupSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const orgs = [{ name: "Facebook" }, { name: "Google" }, { name: "Microsoft" }, { name: "Apple" }, { name: "Amazon" }];

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      organization: "",
      acceptTerms: false,
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit(() => null)} className="flex flex-col gap-4">
        <div className="w-[300px]">
          <Input type="name" variant="bordered" {...register("name")} label="Name" labelPlacement="outside" placeholder="Name" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="w-[300px]">
          <Input type="tel" variant="bordered" {...register("phone")} label="Phone" labelPlacement="outside" placeholder="Phone" />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <div className="w-[300px]">
          <Input type="email" variant="bordered" {...register("email")} label="Email" labelPlacement="outside" placeholder="Email" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="w-[300px]">
          <Controller
            name="organization"
            control={control}
            render={({ field }) => (
              <Select selectedKeys={["Facebook"]} {...field} placeholder="Select an organization" className="max-w-xs">
                {orgs.map((org, index) => (
                  <SelectItem key={index} value={field.value}>
                    {org.name}
                  </SelectItem>
                ))}
              </Select>
            )}
          />

          {errors.organization && <p className="text-red-500">{errors.organization.message}</p>}
        </div>
        <div>
          <Checkbox size="sm" {...register("acceptTerms")} className=" !accent-black">
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
          {errors.acceptTerms && <p className="text-red-500">{errors.acceptTerms.message}</p>}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default SignupForm;
