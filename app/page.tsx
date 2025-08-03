"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mountain, MapPin, Clock, Users, Shield, Award, Phone, MessageCircle, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/trail-map-bansari.png" alt="Gunung Sindoro via Bansari" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/60 to-green-600/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-green-600 hover:bg-green-600 mb-6 text-sm px-4 py-2">Jalur Resmi Gunung Sindoro</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              KOMPAS
              <br />
              <span className="text-green-300">Bansari</span>
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-green-200">
              Gunung Sindoro via Bansari
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/jalur-pendakian">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Mountain className="h-5 w-5 mr-2" />
                  Lihat Jalur Pendakian
                </Button>
              </Link>
              <Link href="/kontak">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent px-8 py-3"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Peta rute jalur Bansari"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24+</div>
              <div className="text-gray-600">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-gray-600">Pendaki Terlayani</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Siaga Darurat</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-600 mb-4">Tentang Kami</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Komunitas Peduli Alam Sindoro</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                KOMPAS Bansari adalah komunitas peduli alam yang telah berpengalaman lebih dari 24 tahun dalam
                mengelola jalur pendakian Gunung Sindoro via Bansari. Kami berkomitmen untuk memberikan pelayanan
                terbaik dan menjaga kelestarian alam.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Keamanan Terjamin</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Guide Berpengalaman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Sertifikat Resmi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Clock className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Siaga 24 Jam</span>
                </div>
              </div>
              <Link href="/tentang-kami">
                <Button className="bg-green-600 hover:bg-green-700">
                  Selengkapnya
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/trail-map-bansari.png"
                alt="Tim KOMPAS Bansari"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trail Routes Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-600 mb-4">Jalur Pendakian</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Jalur Resmi Gunung Sindoro</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih jalur pendakian yang sesuai dengan kemampuan dan pengalaman Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Jalur Bansari */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image src="/trail-map-bansari.png" alt="Jalur Bansari" fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-green-600">Jalur Utama</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Jalur Bansari</h3>
                  <p className="text-gray-600 mb-4">
                    Jalur utama dengan fasilitas terlengkap dan akses termudah menuju puncak Gunung Sindoro
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">6.9 km</div>
                      <div className="text-xs text-gray-600">Jarak</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">6-8 jam</div>
                      <div className="text-xs text-gray-600">Durasi</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">6 Pos</div>
                      <div className="text-xs text-gray-600">Istirahat</div>
                    </div>
                  </div>
                  <Link href="/jalur-pendakian/detail">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Lihat Detail
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Peta Rute Jalur Bansari */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image src="/trail-map-bansari.png" alt="Peta Rute Jalur Bansari" fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600">Peta Rute</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Peta Rute Jalur Bansari</h3>
                  <p className="text-gray-600 mb-4">
                    Peta lengkap jalur pendakian dengan pos-pos istirahat dan landmark penting untuk navigasi
                  </p>
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">3.153 mdpl</div>
                      <div className="text-xs text-gray-600">Puncak Sindoro</div>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedImage("/trail-map-bansari.png")}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Lihat Peta
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-600 mb-4">Lokasi Basecamp</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">📍 Basecamp Bansari</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lokasi basecamp utama KOMPAS di Bansari, Temanggung untuk memulai pendakian
            </p>
          </div>

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
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Base Camp Sindoro via Bansari</h3>
                        <p className="text-gray-600 leading-relaxed">
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
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Siap untuk Petualangan?</h2>
          <p className="text-lg mb-8 opacity-90">
            Hubungi kami sekarang untuk konsultasi dan reservasi pendakian Gunung Sindoro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/6281228147612" target="_blank">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Sekarang
              </Button>
            </Link>
            <Link href="tel:+6281228147612">
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
