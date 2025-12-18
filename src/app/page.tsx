import { GraduationCap, PlayCircle, School, Users } from "lucide-react";
import Image from "next/image";
import { ColorToggle } from "@/components/preferences/color-toggle";
import { ModeToggle } from "@/components/preferences/mode-toggle";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* --- 1. Navbar --- */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border/40 backdrop-blur-md sticky top-0 z-50 bg-background/80">
        <div className="flex items-center gap-2">
          {/* LOGO वापरणे */}
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-primary/20">
            <Image
              src="/assets/logo.png" // तुमचा लोगो public/assets/ मध्ये ठेवा
              alt="ShikuSare Logo"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-2xl font-bold bg-linear-to-r from-chart-2 to-chart-4 bg-clip-text text-transparent">
            शिकूसारे
          </span>
        </div>

        <div className="hidden md:flex gap-6 font-medium text-sm">
          <a href="/" className="hover:text-primary transition">
            होम
          </a>
          <a href="courses" className="hover:text-primary transition">
            कोर्सेस
          </a>
          <a href="communiti" className="hover:text-primary transition">
            कम्युनिटी
          </a>
        </div>

        <div className="flex gap-3">
          <Button variant="outline">लॉगिन</Button>
          <Button className="bg-primary text-primary-foreground">
            साइन अप
          </Button>
        </div>
        <div className="flex gap-2 ml-4">
          <ModeToggle />
          <ColorToggle />
        </div>
      </nav>

      {/* --- 2. Hero Section with VIDEO --- */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          {/* डावी बाजू - मजकूर */}
          <div className="space-y-6 z-10">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight">
              शिक्षणाची नवी दिशा, <br />
              <span className="text-primary">शिकूसारे</span> सोबत!
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              पहिली ते पदवीपर्यंतचे शिक्षण आता गेम्स, 3D ॲनिमेशन आणि इंटरॅक्टिव्ह व्हिडिओंच्या
              माध्यमातून. शिक्षक आणि विद्यार्थी यांचे हक्काचे सोशल नेटवर्क.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8">
                सुरुवात करा
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <PlayCircle className="w-5 h-5" /> डेमो पहा
              </Button>
            </div>
          </div>

          {/* उजवी बाजू - VIDEO वापरणे */}
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 aspect-video group">
              {/* तुमचा व्हिडिओ इथे वापरा */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/intro-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* व्हिडिओवर ओव्हरले (Optional) */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
            </div>

            {/* डेकोरेशन साठी मागचे ग्लो इफेक्ट्स */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* --- 3. Features Section --- */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            शिकूसारे वर काय मिळेल?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<School className="w-10 h-10 text-blue-500" />}
              title="शाळा व संस्था"
              desc="शाळांसाठी डिजिटल व्यवस्थापन आणि शिक्षकांसाठी प्रगत साधने."
            />
            <FeatureCard
              icon={<GraduationCap className="w-10 h-10 text-green-500" />}
              title="विद्यार्थी विकास"
              desc="3D ॲनिमेशन, गेम्स आणि क्विझच्या माध्यमातून सोपे शिक्षण."
            />
            <FeatureCard
              icon={<Users className="w-10 h-10 text-orange-500" />}
              title="पालक व कम्युनिटी"
              desc="पालकांसाठी डॅशबोर्ड आणि विद्यार्थ्यांसाठी सोशल ग्रुप्स."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// छोटा कार्ड कंपोनंट
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
}
