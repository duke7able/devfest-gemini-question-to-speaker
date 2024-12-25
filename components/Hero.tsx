"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Twitter, Linkedin , Share,Instagram} from "lucide-react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
import ShareProfile from "./ShareProfile";
import { ClickAwayListener, Popper } from "@mui/material";

export default function Hero({
  // setThemeColor,
  userInfo,
  loading,
}: {
  loading: boolean;
  userInfo: any;
  setThemeColor: (color: string) => void;
}) {
  const [shareAnchorEl, setShareAnchorEl] = useState<SVGSVGElement | null>(null);
  const [openShareMenu, setOpenShareMenu] = useState(false);
  // const profileUrl = `https://example.com/profile` // Replace with the actual profile URL if necessary
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <section className="py-20 px-4">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardContent className="p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="w-32 h-32 sm:w-48 sm:h-48">
            {loading ? (
              <Skeleton circle height={192} width={192} />
            ) : (
              <>
                <AvatarImage
                  src="/placeholder.svg?height=192&width=192"
                  alt="Profile Picture"
                />
                <AvatarFallback>
                  {userInfo?.name
                    ? userInfo.name
                        .split(" ")
                        .map((n: any) => n[0])
                        .join("")
                    : "NA"}
                </AvatarFallback>
              </>
            )}
          </Avatar>
          <div className="text-center sm:text-left flex-grow">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {loading ? <Skeleton width={200} /> : userInfo?.name || ""}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {loading ? (
                <Skeleton width={250} />
              ) : (
                userInfo?.[
                  "what field you are currently in or you want to go in"
                ] || ""
              )}
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mb-4">
              {loading ? (
                <>
                  <Skeleton circle width={40} height={40} />
                  <Skeleton circle width={40} height={40} />
                  <Skeleton circle width={40} height={40} />
                </>
              ) : (
                <>
                  {userInfo?.["linkedin profile link"] && (
                    <a
                      href={userInfo["linkedin profile link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  )}
                  {userInfo?.["twitter profile link"] && (
                    <a
                      href={userInfo["twitter profile link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter Profile"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  )}
                  {userInfo?.["insta profile link"] && (
                    <a
                      href={userInfo["insta profile link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Profile"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  )}

            <Share style={{cursor:"pointer"}} onClick={(event) => {
              setShareAnchorEl(event.currentTarget);
              setOpenShareMenu(true);
            }}/>
                  <Popper
                    open={openShareMenu}
                    anchorEl={shareAnchorEl}
                    placement="bottom-start"
                    style={{ zIndex: 1300 }}
                  >
                    <ClickAwayListener
                      onClickAway={() => setOpenShareMenu(false)}
                    >
                      <div>
                        <ShareProfile profileUrl={`${currentUrl}`} />
                      </div>
                    </ClickAwayListener>
                  </Popper>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
