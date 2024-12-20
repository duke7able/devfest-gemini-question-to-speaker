import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SpeakerSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Featured Speaker</h2>
            <h3 className="text-2xl font-semibold mb-4">Jane Smith</h3>
            <p className="text-muted-foreground mb-6">
              Jane Smith is a renowned tech entrepreneur and AI researcher. With over 15 years of experience in the industry, she has founded multiple successful startups and contributed significantly to the field of machine learning.
            </p>
            <div className="space-y-2">
              <Link href="https://twitter.com/janesmith" className="text-primary hover:underline block">
                Twitter: @janesmith
              </Link>
              <Link href="https://linkedin.com/in/janesmith" className="text-primary hover:underline block">
                LinkedIn: Jane Smith
              </Link>
              <Link href="https://github.com/janesmith" className="text-primary hover:underline block">
                GitHub: janesmith
              </Link>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Questions for Jane</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>What inspired you to start your career in AI?</li>
                <li>How do you see the future of machine learning in the next 5 years?</li>
                <li>What advice would you give to aspiring tech entrepreneurs?</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

