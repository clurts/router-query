import { Form } from "react-router"

export default function Contact() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            const result = await response.json();
            console.log('Message sent successfully:', result);
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    }
        

    return (
         <>
        <h1>Contact</h1>
        <Form method="post" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" placeholder="Message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </Form>
        </>
    )
}



//  if(!result.success) {
        //     console.log("there where errrors")
        //     const errors = z.treeifyError(result.error)
        //     console.log(errors.properties)
        // }
       
        



        
            // fetch("https://jsonplaceholder.typicode.com/uses", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(result.data) 
            // }).then(res => {
            //     if( res.ok) navigate("/")
            // })
            // .catch(error => console.error("there was an error: ", error))
            
