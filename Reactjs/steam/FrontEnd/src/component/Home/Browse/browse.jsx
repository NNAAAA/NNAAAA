import { useEffect, useState } from 'react'

export default function Browse() {
  const [gameInfo, setGameInfo] = useState([]);

  useEffect(() => {
    var titles = document.querySelectorAll('.title');
    titles.forEach((title) => title.addEventListener('click', (e) => {
      titles.forEach(title => {
        title.classList.remove('active');
      })
      e.target.classList.add('active');
    }))
  })

  useEffect(() => {
    let Info = [
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
      {
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/capsule_184x69.jpg?t=1616783180`,
        sale: `20%`,
        price: `160.000`,
        image: [
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_9ca8e7e14fd65c8d8f2f2b8ec003f6557b8d70c4.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_64fb28b0ff854255515830960002e088bc6a8fca.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_fc952f1f88ddff413c72e126949ebacffd25564d.600x338.jpg`,
          `https://cdn.cloudflare.steamstatic.com/steam/apps/735290/ss_5b2b30a0db21b9cb27e08ee9a2ec9190693058ad.600x338.jpg`
        ],
      },
    ]
    setGameInfo(Info)
  }, [])

  const Info = gameInfo.map((info, index) =>
    <div className='item'>
      <img src={info.avatar} alt="" />
      <div className='info'>
        <p className='info__title'>{info.name}</p>
        <p className='info__category'>{info.category}</p>
      </div>
      <p className='sale-off'>-{info.sale}</p>
      <div className='price'>
        <p className='price--before'>{info.price}đ</p>
        <p className='price--after'>{info.price}đ</p>
      </div>
    </div>
  )

  const Image = gameInfo.map((info, index) =>
    <div className='item'>
      <div className='info'>
        <p className='item__title'>{info.name}</p>
        <p className='item__category'>{info.category}</p>
      </div>
      <div className='images'>
        {info.image.map((url, i) =>
          <img src={url} alt />
        )}
      </div>
    </div>
  )

  return (
    <section className='browse'>
      <div className='browse__titles'>
        <div className="title active">New and Trending</div>
        <div className="title">Top Sellers</div>
        <div className="title">Popular Upcoming</div>
        <div className="title">Specials</div>
      </div>
      <div className='browse__content'>
        <div className='browse__content--left' >
          <div className='title'>
            See more
            <a href="" className="see-more"></a>
          </div>
          <div className='items'>
            {Info}
          </div>
        </div>
        <div className='browse__content--right'>
          <div className='preview'>
            {Image}
          </div>
        </div>
      </div>
    </section>
  )
}