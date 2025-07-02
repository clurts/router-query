import {z} from 'zod';
import { queryClient } from '../queryClient';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});


export async function createContactMessage ({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

      const result = contactFormSchema.safeParse(data);

       if (!result.success) {
    // Return errors for the form to display
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }
  
    queryClient.invalidateQueries({
        queryKey: ['contactMessages']
    });
    // Return a response or redirect
    return { success: true, message: "Thank you for contacting us!" };
}