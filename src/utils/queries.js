import { queryClient } from "../queryClient";   


export async function performQuery({ queryKey, queryFn, options = {} }) {
    try {
         return await queryClient.fetchQuery({ queryKey, queryFn, ...options });
    } catch (error) {
        console.error('Query failed:', error);
        // Optionally log to a service or show a toast
        throw error;
    }
}
