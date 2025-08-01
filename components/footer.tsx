import { Mountain, Instagram, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6" />
              <span className="font-bold text-xl">Kompas Bansari</span>
            </div>
            <p className="text-green-100 mb-4">
              Komunitas Pencinta Alam Sindoro - Pengelola jalur pendakian resmi Gunung Sindoro via Bansari
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/kompas_bansari"
                target="_blank"
                className="text-green-100 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-green-100 hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="text-green-100 hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/jalur-pendakian" className="text-green-100 hover:text-white transition-colors">
                  Jalur Pendakian
                </Link>
              </li>
              <li>
                <Link href="/info-penting" className="text-green-100 hover:text-white transition-colors">
                  Info Penting
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-green-100 hover:text-white transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <div className="space-y-3">
              <Link
                href="https://wa.me/6281774174995"
                target="_blank"
                className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp: +62 817-7417-4995</span>
              </Link>
              <Link
                href="mailto:info@kompasbansari.com"
                className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@kompasbansari.com</span>
              </Link>
              <Link
                href="https://instagram.com/kompas_bansari"
                target="_blank"
                className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>@kompas_bansari</span>
              </Link>
              <Link
                href="https://tiktok.com/@kompas.bansari.id"
                target="_blank"
                className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors"
              >
                <div className="w-4 h-4 bg-white rounded text-black text-xs flex items-center justify-center font-bold">
                  T
                </div>
                <span>@kompas.bansari.id</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © {new Date().getFullYear()} Kompas Bansari - Komunitas Pencinta Alam Sindoro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
