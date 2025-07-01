import { Form, useActionData } from "react-router";


export default function Contact() {
    const data = useActionData() || {};
    const { success, message, errors } = data;

    if (success) {
        return (
            <>
                <h1>Contact Page</h1>
                <p>{message}</p>
            </>
        );
    }

   errors && console.log(errors);

    return (
        <>
            <h1>Contact Page</h1>
            <p>This is the contact page.</p>
            <p>Feel free to reach out!</p>

            <Form method="post" noValidate>
                <input type="text" name="name" placeholder="Your Name" required />
                {errors?.name && (<p>{errors?.name[0]}</p>)}
                <input type="email" name="email" placeholder="Your Email" required />
                {errors?.email && (<p>{errors.email[0]}</p>)}
                <textarea name="message" placeholder="Your Message" required></textarea>
                {errors?.message && (<p>{errors.message[0]}</p>)}
                
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}