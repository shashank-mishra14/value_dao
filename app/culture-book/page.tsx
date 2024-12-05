import { Card } from "@/components/ui/card";

export default function CultureBookPage() {
  const posts = [
    {
      id: 1,
      title: "Meetup At Denver",
      description: "Description here [AI generated]",
      author: "@Mert.eth",
      date: "3 Jan 2009",
      image: "https://picsum.photos/200",
      icon: "X"
    },
    {
      id: 2,
      title: "Community Workshop",
      description: "Engaging workshop on blockchain development",
      author: "@crypto.dev",
      date: "5 Jan 2009",
      image: "https://picsum.photos/200",
      icon: "W"
    },
    {
      id: 3,
      title: "Hackathon Results",
      description: "Winners announced from our latest hackathon",
      author: "@hack.eth",
      date: "7 Jan 2009",
      image: "https://picsum.photos/200",
      icon: "H"
    },
    {
      id: 4,
      title: "DAO Governance Update",
      description: "New proposals and voting mechanisms",
      author: "@dao.eth",
      date: "9 Jan 2009",
      image: "https://picsum.photos/200",
      icon: "D"
    },
    {
      id: 5,
      title: "Token Economics",
      description: "Deep dive into our tokenomics model",
      author: "@token.eth",
      date: "11 Jan 2009",
      image: "https://picsum.photos/200",   
      icon: "T"
    }
  ];

  return (
    <div className="space-y-4 p-4">
      <div className="text-xs text-gray-500 mb-2">TODAY</div>
      {posts.map((post) => (
        <Card key={post.id} className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
              <span className="text-xl font-medium">{post.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-lg mb-1">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{post.description}</p>
              <div className="relative aspect-[3/2] mb-2 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
