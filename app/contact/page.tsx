import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ContactPage: React.FC = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                We&apos;d love to hear from you. Please fill out the form below and we`&apos;`ll get back
                to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center">
            <form className="space-y-4 w-full max-w-md">
              <Input className="w-full" placeholder="Your Name" type="text" />
              <Input className="w-full" placeholder="Your Email" type="email" />
              <Input className="w-full" placeholder="Subject" type="text" />
              <textarea
                className="w-full h-32 p-2 rounded-md border border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
                placeholder="Your Message"
              />
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
