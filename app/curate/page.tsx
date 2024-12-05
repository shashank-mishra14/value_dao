import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const PostCard = ({ title, description, author, date, image, icon }: any) => (
  <Card className="p-4">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0">
        <span className="text-xl text-white font-medium">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-3">{description}</p>
        <div className="relative aspect-[3/2] mb-2 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  </Card>
);

export default function CuratePage() {
  const posts = [
    {
      title: "Meetup At Denver",
      description: "Description here [AI generated]",
      author: "@Mert.eth",
      date: "3 Jan 2009",
      image: "/placeholder.svg?height=200&width=300",
      icon: "X",
    },
   
  ];

  return (
    <div className="p-4 space-y-4">
      <div>
        <p className="text-sm text-gray-500 mb-4">
          Based on community values, mark this post as aligned or not aligned and earn some rewards!
        </p>
      </div>

     
      {posts.map((post, index) => (
        <PostCard
          key={index}
          title={post.title}
          description={post.description}
          author={post.author}
          date={post.date}
          image={post.image}
          icon={post.icon}
        />
      ))}

      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-6">
          <Button variant="outline" size="lg" className="w-full rounded-full text-lg font-semibold border-black border-2">
            Aligned
          </Button>
          <Button variant="outline" size="lg" className="w-full rounded-full text-lg font-semibold border-black border-2">
            Not Aligned
          </Button>
        </div>
        <Button variant="outline" size="lg" className="w-full rounded-full text-lg font-semibold border-black border-2">
          Skip
        </Button>
      </div>
    </div>
  );
}
