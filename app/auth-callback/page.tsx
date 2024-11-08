"use client"

import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getAuthStatus } from "./actions"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"

const Page = ()=>{
const [configId, setConfigId]= useState<string | null>(null)
const router = useRouter()
useEffect(()=>{

    const configurationId = localStorage.getItem("configurationId")
    if(configurationId) setConfigId(configurationId)
},[])
const {data} = useQuery({
    queryKey:["auth-callback"],
    queryFn: async ()=> await getAuthStatus(),
    retry: true,
    retryDelay:500
})
if(data?.success){
    if(configId){
     localStorage.removeItem('configurationId')
    router.push(`/configure/preview?id=${configId}`)
    }else{
        router.push('/')
    }
}
return ( 
    <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
            <Loader className="font-semibold text-xl"></Loader>
              <h3> Logging you in...</h3> 
<p> you will be redirected automatically.</p>
        </div>
    </div>
)
}
export default Page