"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "./ui/use-toast";

enum MeetingState {
  Schedule = "isScheduleMeeting",
  Joining = "isJoiningMeeting",
  Instant = "isInstantMeeting",
}

export default function MeetingTypeList() {
  const router = useRouter();
  const client = useStreamVideoClient();
  const { user } = useUser();
  const { toast } = useToast();
  const [meetingState, setMeetingState] = useState<MeetingState | undefined>();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime) {
        toast({
          variant: "destructive",
          title: "Por favor selecione uma data e um horário",
        });
      }
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("Falha ao criar chamada");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Chamada Iniciada";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }

      toast({
        title: "Chamada Iniciada com Sucesso",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Falha ao criar chamada",
      });
    }
  };

  return (
    <section className="grid  grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        title="Nova Chamada"
        description="Inicie uma nova chamada em instantes!"
        imgUrl="./icons/add-meeting.svg"
        handleClick={() => setMeetingState(MeetingState.Instant)}
        color="bg-orange-1"
      />
      <HomeCard
        title="Marque uma chamada"
        description="Planeje suas chamada!"
        imgUrl="./icons/schedule.svg"
        handleClick={() => setMeetingState(MeetingState.Schedule)}
        color="bg-blue-1"
      />
      <HomeCard
        title="Gravações"
        description="Acesse Suas gravações!"
        imgUrl="./icons/recordings.svg"
        handleClick={() => router.push("/recordings")}
        color="bg-purple-1"
      />
      <HomeCard
        title="Entre na Chamada"
        description="Entre em uma nova chamada em instantes!"
        imgUrl="./icons/join-meeting.svg"
        handleClick={() => setMeetingState(MeetingState.Joining)}
        color="bg-yellow-1"
      />
      <MeetingModal
        title="Inicie uma nova Chamada"
        className="text-center"
        buttonText="Iniciar chamada"
        isOpen={meetingState === MeetingState.Instant}
        onClose={() => setMeetingState(undefined)}
        handleClick={createMeeting}
      />
    </section>
  );
}
