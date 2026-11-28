import { backgroundMusicSrc } from '@/assets/music'
import type { Music } from '@/types/wedding'

export const music: Music = {
  enabled: true,
  autoplay: false,
  loop: true,
  src: backgroundMusicSrc,
  title: 'Wedding Background',
  artist: undefined,
}
