"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Mentors from "../lib/mentor.json";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SpeakerCarousel({
  userInfo,
  loading,
}: {
  loading: boolean;
  userInfo: any;
}) {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  const nextSpeaker = () => {
    setCurrentSpeaker((prev) => (prev + 1) % Mentors.length);
  };

  const prevSpeaker = () => {
    setCurrentSpeaker((prev) => (prev - 1 + Mentors.length) % Mentors.length);
  };

  const speaker = Mentors[currentSpeaker];

  // const fetchMentorSpecificQuestions = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`/api/process`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ mentorInfo: currentSpeaker, userInfo }),
  //     });
  //     const data = await response.json();
  //     if (data?.questions?.length) {
  //       setQuestions(data?.questions);
  //     }
  //     setLoading(false);
  //   } catch (e) {
  //     console.log(e);
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   if(userInfo){
  //     fetchMentorSpecificQuestions();
  //   }
  // }, [currentSpeaker,userInfo]);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Speakers</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevSpeaker}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSpeaker}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{speaker.name}</h3>
            <p className="text-muted-foreground mb-6">{speaker.bio}</p>
            <div className="space-y-2">
              {speaker?.twitter ? (
                <Link
                  href={`${speaker.twitter}`}
                  className="text-primary hover:underline block"
                >
                  Twitter: @{speaker.twitter}
                </Link>
              ) : null}
              {speaker?.linkedin ? (
                <Link
                  href={`${speaker.linkedin}`}
                  className="text-primary hover:underline block"
                >
                  LinkedIn: {speaker.name}
                </Link>
              ) : null}
              {speaker?.github ? (
                <Link
                  href={`${speaker.github}`}
                  className="text-primary hover:underline block"
                >
                  GitHub: {speaker.github}
                </Link>
              ) : null}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                {loading ? (
                  <Skeleton width={200} />
                ) : (
                  `Questions for ${speaker?.name || ""}`
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <ul className="list-disc list-inside space-y-2">
                  {Array(5) // Simulating 5 skeleton placeholders
                    .fill(null)
                    .map((_, index) => (
                      <Skeleton key={index} width="100%" height={20} />
                    ))}
                </ul>
              ) : (
                <ul className="list-disc list-inside space-y-2">
                  {userInfo?.[`mentor${currentSpeaker + 1}`]
                    ? JSON.parse(userInfo?.[`mentor${currentSpeaker + 1}`]).map(
                        (
                          question: { questionTitle: string },
                          index: number
                        ) => (
                          <li key={index}>{question?.questionTitle || ""}</li>
                        )
                      )
                    : []}
                  {console.log(userInfo, "userInfo")}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
