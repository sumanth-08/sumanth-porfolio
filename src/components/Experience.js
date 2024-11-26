import React from "react";

function Experience() {
  return (
    <>
      <div className="max-w-4xl mx-auto p-2 md:p-6 lg:p-8 sm:p-96">
        <div className="flex justify-start ">
          <h1 className="text-white text-3xl font-bold tracking-wider pt-10 md:pt-20">Work Experience</h1>
        </div>
          <div className="flex flex-col pt-8 ml-2 gap-2">
            <h1 className="text-slate-100 text-lg md:text-2xl font-semibold">
              Software Engineer <span className="text-blue-900"> @Accelerlab </span>
            </h1>
            <h1 className="text-slate-400 text-sm tracking-wider">Sept 2022 - Oct 2024</h1>
            <h1 className="text-slate-400 text-sm tracking-wider">Moodabidri, KA</h1>
            <h1 className="text-slate-400 text-sm tracking-wider">- Built real-time IoT data analytics dashboard with MQTT, AWS EC2, AWS SNS and SES.</h1>
            <h1 className="text-slate-400 text-sm tracking-wider">- Built an e-commerce platform with  integrating multiple payment gateways and logistics APIs.</h1>
            <h1 className="text-slate-400 text-sm tracking-wider">- Enhanced a matrimonial app with block/unblock, reporting, and notification features.</h1>
          </div>
        </div>
    </>
  );
}

export default Experience;
