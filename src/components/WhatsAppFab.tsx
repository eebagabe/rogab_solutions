import { WHATSAPP_URL } from '../lib/site'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/40 transition hover:scale-110 sm:right-7 sm:bottom-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-60 motion-safe:animate-ping motion-safe:[animation-duration:2.5s]" />
      <WhatsAppIcon className="relative size-7" />
    </a>
  )
}
