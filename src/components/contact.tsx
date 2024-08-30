import Link from "next/link";
import React, { useRef } from "react";
import { Button } from "./button";
import useVisible from "../utils/useVisible";

type Props = {};

const Contact = (props: Props) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(ref1);
  return (
    <section
      id="contact"
      ref={ref1}
      className={`
        container mx-auto p-4
        space-y-4 text-center flex flex-col items-center my-20
          transition-opacity
          ease-in
          duration-1000
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
    >
      <div>
        <h2 id="h2" className="text-xl font-serif text-orange-300">
          <span className="text-base mr-1 text-orange-300">04.</span>What’s
          Next?
        </h2>
      </div>
      <div>
        <h3 className="text-4xl font-serif md:text-6xl">Interested?</h3>
        <h3 className="text-4xl font-serif md:text-6xl">Lets Get In Touch!</h3>
      </div>
      <p className="text-lg font-serif lg:w-1/2">
        If my work resonates with you or you have an exciting project in mind,
        let’s connect! I am open to ambitious ventures and always happy to
        discuss new opportunities or answer any questions you may have.
      </p>
      <div className="mt-10">
        <Link href="mailto:kevin.evenholt@hotmail.com">
          <Button
            secondary
            text="Contact me"
            className="mt-10"
            ariaLabel="Contact me"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
