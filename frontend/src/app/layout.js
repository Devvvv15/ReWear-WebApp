import './globals.css'

export const metadata = {
  title: 'ReWear',
  description: 'Clothing Exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen text-white font-sans">
        {children}
      </body>
    </html>
  )
}
