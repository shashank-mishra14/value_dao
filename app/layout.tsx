import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { CircleDollarSign, BarChart, Edit, Book } from "lucide-react"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="max-w-md mx-auto h-[100vh] overflow-y-auto bg-gray-50 pb-20">
         
          <div className="px-4 mt-10 py-2 border-b border-gray-50">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center bg-white border rounded-full px-2 py-1 gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-800">
                  @sarah
                </span>
              </div>
              <span className="text-sm bg-white border rounded-[30px] flex items-center gap-1 px-2 py-1">
                <CircleDollarSign className="w-4 h-4" />
                20.5K
              </span>
            </div>
            <h1 className="text-3xl font-bold">$superteam</h1>
          </div>

        
          <div className="flex-1">{children}</div>

          <div className="flex items-center justify-center w-full bg-gray-50 p-2 pb-10 cursor-pointer">
            <h1 className="text-black font-semibold text-center">
              HOW IT WORKS?
            </h1>
          </div>
        </div>

   
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
          <div className="flex justify-around items-center p-4">
            <Link href="/" className="flex flex-col items-center gap-1">
              <BarChart className="w-6 h-6 text-gray-600" /> 
              <span className="text-xs">Charts</span>
            </Link>
            <Link href="/curate" className="flex flex-col items-center gap-1">
              <Edit className="w-6 h-6 text-gray-600" /> 
              <span className="text-xs">Curate</span>
            </Link>
            <Link
              href="/culture-book"
              className="flex flex-col items-center gap-1"
            >
              <Book className="w-6 h-6 text-gray-600" /> 
              <span className="text-xs">Culture book</span>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
