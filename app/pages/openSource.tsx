import React from 'react'
import hackScreenshot from '@/public/hackScreenshot.png'
import Image from 'next/image'

const openSource = () => {
  return (
     <div className = "mt-8">
      <h1
        className="font-inter text-[67px] font-bold mb-4 text-white glow-bottom"
        data-text="Open Source"
      >
        Open Source
      </h1>
      <div className="flex flex-row items-center  px-4 gap-8">
        <div className = "w-3/4">
          <Image
             src={hackScreenshot}
            alt="Hack Screenshot"
            className="rounded-4xl w-full h-auto"
            width={1200}
            height={800}
          />
        </div>
        <div>
          <h1 className= "font-kalnia text-[60px]">HackPortal</h1>
          <p>
            A pre-built portal template made by HackUTD Developers, so you have one less thing to worry about.
            Used in HackTX, HackUTA, and HackUTD
          </p>
        </div>
      </div>

      <div className="my-16" />

      <div className="flex flex-row items-center  px-4 gap-8">
        <div>
          <h1 className= "font-kalnia text-[60px]">Jury</h1>
          <p>
            A pre-built portal template made by HackUTD Developers, so you have one less thing to worry about.
            Used in HackTX, HACKUTA, HackUTD
          </p>
        </div>
        <div className = "w-3/4">
          <Image
              src={hackScreenshot}
            alt="Hack Screenshot"
            className="rounded-4xl w-full h-auto"
            width={1200}
            height={800}
          />
        </div>
        
      </div>
    </div>
  )
}

export default openSource