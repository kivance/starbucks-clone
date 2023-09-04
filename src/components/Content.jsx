import React from 'react'

const cards = [
    {
        id: 1,
        title: 'Dilediğin Gibi Öde Yıldız Kazan! ⭐',
        img: 'https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMDNmNmI4OTQyNjQ1NGE0YThjMzQ3YjRkODEzNTQ0MzUiLCJ0aW1lc3RhbXAiOjE2ODc1OTk0NzUxMjAsImNsYWltcyI6e30sImlhdCI6MTY4NzU5OTQ3NSwiZXhwIjoxNjg3NTk5Nzc1LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.Uzmwn3t6KffX0SR7k_LBRLUIzdPP0ykQD1N0ou0mYFY&data=eyJpbWFnZUlkIjoiYmM0ZTRjZDYtOGEzYi00ZDdkLTkwZDAtMTk0Zjg3Zjg4YjA5IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&',
        content: 'Starbucks® Mobil’de yeni dönem başladı! Ödemeni nakit, kredi kartı veya Starbucks® Mobil ile yap, tüm harcamalarında yıldız kazan!',
        button1: 'Detaylı Bilgi',
        button1Link: '',
        button2: '',
        button2Link: '',
    },
    {
        id: 2,
        title: 'Yaza renk katacak kupa ve termoslar seni bekliyor! 🥳',
        img: 'https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMDNmNmI4OTQyNjQ1NGE0YThjMzQ3YjRkODEzNTQ0MzUiLCJ0aW1lc3RhbXAiOjE2ODc1OTk0NzUxMjAsImNsYWltcyI6e30sImlhdCI6MTY4NzU5OTQ3NSwiZXhwIjoxNjg3NTk5Nzc1LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.Uzmwn3t6KffX0SR7k_LBRLUIzdPP0ykQD1N0ou0mYFY&data=eyJpbWFnZUlkIjoiNGMzZWUxMTktNjA0Mi00NzIyLWIyODYtM2Q2YWM0MmIxYzJmIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&',
        content: 'Yazına renk katacak kupa ve termos ailemizin yeni üyeleriyle tanışmaya hazır mısın? 🥳 Çok seveceğin yeni Starbucks® kupa ve termosları Hepsiburada’da seni bekliyor!',
        button1: 'Hepsiburada',
        button1Link: '',
        button2: '',
        button2Link: '',
    },
    {
        id: 3,
        title: '',
        img: 'https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMDNmNmI4OTQyNjQ1NGE0YThjMzQ3YjRkODEzNTQ0MzUiLCJ0aW1lc3RhbXAiOjE2ODc1OTk0NzUxMjAsImNsYWltcyI6e30sImlhdCI6MTY4NzU5OTQ3NSwiZXhwIjoxNjg3NTk5Nzc1LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.Uzmwn3t6KffX0SR7k_LBRLUIzdPP0ykQD1N0ou0mYFY&data=eyJpbWFnZUlkIjoiNWJjNjQ5YzktMGFlNS00ZWU4LWI2M2YtNTU0YWU0M2VjNzFkIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&',
        content: 'Starbucks® Delivers ile siparişini ver, sen neredeysen kahven oraya gelsin!',
        button1: 'Yemeksepeti',
        button1Link: '',
        button2: 'GetirYemek',
        button2Link: '',
    },
    {
        id: 4,
        title: '',
        img: 'https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMDNmNmI4OTQyNjQ1NGE0YThjMzQ3YjRkODEzNTQ0MzUiLCJ0aW1lc3RhbXAiOjE2ODc1OTk0NzUxMjAsImNsYWltcyI6e30sImlhdCI6MTY4NzU5OTQ3NSwiZXhwIjoxNjg3NTk5Nzc1LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.Uzmwn3t6KffX0SR7k_LBRLUIzdPP0ykQD1N0ou0mYFY&data=eyJpbWFnZUlkIjoiMDg4YjliZmUtOTcxYy00MTE5LTg4YjAtOGY3MGRiZTQyMTgwIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&',
        content: 'Starbucks® Mobil Uygulaması’nın ayrıcalıklı dünyası ve güncel kampanyalardan haberdar ol.',
        button1: 'Hemen İncele',
        button1Link: '',
        button2: '',
        button2Link: '',
    },
    {
        id: 5,
        title: 'Arabaya servis ile ara vermeden yolculuğuna lezzet kat!',
        img: 'https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMDNmNmI4OTQyNjQ1NGE0YThjMzQ3YjRkODEzNTQ0MzUiLCJ0aW1lc3RhbXAiOjE2ODc1OTk0NzUxMjAsImNsYWltcyI6e30sImlhdCI6MTY4NzU5OTQ3NSwiZXhwIjoxNjg3NTk5Nzc1LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.Uzmwn3t6KffX0SR7k_LBRLUIzdPP0ykQD1N0ou0mYFY&data=eyJpbWFnZUlkIjoiMTkyOTk2NDgtZTVhOS00NTk2LWE4ZDktNDQ2NjE5ZmE2NDg4IiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&',
        content: "Aracından inmeden Starbucks® Drive Thru mağazalarımızdan siparişini ver, ara vermeden yolculuğuna lezzet kat! 🚗 Şimdilik sınırlı mağazalarımızda: 📍Şekerpınar 📍Manavgat 📍Balıkesir O204 📍Ankara Vega Cadde Yeni Drive Thru lokasyonlarımız için starbucks.com.tr'yi ziyaret etmeyi ve bizi sosyal medya hesaplarımızdan takip etmeyi unutma!",
        button1: '',
        button1Link: '',
        button2: '',
        button2Link: '',
    },
    {
        id: 6,
        title: 'Eşsiz bir deneyim seni bekliyor!',
        img: 'https://core.rtbs.io/user/action/cc1eec01745b4c0ba29d63b1fe7e6ccf/rbs.storage.get.GET_IMAGE?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6InJic19hbm9ueW1vdXNfdXNlciIsImFub255bW91cyI6dHJ1ZSwicHJvamVjdElkIjoiY2MxZWVjMDE3NDViNGMwYmEyOWQ2M2IxZmU3ZTZjY2YiLCJ1c2VySWQiOiJhbm9ueW1vdXNfMDNmNmI4OTQyNjQ1NGE0YThjMzQ3YjRkODEzNTQ0MzUiLCJ0aW1lc3RhbXAiOjE2ODc2MDE0NTg4NDcsImNsYWltcyI6e30sImlhdCI6MTY4NzYwMTQ1OCwiZXhwIjoxNjg3NjAxNzU4LCJpc3MiOiJjb3JlLnJ0YnMuaW8ifQ.WOyK_WX5fUbkpgclXWH5kJn71AqCD5aeSKrc_8XIUY0&data=eyJpbWFnZUlkIjoiZThkOGQ4MjItMWRjNS00MGQ3LTllMDgtYTI0YjYxY2NjYjMyIiwiZml0IjoiY292ZXIifQ&culture=en-US&platform=WEB&',
        content: 'Yazına renk katacak kupa ve termos ailemizin yeni üyeleriyle tanışmaya hazır mısın? 🥳 Çok seveceğin yeni Starbucks® kupa ve termosları Hepsiburada’da seni bekliyor!',
        button1: 'Detaylı Bilgi',
        button1Link: '',
    },
    {
        id: 7,
        title: 'Aydınlık ve umut dolu bir gelecek için birlikte olmanın önemine inanıyor, afet bölgesindeki iyileşme yolculuğuna destek vermek için kaynaklarımızı ve kalplerimizi sunmaya devam ediyoruz.',
        img: 'https://media.discordapp.net/attachments/1021852587579936849/1148169531949330473/Frame_8.png?width=612&height=612 ',
        content: 'Dünyaya yayılan büyük ailemiz sayesinde deprem bölgesindeki yaraların sarılmasında kullanılmak üzere maddi yardımlarımızı ulaştırmaya devam ediyoruz. Yerel sosyal sorumluluk partnerlerimiz Tohum Otizm Vakfı ve AÇEV ile bölgede hayatın normale dönmesi ve geleceğimiz olan çocuklarımız ile ailelerinin eğitim ihtiyaçlarının desteklenmesi için projelerimizi hayata geçiriyoruz. Deprem bölgesinde gerçekleştirdiğimiz yardım çalışmalarıyla ilgili detaylı bilgi için;',
        button1: 'Daha fazla bilgi',
        button1Link: '',
        button2: '',
        button2Link: '',
    },
]

