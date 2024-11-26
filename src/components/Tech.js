import React from "react";
import StackIcon from "tech-stack-icons";

function Tech() {
  return (
    <div className="md:container mx-auto p-2 md:p-6 lg:p-8 sm:p-96">
      <div className="flex justify-center">
        <h1 className="text-white text-3xl font-bold tracking-wider pt-16 md:pt-32  pb-14">Tech Stack</h1>
      </div>
      <div className="flex flex-col items-center gap-8 md:gap-16">
        <div className="flex gap-4 md:gap-32">
          <StackIcon name="js" className="max-w-10" />
          <StackIcon name="typescript" className="max-w-10" />
          <StackIcon name="nodejs" className="max-w-10" />
          <StackIcon name="aws" className="max-w-10" />
          <StackIcon name="postgresql" className="max-w-10" />
        </div>
        <div className="flex gap-4 md:gap-32">
          <StackIcon name="mongodb" className="max-w-10" />
          <StackIcon name="redis" className="max-w-10" />
          <StackIcon name="reactjs" className="max-w-10" />
          <StackIcon name="tailwindcss" className="max-w-10" />
          <StackIcon name="git" className="max-w-10" />
        </div>
      </div>
    </div>
  );
}

export default Tech;
