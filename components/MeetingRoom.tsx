import { cn } from "@/lib/utils";

import React, { useState } from "react";
import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutList, Users } from "lucide-react";
import { layoutTemplate } from "@/constants";
import { useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import Loader from "./Loader";

enum CallLayoutEnum {
  grid = "grid",
  speakerLeft = "speaker-left",
  speakerRight = "speaker-right",
}

export default function MeetingRoom() {
  const [layout, setLayout] = useState<CallLayoutEnum>();
  const [showParticipants, setShowParticipants] = useState(false);
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const saerchParams = useSearchParams();
  const isPersonalRoom = !!saerchParams.get("personal");

  if (callingState !== CallingState.JOINED) return <Loader />;
  const CallLayout = () => {
    switch (layout) {
      case CallLayoutEnum.grid:
        return <PaginatedGridLayout />;
      case CallLayoutEnum.speakerLeft:
        return <SpeakerLayout participantsBarPosition="left" />;
      case CallLayoutEnum.speakerRight:
        return <SpeakerLayout participantsBarPosition="right" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
        <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
          <CallControls />
          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursror-ponter rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                <LayoutList className="text-white" />
              </DropdownMenuTrigger>
            </div>
            <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
              {layoutTemplate.map((item, index) => (
                <div key={index}>
                  <DropdownMenuLabel
                    className="cursor-pointer"
                    onClick={() => {
                      setLayout(item.format as CallLayoutEnum);
                    }}
                  >
                    {item.label}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <CallStatsButton />
          <button onClick={() => setShowParticipants((prev) => !prev)}>
            <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <Users size={20} className="text-white" />
            </div>
          </button>
          {!isPersonalRoom && <EndCallButton />}
        </div>
      </div>
    </section>
  );
}
