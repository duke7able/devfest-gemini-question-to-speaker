import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Twitter, Linkedin, Github } from 'lucide-react'
import Link from "next/link"

const organizers = [
  { 
    name: "Aditya", 
    role: "GDG C bhopal Organiser",
    twitter: "https://x.com/ethicaladitya",
    linkedin: "https://www.linkedin.com/in/ethicaladitya/",
    github: ""
  },
  { 
    name: "Mayur Rathi", 
    role: "GDG C bhopal Organiser",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/mayurrathi26/",
    github: ""
  },
]

export default function OrganizerCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Event Organizers</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((organizer, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{organizer.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{organizer.role}</p>
                <div className="flex space-x-4">
                  {organizer?.twitter?<Link href={`${organizer.twitter}`} className="text-muted-foreground hover:text-primary">
                    <Twitter className="w-5 h-5" />
                  </Link>:null}
                  {organizer?.linkedin?<Link href={`${organizer.linkedin}`} className="text-muted-foreground hover:text-primary">
                    <Linkedin className="w-5 h-5" />
                  </Link>:null}
                  {organizer?.github?<Link href={`${organizer.github}`} className="text-muted-foreground hover:text-primary">
                    <Github className="w-5 h-5" />
                  </Link>:null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

