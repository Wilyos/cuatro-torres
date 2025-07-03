import { useRef, useEffect} from "react"
import { gsap } from "gsap";


const CustomCursor = () => {
//refs for cursor
const cursorRef = useRef(null);
const cursorBorderRef = useRef(null);

// hide cursor on mobile
const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

if (isMobile) {
  return null;
}

useEffect(() => {
     // Get cursor elements
     const cursor = cursorRef.current
     const  cursorBorder= cursorBorderRef.current


     //inital position
     gsap.set([cursor,cursorBorder],{
        xPercent:-80,
        yPercent: -50,
     },)

     //variables para una posicion diferente del cursor

     const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out"})

     const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out"})

     const xToBorder = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power3.out"})

     const yToBorder = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power3.out"})

     //mouse move event
     const handleMouseMove = (e) =>{
        xTo(e.clientX);
        yTo(e.clientY);
        xToBorder(e.clientX);
        yToBorder(e.clientY);
     }

     //add mouse  move listener event
     window.addEventListener("mousemove", handleMouseMove)


     // add click animation
     document.addEventListener("mousedown", () => {
        gsap.to([cursor, cursorBorder], {
          scale: 0.6,
          duration: 0.2,
        });
     })

     document.addEventListener("mouseup", () => {
        gsap.to([cursor, cursorBorder], {
          scale: 1,
          duration: 0.2,
        });
     })

}, [])

  return (
    <>
    { /*<dev 
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
     />

     <div 
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[999] mix-blend-difference opacity-50"
     
     /> */} 
    </>
  )
}

export default CustomCursor