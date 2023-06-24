import React from 'react'

function BigCard() {
    return (
        <div className='w-full min-[1023px]:w-4/6 max-[1023px]:pb-20 max-[1023px]:-mb-12  min-[1023px]:h-screen   pt-24 z-10 bg-[#daeee1] shadow relative top-0'>
            <video autoPlay loop preload='auto' muted playsInline src="https://d2eiylesx4iyph.cloudfront.net/files/8liimn1h4-web-leftside-rewards-TR-1150x1260px-1-1-SFE.mp4">
                
            </video>
            <h1 className='absolute left-6 bottom-14 font-bold text-3xl '>İyi günler ☕</h1>
        </div>
    )
}

export default BigCard