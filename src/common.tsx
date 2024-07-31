import { twc } from 'react-twc'

export const PrimaryHeading = twc.h1`text-4xl font-bold uppercase sm:text-6xl`
export const SecondaryHeading = twc.h2`text-2xl font-bold uppercase sm:text-4xl`

export const Hyperlink = twc.a`underline decoration-dotted hover:decoration-solid`

export const ToolBadge = twc.span`inline-flex select-none items-center gap-0.5 rounded border-2 border-black bg-black px-1.5 py-0.5 lowercase text-white transition-colors hover:bg-transparent hover:text-black`
