import * as z from "zod";

export const signUpFormSchema = z.object({
  name: z.string().min(1, "Please enter your full name").max(50, "Full name must not exceed 50 characters"),
  email: z.string().min(1, "Please enter email address").email("Please enter a valid email address").max(50, "Email must not exceed 50 characters"),
  phone: z.string().min(1, "Please enter phone number").max(11, "Phone number is invalid"),
  organization: z.string().min(1, "Please select an organization"), // Add a minimum length requirement
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});
