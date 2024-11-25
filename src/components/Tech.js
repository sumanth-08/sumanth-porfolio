import React from "react";
import StackIcon from "tech-stack-icons";

function Tech() {
  return (
    <div className=" max-w-4xl mx-auto">
      <div className="flex justify-center mt-32">
        <h1 className="text-white text-3xl font-bold tracking-wider">Tech Stack</h1>
      </div>
      <div className="flex py-8 gap-8 justify-center">
        <StackIcon name="js" className="max-w-10" />
        <StackIcon name="typescript" className="max-w-10" />
        <StackIcon name="nodejs" className="max-w-10" />
        <StackIcon name="aws" className="max-w-10" />
        <StackIcon name="postgresql" className="max-w-10" />
        <StackIcon name="mongodb" className="max-w-10" />
        <StackIcon name="redis" className="max-w-10" />
        <StackIcon name="reactjs" className="max-w-10" />
        <StackIcon name="tailwindcss" className="max-w-10" />
        <StackIcon name="git" className="max-w-10" />
      </div>
    </div>
  );
}

export default Tech;
