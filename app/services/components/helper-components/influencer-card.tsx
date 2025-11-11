import { ChevronRight } from "lucide-react";

interface Service {
  title: string;
  services: string[];
}

export default function InfluencerCard({service}: {service: Service}) {
    return(
        <div className="flex flex-col p-4 rounded-2xl shadow-xl gap-5 bg-gradient-to-br from-gray-800 via-gray-900 to-black hover:from-gray-700 hover:to-gray-900 transition-all">
            <h1 className="text-light font-bold">{service.title}</h1>
            <div className="flex flex-col">
                {
                    service.services.map((list) =>(
                        <div className="flex gap-2">
                        <ChevronRight className="text-light"/>
                        <h1 className="text-light">{list}</h1>
                        </div>
                    ))
                }
            </div>
         </div>
    )
}