function Content() {
  return (
    <div className='px-4 min-[900px]:px-4 py-4 pb-20 max-[1023px]:pb-4'>
        <img className='rounded shadow-sm' src="https://media.discordapp.net/attachments/1021852587579936849/1148169532205174876/kvncbucks.png?width=1440&height=576" alt="" />
        <div className=' min-[900px]:px-10 mt-6'>
            <h1 className='font-bold text-xl'>Tropik serinlik, hindistan cevizi aromasıyla 😍</h1>
            <p className='font-semibold mt-4 text-base'>Mango ve ejder meyveli Refresha® lezzeti, şimdi hindistan cevizi aromasıyla: Yeni Dragon Coconut Refresha®, kısa süreliğine buralarda! 🥥🥭🌴</p>
            <button className='bg-green-700 rounded-full text-white font-semibold mt-4 px-4 py-1'>Daha fazla bilgi</button>
        </div>
        <div className='flex flex-col gap-10 mt-10'>
            {cards.map((card) =>
                <div key={card.id} className='flex flex-col min-[600px]:flex-row items-start gap-6'>
                    <img className='w-full min-[600px]:w-2/4 rounded shadow-sm' src={card.img} alt="" />
                    <div>
                        <h1 className='font-bold text-2xl'>{card.title}</h1>
                        <p className='font-medium mt-2 text-base mb-5'>{card.content}</p>
                        <div className='flex flex-wrap gap-1'>
                        {card.button1 && 
                        <a href={card.button1Link} className='bg-green-700 rounded-full text-white font-semibold px-4 py-1'>{card.button1}</a> || null }
                        {card.button2 && 
                        <a href={card.button2Link} className='border border-green-700 rounded-full whitespace-nowrap text-green-700 font-semibold px-4 py-1'>{card.button2}</a> || null}
                        
                        </div>
                    </div>

                </div>
            )}
        </div>
        <div className='mt-10'>
           <div className='h-[1px] max-[1023px]:mt-10 w-full bg-black opacity-20 mb-4'> </div>
           This website is not an <a href="https://www.starbucks.com.tr/"  className='underline max-[1023px]:mt-40 font-semibold text-green-600'>official website</a>. It has been developed as a clone site by <a href="https://github.com/kivance" className='underline font-semibold'>Kıvanç Eren.</a><br />It is an <a href="https://github.com/kivance/starbucks-clone" className='underline font-semibold'>open-source project, and you can examine its code.</a> 
        </div>
    </div>
  )
}

export default Content