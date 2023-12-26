import { useEffect, useState } from "react";

export const useScrollTop = (thresold=10)=>{
    const[scrolled,setScrolled]=useState(false)
    const handleScroll = ()=>{
        if(window.scrollY > thresold){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[thresold])
    return scrolled
}