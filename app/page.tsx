'use client'

import DefaultButton from '@/components/button/button'

export default function Home() {
  return (
    <main className="flex min-h-screen bg-[#2B2D42] flex-col items-center justify-between" style={{backgroundImage: "url('/Homepage.png')"}}>
      <div className='flex relative justify-between mt-[145px] px-[360px] pt-[70px]'>
        <div className="custom-font absolute top-[123px] left-[590px] w-[995px] text-white text-[68px] font-bold leading-[94px]">Turn Your Website Into Your Best Sales Person</div>
        <div className='flex-col self-end'>
          <img src='/main.png' width={820} height={918} alt='main' />
        </div>
        <div className='flex-col self-end mb-40'>
          <div className="w-[582px] text-[#F7F7FF] text-[22px] font-[300] font-['Rubik'] leading-[33px]">Triple your sales with a pixel-perfect website.<br/>At SmartSite Studio, we don’t just design and write code, we build a revenue-driving machine for your business.</div>
          <div className='flex mt-[40px] gap-x-[20px]'>
            <DefaultButton label='Talk to Us' type='primary' onClick={() => {}} />
            <DefaultButton label='See Portfolio' type='secondary' onClick={() => {}} />
          </div>
        </div>
      </div>
    </main>
  )
}
