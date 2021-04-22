import { useEffect, useState } from 'react'

export default function Browse() {
  const [gameInfo, setGameInfo] = useState([]);
  const [activeItem,setActiveItem] = useState(0);
  const [activeCategory,setActiveCategory] = useState(0);

  useEffect(() => {
    var titles = document.querySelectorAll('.title');
    titles.forEach((title,index) => title.addEventListener('click', (e) => {
      setActiveCategory(index);
    }))   
  })

  useEffect(() => {
    let Info = [
      [{
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
      }],
      [{
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/1048660/capsule_184x69.jpg?t=1618461847`,
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
      }],
      [{
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/632300/capsule_184x69.jpg?t=1618288170`,
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
      }],
      [{
        name: 'Genesis Noir',
        category: 'Noir Exploration Story Rich Point&Click',
        avatar: `https://cdn.cloudflare.steamstatic.com/steam/apps/1082430/capsule_184x69.jpg?t=1617992940`,
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
      }],
    ]
    setGameInfo(Info)
  },[])

  const Info = gameInfo[activeCategory]?.map((info, index) =>
    <div 
      className={`item ${index===activeItem ? 'active' : ''}`} 
      onMouseOver={()=>setActiveItem(index)}
    >
      <div
        className='image'
        style={{         
          backgroundImage:`url('${info.avatar}')`,
          backgroundPosition: `center center`,
          backgroundSize:`${index===activeItem ? 'cover' : 'cover'}`,
          backgroundRepeat:`no-repeat`,
          transition:`0.5s ease-in-out`
        }}
      />   

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

  const Detail = gameInfo[activeCategory]?.map((info, index) =>
    <div className={`item ${index===activeItem ? 'active' : ''}`}>
      <div className='info'>
        <p className='info__title'>{info.name}</p>
        <p className='info__category'>{info.category}</p>
      </div>
      <div className='images'>
        {info.image.map(url =>
          <img src={url} alt />
        )}
      </div>
    </div>
  )
  return (
    <section className='browse'>
      <div className='browse__titles'>
        <div className={`title ${activeCategory===0 ? 'active' : ''}`}>New and Trending</div>
        <div className={`title ${activeCategory===1 ? 'active' : ''}`}>Top Sellers</div>
        <div className={`title ${activeCategory===2 ? 'active' : ''}`}>Popular Upcoming</div>
        <div className={`title ${activeCategory===3 ? 'active' : ''}`}>Specials</div>
      </div>
      <div className='browse__content'>
        <div className='browse__content--left' >
          <div className='title'>
            See more:
            <a href="" className="see-more">abc</a>
          </div>
          <div className='items'>
            {Info}
          </div>
        </div>
        <div className='browse__content--right'>
          <div className='preview'>
            {Detail}
          </div>
        </div>
      </div>
    </section>
  )
}