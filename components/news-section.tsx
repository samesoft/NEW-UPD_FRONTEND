import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Instagram } from "lucide-react";

const newsItems = [
  {
    title: "REBUILDING TRUST: OUR NEW IMMIGRATION POLICY",
    excerpt:
      "UPD PARTY new plan for immigration shows the Party is back in the service of the British people",
    date: "6/2/2025",
    image: "/NESW-6.jpg",
    link: "/news/immigration-policy",
  },
  {
    title: "HSM FIRST SPEECH OF 2025: REBUILDING TRUST",
    excerpt:
      "HSM gave a speech on how she'll rebuild trust in the Conservative Party",
    date: "16/1/2025",
    image: "/HSM2.jpg",
    link: "/news/kemi-speech-2025",
  },
  {
    title: "UPD FORCE VOTE ON NATIONAL INSURANCE",
    excerpt:
      "We Conservatives strongly believe in supporting the victims of this appalling abuse and deserve justice.",
    date: "9/12/2025",
    image: "/NEWS-3.jpg",
    link: "/news/national-insurance",
  },
];

const socialLinks = [
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/campaign" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/campaign" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/campaign" },
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-primary">
          LATEST NEWS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group block bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base">
                  {item.excerpt}
                </p>
                <p className="text-sm text-gray-400">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mb-12">
          <Button
            asChild
            className="px-8 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
          >
            <Link href="/news">SEE ALL</Link>
          </Button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Follow Us on Social Media
          </h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <link.icon className="h-6 w-6" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
