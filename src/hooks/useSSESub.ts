import { useEffect } from "react"
import SSE, { Callback } from "../server/serverSentEvent"

// 添加sse订阅
export const useSSESub = (callback:Callback)=>{
    useEffect(()=>{
        const sse = new SSE();
        sse.subscribe(callback);
        return ()=>{sse.unsubscribe(callback)}
    },[])
}