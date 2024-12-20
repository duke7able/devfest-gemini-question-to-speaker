'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share"
import { Facebook, Twitter, Linkedin } from 'lucide-react'
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export default function Hero({ 
  // setThemeColor, 
  userInfo, loading }: { loading: boolean, userInfo: any, setThemeColor: (color: string) => void }) {
  // const profileUrl = `https://example.com/profile` // Replace with the actual profile URL if necessary

  return (
    <section className="py-20 px-4">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardContent className="p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="w-32 h-32 sm:w-48 sm:h-48">
            {loading ? (
              <Skeleton circle height={192} width={192} />
            ) : (
              <>
                <AvatarImage src="/placeholder.svg?height=192&width=192" alt="Profile Picture" />
                <AvatarFallback>
                  {userInfo?.name ? userInfo.name.split(' ').map((n:any) => n[0]).join('') : 'NA'}
                </AvatarFallback>
              </>
            )}
          </Avatar>
          <div className="text-center sm:text-left flex-grow">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              {loading ? <Skeleton width={200} /> : userInfo?.name || ''}
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              {loading ? <Skeleton width={250} /> : userInfo?.["what field you are currently in or you want to go in"] || ''}
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
                    <LinkedinShareButton url={userInfo["linkedin profile link"]}>
                      <Linkedin className="w-6 h-6" />
                    </LinkedinShareButton>
                  )}
                  {userInfo?.["twitter profile link"] && (
                    <TwitterShareButton url={userInfo["twitter profile link"]}>
                      <Twitter className="w-6 h-6" />
                    </TwitterShareButton>
                  )}
                  {userInfo?.["insta profile link"] && (
                    <FacebookShareButton url={userInfo["insta profile link"]}>
                      <Facebook className="w-6 h-6" />
                    </FacebookShareButton>
                  )}
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
