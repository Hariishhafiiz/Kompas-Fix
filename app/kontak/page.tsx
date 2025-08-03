"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Instagram, Mail, Globe, Clock, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/trail-map-bansari.png" alt="Kontak KOMPAS Bansari" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-600/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">Hubungi Kami</h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Siap membantu perjalanan pendakian Anda ke Gunung Sindoro
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Phone & WhatsApp */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">📞 Telepon & WhatsApp</h2>
              <div className="space-y-6">
                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Ivan</h3>
                        <p className="text-gray-600 text-sm">Koordinator Utama</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="tel:+6281228147612" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          +62 812-2814-7612
                        </Button>
                      </Link>
                      <Link href="https://wa.me/6281228147612" target="_blank" className="flex-1">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Deni A</h3>
                        <p className="text-gray-600 text-sm">Koordinator Utama</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="tel:+6281774174995" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          +62 817-7417-4995
                        </Button>
                      </Link>
                      <Link href="https://wa.me/6281774174995" target="_blank" className="flex-1">
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">Sugeng</h3>
                        <p className="text-gray-600 text-sm">Koordinator Lapangan</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="tel:+6285752323195" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          +62 857-5232-3195
                        </Button>
                      </Link>
                      <Link href="https://wa.me/6285752323195" target="_blank" className="flex-1">
                        <Button className="w-full bg-green-600 hover:bg-blue-700">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-sm bg-red-50 border-red-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="font-semibold text-red-800">24/7 untuk Emergency</p>
                        <p className="text-red-600 text-sm">Siaga darurat sepanjang waktu</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8">📍 Lokasi Basecamp</h2>
              <Card className="border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="p-6 border-b">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Lokasi Basecamp</h3>
                    <p className="text-gray-600">Basecamp utama KOMPAS di Bansari, Temanggung</p>
                  </div>

                  {/* Map Embed */}
                  <div className="relative h-80 bg-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d110.20444875000002!3d-7.566774749999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a859c9b90f52d%3A0x44b5994094c0b91f!2sBase%20Camp%20Sindoro%20Via%20Bansari!5e0!3m2!1sid!4v1701844414294!5m2!1sid!4v1701844414294"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-b-lg"
                    ></iframe>
                  </div>

                  {/* Location Details */}
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-1">Base Camp Sindoro via Bansari</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          KOMPLEK KANTOR, Malatan,
                          <br />
                          Bansari, Temanggung Regency,
                          <br />
                          Central Java 56265
                        </p>
                        <div className="flex items-center mt-2">
                          <div className="flex text-yellow-400 text-sm">★★★★★</div>
                          <span className="text-gray-600 text-sm ml-2">4.5 • 347 reviews</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link href="https://maps.app.goo.gl/PXGodVXmxHsy7tpPA" target="_blank" className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <MapPin className="h-4 w-4 mr-2" />
                          Directions
                        </Button>
                      </Link>
                      <Link href="https://maps.app.goo.gl/PXGodVXmxHsy7tpPA" target="_blank" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                        >
                          View larger map
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📱 Media Sosial</h2>
            <p className="text-gray-600">Ikuti kami untuk update terbaru</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Instagram Main */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Instagram</h3>
                <p className="text-gray-600 text-sm mb-4">@kompas_bansari</p>
                <Link href="https://www.instagram.com/kompas_bansari/" target="_blank">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow Instagram
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Instagram Alt */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Instagram Alt</h3>
                <p className="text-gray-600 text-sm mb-4">@sindoroviabansari</p>
                <Link href="https://www.instagram.com/sindoroviabansari/" target="_blank">
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600">
                    <Instagram className="h-4 w-4 mr-2" />
                    Follow Instagram
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white font-bold text-lg">TT</div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">TikTok</h3>
                <p className="text-gray-600 text-sm mb-4">@kompas.bansari.id</p>
                <Link href="https://www.tiktok.com/@kompas.bansari.id" target="_blank">
                  <Button className="w-full bg-black hover:bg-gray-800">
                    <div className="w-4 h-4 mr-2 bg-white rounded text-black text-xs flex items-center justify-center font-bold">
                      T
                    </div>
                    Follow TikTok
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Email & Blog */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">📧 Email & Blog</h2>
            <p className="text-gray-600">Kompas Bansari Official - Info & Artikel Pendakian</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Blog Resmi</h3>
                <p className="text-gray-600 mb-6">
                  Artikel, tips, dan informasi lengkap seputar pendakian Gunung Sindoro
                </p>
                <Link href="https://anakkompas.blogspot.com" target="_blank">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Globe className="h-4 w-4 mr-2" />
                    Kunjungi Blog
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-3">anakkompas.blogspot.com</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border border-gray-200 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email Resmi</h3>
                <p className="text-gray-600 mb-6">Hubungi kami melalui email untuk informasi detail dan kerjasama</p>
                <Link href="mailto:info@kompasbansari.com">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Kirim Email
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-3">info@kompasbansari.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Siap untuk Mendaki?</h2>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami sekarang untuk konsultasi dan reservasi pendakian Gunung Sindoro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6281774174995" target="_blank">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Sekarang
              </Button>
            </Link>
            <Link href="tel:+6281774174995">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                <Phone className="h-5 w-5 mr-2" />
                Telepon Langsung
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
