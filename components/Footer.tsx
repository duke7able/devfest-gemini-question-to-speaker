import Link from "next/link"
import { Github } from 'lucide-react'
import { useThemeColor } from './ThemeProvider'

export default function Footer() {
  const themeColor = useThemeColor()

  return (
    <footer className="py-6" style={{ backgroundColor: `${themeColor}22` }}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
          Made with ❤️ by{" "}
          <Link href="https://asambhav.in" className="text-primary hover:underline">
            Asambhav Solutions
          </Link>
        </p>
        <Link
          href="https://github.com/yourusername/yourrepo"
          className="flex items-center text-muted-foreground hover:text-primary"
        >
          <Github className="w-5 h-5 mr-2" />
          <span>GitHub</span>
        </Link>
      </div>
    </footer>
  )
}

