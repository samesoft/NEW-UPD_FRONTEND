import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Campaign() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative py-20 bg-[url('/HSMHERO.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
              Building a Better Future Together
            </h1>
            <p
              className="text-xl text-primary-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join our mission to create sustainable change and build a more
              prosperous nation for all.
            </p>
            <Button
              className="bg-background text-primary hover:bg-accent text-lg px-8 py-3 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Learn More
            </Button>
          </div>
        </section>

        <section id="issues" className="py-16 bg-accent overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Our Key Issues
            </h2>
            <div className="relative">
              <div className="overflow-x-auto scrollbar-visible">
                <div className="flex space-x-4 animate-scroll-cards">
                  {[
                    "Economic Growth",
                    "Healthcare Reform",
                    "Education",
                    "Infrastructure",
                    "National Security",
                    "Environmental Protection",
                    "Social Justice",
                    "Technology Innovation",
                  ].map((issue) => (
                    <Card
                      key={issue}
                      className="w-64 flex-shrink-0 bg-card border-primary/20"
                    >
                      <CardHeader>
                        <CardTitle className="text-primary">{issue}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>
                          Our plan for {issue.toLowerCase()} focuses on
                          sustainable solutions and equal opportunities for all
                          citizens.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Upcoming Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {["Town Hall Meeting", "Community Rally", "Policy Workshop"].map(
                (event, index) => (
                  <Card
                    key={event}
                    className="animate-fade-in-up bg-card border-primary/20"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-primary">{event}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        Join us for an engaging {event.toLowerCase()} to discuss
                        our vision for a better future.
                      </CardDescription>
                      <Button className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                        RSVP
                      </Button>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>

        <section id="candidates" className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Our Party Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Hassan Sheikh Mohamud", image: "/NEWS-4.jpg" },
                { name: "Mohamed Hussein Roble", image: "/odowaa.jpg" },
                { name: "Hamza Abdi Barre", image: "/PM-Hamze.jpg" },
              ].map((candidate, index) => (
                <Card
                  key={candidate.name}
                  className="animate-fade-in-up bg-card border-primary/20"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <CardHeader>
                    <div className="relative w-48 h-48 mx-auto">
                      <Image
                        src={candidate.image || "/placeholder.svg"}
                        alt={candidate.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-center mt-4 text-primary">
                      {candidate.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Dedicated to promoting economic growth and sustainable
                      development.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="volunteer"
          className="relative py-16 bg-[url('/updLogo.jpg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-primary/50 mix-blend-multiply"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl font-bold text-center text-primary-foreground mb-8">
              Get Involved
            </h2>
            <p className="text-center text-primary-foreground text-xl mb-8">
              Join our movement and help us build a better future for all. Sign
              up to volunteer or receive updates.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-background text-foreground"
                />
                <Button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-white w-40"
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
