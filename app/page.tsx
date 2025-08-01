"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Shield, Leaf, Clock, FileText, Phone, Calendar, Bus, Mountain, Expand, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/trail-map-bansari.png"
            alt="Gunung Sindoro via Bansari trail map"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-600/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Selamat Datang di Jalur Pendakian
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-200">
              Gunung Sindoro via Bansari
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Nikmati pengalaman mendaki yang aman dan berkesan bersama KOMPAS Bansari
            </p>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      {isMapModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setIsMapModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <div className="relative h-[80vh]">
              <Image
                src="/trail-map-bansari.png"
                alt="Peta rute jalur pendakian Bansari - Detail lengkap"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Feature Cards - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="text-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Jalur Resmi</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mengelola jalur Bansari, Kledung, dan Sigedang dengan standar keamanan tinggi
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Keamanan Terjamin</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tim SAR berpengalaman dan sistem evakuasi 24/7 untuk keselamatan pendaki
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Leaf className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Konservasi Alam</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Berkomitmen menjaga kelestarian Gunung Sindoro untuk generasi mendatang
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jalur Pendakian Section - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">Jalur Pendakian</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Pilih jalur pendakian yang sesuai dengan kemampuan dan pengalaman Anda
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Trail Card - Mobile First */}
            <div className="order-1 lg:order-1">
              <Card className="border border-gray-200 shadow-sm bg-white">
                <CardContent className="p-0">
                  {/* Trail Image */}
                  <div className="relative h-48 md:h-64 rounded-t-lg overflow-hidden">
                    <Image src="/trail-map-bansari.png" alt="Jalur Bansari trail view" fill className="object-cover" />
                    <Badge className="absolute top-3 right-3 md:top-4 md:right-4 bg-gray-600 text-white text-xs">
                      Semua Level
                    </Badge>
                  </div>

                  {/* Trail Info */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Jalur Bansari</h3>
                    <p className="text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                      Jalur utama dengan fasilitas lengkap dan 6 pos istirahat
                    </p>

                    {/* Trail Stats - Mobile Optimized */}
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">6-8 jam pendakian</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">6 pos istirahat</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mountain className="h-4 w-4 text-gray-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">3.153 mdpl</span>
                      </div>
                    </div>

                    {/* Detail Button */}
                    <Link href="/jalur-pendakian">
                      <Button className="w-full bg-black hover:bg-gray-800 text-white text-sm md:text-base py-2 md:py-3">
                        Detail Jalur
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section - Enhanced with Clickable Map */}
            <div className="order-2 lg:order-2">
              <div className="mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">Peta Rute Jalur Bansari</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Rute lengkap dari basecamp hingga puncak</p>
              </div>

              {/* Clickable Map Container */}
              <div className="relative group cursor-pointer" onClick={() => setIsMapModalOpen(true)}>
                {/* Map Image */}
                <div className="relative rounded-lg shadow-lg overflow-hidden h-64 md:h-80 lg:h-96">
                  <Image
                    src="/trail-map-bansari.png"
                    alt="Peta rute jalur pendakian Bansari"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <Expand className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                  </div>

                  {/* Map Info Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white bg-opacity-95 rounded-lg p-3 md:p-4 text-center shadow-md max-w-xs md:max-w-sm">
                      <MapPin className="h-6 w-6 md:h-8 md:w-8 text-gray-600 mx-auto mb-2" />
                      <p className="text-sm md:text-base font-semibold text-gray-800 mb-1">
                        Klik untuk Memperbesar Peta
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">6 Pos • 6.9 km • 3.153 mdpl</p>
                    </div>
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-white rounded-full p-2 shadow-md opacity-75 group-hover:opacity-100 transition-opacity">
                  <Expand className="h-4 w-4 text-gray-600" />
                </div>
              </div>

              {/* Map Description */}
              <div className="mt-4 text-center">
                <p className="text-xs md:text-sm text-gray-500">
                  Klik pada peta untuk melihat detail lengkap jalur pendakian
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About KOMPAS Section - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center">
            {/* Image - Show first on mobile */}
            <div className="relative order-1 lg:order-1">
              <div className="h-64 md:h-80 rounded-lg overflow-hidden">
                <Image src="/trail-map-bansari.png" alt="KOMPAS Sindoro team and trail" fill className="object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4 md:mb-6 text-center lg:text-left">
                Tentang KOMPAS Sindoro
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed text-center lg:text-left">
                KOMPAS (Komunitas Pencinta Alam Sindoro) adalah organisasi resmi yang mengelola jalur pendakian Sindoro.
                Terbentuk dari komunitas pencinta alam yang berpengalaman, kami berkomitmen untuk memberikan pelayanan
                terbaik bagi para pendaki sambil menjaga kelestarian alam.
              </p>

              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">15+</div>
                  <div className="text-xs md:text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">50+</div>
                  <div className="text-xs md:text-sm text-gray-600">Relawan Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">10K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Pendaki Terlayani</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">3</div>
                  <div className="text-xs md:text-sm text-gray-600">Jalur Resmi</div>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <Link href="/tentang-kami">
                  <Button className="bg-black hover:bg-gray-800 text-white px-6 md:px-8">Selengkapnya</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">Informasi Penting</h2>
            <p className="text-sm md:text-base text-gray-600 px-4">Hal-hal yang perlu Anda ketahui sebelum mendaki</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-black mb-2">Jam Operasional</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Senin - Minggu</p>
                <p className="text-xs md:text-sm font-semibold text-black">08.00 - 22.00 WIB</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <FileText className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-black mb-2">Surat Sehat</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Wajib membawa</p>
                <p className="text-xs md:text-sm font-semibold text-black">Surat keterangan sehat</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 md:pt-8 pb-4 md:pb-6 px-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-black mb-2">Kontak Darurat</h3>
                <p className="text-xs md:text-sm text-gray-600 mb-1">Deni A</p>
                <p className="text-xs md:text-sm font-semibold text-black">+62 817-7417-4995</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation Access - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">Akses menuju Basecamp</h2>
            <p className="text-sm md:text-base text-gray-600 px-4">
              Informasi transportasi dari dan untuk mencapai Basecamp Sindoro via Bansari
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bus className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-black">Dari Jakarta / Jawa Barat</h3>
                </div>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li>• Naik bus jurusan ke WONOSOBO</li>
                  <li>• Dari Terminal Mendolo, naik mobil angkot WONOSOBO-MAGELANG turun di PASAR LEGI PARAKAN</li>
                  <li>• Alternatif: Naik bus Jakarta-Jogja langsung turun di RSK NGESTI WALUYO PARAKAN</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bus className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-black">Dari Semarang dan Sekitarnya</h3>
                </div>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li>• Bisa turun di RSK NGESTI WALUYO PARAKAN atau di PASAR LEGI PARAKAN</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bus className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-black">Dari Jogja / Magelang</h3>
                </div>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li>• Bisa naik bus langsung ke PASAR LEGI PARAKAN atau RSK NGESTI WALUYO PARAKAN</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center space-x-3 mb-3 md:mb-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-black">Dari Parakan menuju Basecamp</h3>
                </div>
                <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                  <li>• Akses naik ojek/motor dari Pasar Legi Parakan atau RSK NGESTI WALUYO PARAKAN</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">📍 Lokasi Basecamp</h2>
            <p className="text-base text-gray-600">Basecamp utama KOMPAS di Bansari, Temanggung</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Map Embed */}
                <div className="relative h-96 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5!2d110.1234!3d-7.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnMDQuMSJTIDExMMKwMDcnMjQuMyJF!5e0!3m2!1sen!2sid!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-lg"
                  ></iframe>
                </div>

                {/* Location Details */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black mb-2">Base Camp Sindoro via Bansari</h3>
                          <p className="text-base text-gray-600 leading-relaxed">
                            KOMPLEK KANTOR, Malatan,
                            <br />
                            Bansari, Temanggung Regency,
                            <br />
                            Central Java 56265
                          </p>
                          <div className="flex items-center mt-3">
                            <div className="flex text-yellow-400">★★★★★</div>
                            <span className="text-gray-600 ml-2">4.5 • 347 reviews</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <Link href="https://maps.app.goo.gl/34ypf8rpsMBd9s8R7" target="_blank">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                          <MapPin className="h-5 w-5 mr-2" />
                          Get Directions
                        </Button>
                      </Link>
                      <Link href="https://maps.app.goo.gl/34ypf8rpsMBd9s8R7" target="_blank">
                        <Button
                          variant="outline"
                          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                          size="lg"
                        >
                          View Larger Map
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
