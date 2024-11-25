import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



export const ContactForm = ()=>{
    const form = useRef<HTMLFormElement>(null);
    const [stateMessage, setStateMessage] = useState<string>('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStateMessage('Sending Message')
        if (form.current){

            emailjs
              .sendForm(
                serviceId,
                templateId,
                 form.current, {
                publicKey: PublicKey,
              })
              .then(
                () => {
                    setStateMessage('Message Sent')
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
        }
    };
  

    return (
        <section className="bg-[#091122] ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white ">Get In Touch</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Want to send feedback ? Let me know.</p>
                {/* Contact Form */}
                <form ref={form} onSubmit={sendEmail} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white ">Your email</label>
                        <input type="email" 
                                name="from_mail" 
                                id="email" 
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" 
                                placeholder="Your Email Adress" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white ">Subject</label>
                        <input type="text" 
                                id="subject" 
                                name="from_subject" 
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" 
                                placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea id="message" 
                                    rows={6} 
                                    name="message" 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " 
                                    placeholder="Leave a comment...">
                        </textarea>
                    </div>
                    <button type="submit" 
                            className="py-3 px-5 text-sm font-medium text-center text-[#171720] rounded-lg bg-white sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300" 
                            disabled={stateMessage === 'Sending Message' ? true : false} >
                                Send message
                    </button>
                    {stateMessage === '' ?
                        null : 
                        <div className="mb-2 text-sm font-medium text-green-500">
                            <p className={`inline-flex ${stateMessage === 'Sending Message' ? 'text-orange-500' : ''}`}>
                                {stateMessage} 
                                <span className={`${stateMessage === 'Sending Message' ? 'hidden' : ''}`}>
                                    <svg aria-hidden="true" className="w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                </span>
                            </p>
                        </div>
                    }
                </form>
            </div>
        </section>
    )
}