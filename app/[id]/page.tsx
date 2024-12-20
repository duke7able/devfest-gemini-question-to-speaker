"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OrganizerCards from "@/components/OrganizerCards";
import SpeakerCarousel from "@/components/SpeakerCarousel";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function ProfilePage({ params }:{params:{id:string}}) {
  const [themeColor, setThemeColor] = useState("#3b82f6"); // Default to blue
  const [userInfo, setUserInfo] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  
  const userId = params.id.replace("%40", "@");

  useEffect(() => {
    if (userId) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch(`/api/get-user-info`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: userId }),
          });
          const data = await response.json();
          if (data?.message?.length) {
            console.log(data);
            setUserInfo(data?.message[0]);
          }
          setLoading(false);
        } catch (e) {
          console.log(e);
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [userId]); // Re-run effect when id changes

  return (
    <ThemeProvider color={themeColor}>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
        <Hero
          loading={loading}
          setThemeColor={setThemeColor}
          userInfo={userInfo}
        />

        <SpeakerCarousel userInfo={userInfo} loading={loading} /> 
        <OrganizerCards />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
