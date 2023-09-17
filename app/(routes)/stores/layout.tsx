

import Footer from '@/components/footer'
import type { Metadata } from 'next'




export const metadata: Metadata = {
    title: 'Stores on checkout',
    description: 'Shop with stores',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>

    )
}
