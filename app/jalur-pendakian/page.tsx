import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Users, Mountain, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function JalurPendakianPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/trail-map-bansari.png"
            alt="Jalur Bansari Gunung Sindoro trail map"
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
              Jalur Bansari Gunung Sindoro
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Jalur utama yang dikelola KOMPAS Bansari dengan 6 pos istirahat dan fasilitas terlengkap
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Combined Trail Card */}
            <Card className="border border-gray-200 shadow-sm bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                  {/* Image/Map */}
                  <div className="relative order-1 lg:order-1">
                    <div className="h-64 md:h-96 lg:h-full min-h-[400px] relative">
                      <Image
                        src="/trail-map-bansari.png"
                        alt="Jalur Bansari detailed trail map"
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white px-2 py-1 md:px-3 md:py-1 rounded text-xs md:text-sm font-medium text-gray-700">
                        Semua Level
                      </div>
                    </div>
                  </div>

                  {/* Trail Information */}
                  <div className="p-4 md:p-8 order-2 lg:order-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">Jalur Bansari</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
                      Jalur utama Gunung Sindoro dengan fasilitas lengkap dan 6 pos istirahat. Cocok untuk semua level
                      pendaki dari pemula hingga berpengalaman.
                    </p>

                    {/* Statistics Grid - All Green */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-lg md:text-xl font-bold text-black">6-8 jam</div>
                          <div className="text-xs md:text-sm text-gray-600">Durasi</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-lg md:text-xl font-bold text-black">7.3 km</div>
                          <div className="text-xs md:text-sm text-gray-600">Jarak</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-lg md:text-xl font-bold text-black">8 Pos</div>
                          <div className="text-xs md:text-sm text-gray-600">Istirahat</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mountain className="h-4 w-4 md:h-5 md:w-5 text-green-600" />
                        </div>
                        <div>
                          <div className="text-lg md:text-xl font-bold text-black">3,153 mdpl</div>
                          <div className="text-xs md:text-sm text-gray-600">Ketinggian</div>
                        </div>
                      </div>
                    </div>

                    {/* Trail Advantages - Mobile Optimized */}
                    <div className="mb-6 md:mb-8">
                      <h3 className="text-base md:text-lg font-semibold text-black mb-3 md:mb-4">Keunggulan Jalur:</h3>
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">Jalur paling aman dan terawat</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">
                            8 pos istirahat dengan fasilitas lengkap
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">Sumber air tersedia di beberapa pos</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">Pemandangan sunrise terbaik</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">Akses transportasi mudah</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-gray-700">
                            Dikelola langsung oleh KOMPAS Bansari
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center">
                      <Link href="/jalur-pendakian/detail">
                        <Button className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base">
                          Detail Lengkap
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
