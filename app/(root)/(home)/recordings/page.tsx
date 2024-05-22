import CallList, { TypeCallList } from "@/components/CallList";
import React from "react";

export default function Previous() {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        <CallList type={"recordings" as TypeCallList} />
      </h1>
    </section>
  );
}
