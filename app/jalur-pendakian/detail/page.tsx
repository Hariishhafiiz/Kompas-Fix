import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Mountain, Droplets, AlertTriangle, Camera, Tent, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const trailSegments = [
  {
    id: "basecamp",
    name: "Basecamp",
    elevation: "1.200 mdpl",
    timeFromPrevious: "0 menit",
    distanceFromBasecamp: "0 km",
    walkingTime: "2 jam (jalan kaki) / bisa naik ojek",
    elevationGain: "1.200 mdpl",
    description:
      "Titik awal pendakian dengan fasilitas lengkap untuk persiapan. Bisa naik ojek dari basecamp ke Pos 1.",
    facilities: ["Parkir", "Toilet", "Warung", "Pos Registrasi", "Mushola", "Ojek"],
    tips: "Pastikan registrasi dan cek peralatan di sini. Biaya ojek: Rp 30.000 (06.00-21.00) / Rp 35.000 (21.00-06.00).",
    campingCapacity: null,
    waterSource: false,
    photoSpot: false,
  },
  {
    id: "pos1",
    name: "Pos 1",
    elevation: "1.576 mdpl",
    timeFromPrevious: "60-90 menit",
    distanceFromBasecamp: "3.41 km",
    walkingTime: "60-90 menit ke pos berikutnya",
    elevationGain: "376 mdpl",
    description: "Melewati permukiman dan kebun tembakau. Area transisi dari pemukiman menuju hutan.",
    facilities: ["Area Istirahat"],
    tips: "Pos pertama setelah melewati area permukiman. Pastikan stamina masih terjaga untuk perjalanan selanjutnya.",
    campingCapacity: null,
    waterSource: false,
    photoSpot: false,
  },
  {
    id: "pos2",
    name: "Pos 2",
    elevation: "1.886 mdpl",
    timeFromPrevious: "60-90 menit",
    distanceFromBasecamp: "4.31 km",
    walkingTime: "45-60 menit ke pos berikutnya",
    elevationGain: "310 mdpl",
    description: "Perkebunan kopi dengan jalan tanah. Pemandangan kebun kopi yang indah.",
    facilities: ["Area Istirahat", "Tempat Berteduh"],
    tips: "Nikmati pemandangan perkebunan kopi. Jalan mulai menanjak dengan medan tanah.",
    campingCapacity: "2-3 tenda",
    waterSource: false,
    photoSpot: true,
  },
  {
    id: "pos3",
    name: "Pos 3",
    elevation: "2.171 mdpl",
    timeFromPrevious: "45-60 menit",
    distanceFromBasecamp: "4.93 km",
    walkingTime: "30-45 menit ke pos berikutnya",
    elevationGain: "285 mdpl",
    description: "Hutan alkasiah & cemara. Ada sungai saat musim hujan. Area hutan yang rimbun.",
    facilities: ["Area Istirahat", "Tempat Berteduh"],
    tips: "Sumber air tersedia saat musim hujan. Area yang bagus untuk istirahat panjang.",
    campingCapacity: "5-10 tenda",
    waterSource: true,
    photoSpot: true,
  },
  {
    id: "pos4",
    name: "Pos 4",
    elevation: "2.315 mdpl",
    timeFromPrevious: "30-45 menit",
    distanceFromBasecamp: "5.27 km",
    walkingTime: "30 menit ke shelter ojek",
    elevationGain: "144 mdpl",
    description: "Hutan rapat dengan trek menanjak. Vegetasi hutan yang lebat dan jalur yang menantang.",
    facilities: ["Area Istirahat"],
    tips: "Trek mulai menanjak tajam. Persiapkan stamina untuk pendakian yang lebih berat.",
    campingCapacity: "1-2 tenda",
    waterSource: false,
    photoSpot: false,
  },
  {
    id: "shelter-ojek",
    name: "Shelter Ojek",
    elevation: "2.400 mdpl",
    timeFromPrevious: "30 menit",
    distanceFromBasecamp: "5.61 km",
    walkingTime: "90-120 menit ke pos berikutnya",
    elevationGain: "85 mdpl",
    description: "Trek tanah dengan vegetasi khas Sindoro. Shelter terakhir sebelum memasuki area terbuka.",
    facilities: ["Shelter", "Area Istirahat"],
    tips: "Shelter terakhir sebelum area terbuka. Persiapkan diri untuk medan yang lebih terbuka.",
    campingCapacity: "2 tenda",
    waterSource: false,
    photoSpot: false,
  },
  {
    id: "pos5",
    name: "Pos 5",
    elevation: "2.715 mdpl",
    timeFromPrevious: "90-120 menit",
    distanceFromBasecamp: "6.37 km",
    walkingTime: "90-120 menit ke pos berikutnya",
    elevationGain: "315 mdpl",
    description: "Batas vegetasi dengan panorama 7 gunung. Pemandangan spektakuler mulai terlihat.",
    facilities: ["Area Istirahat", "Spot Foto"],
    tips: "Spot foto terbaik untuk panorama 7 gunung. Area sunrise/sunset yang menakjubkan.",
    campingCapacity: "5-10 tenda",
    waterSource: false,
    photoSpot: true,
  },
  {
    id: "pos6",
    name: "Pos 6",
    elevation: "3.050 mdpl",
    timeFromPrevious: "90-120 menit",
    distanceFromBasecamp: "7.10 km",
    walkingTime: "10-15 menit ke puncak",
    elevationGain: "335 mdpl",
    description: "Trek curam dengan savana terbuka. Area terbuka dengan pemandangan luas sebelum puncak.",
    facilities: ["Area Istirahat"],
    tips: "Trek terakhir sebelum puncak. Tidak bisa camping di area ini. Persiapkan untuk final assault.",
    campingCapacity: "Tidak bisa camp",
    waterSource: false,
    photoSpot: true,
  },
  {
    id: "puncak",
    name: "Puncak Sindoro",
    elevation: "3.153 mdpl",
    timeFromPrevious: "10-15 menit",
    distanceFromBasecamp: "7.30 km",
    walkingTime: "Puncak tercapai!",
    elevationGain: "103 mdpl",
    description: "Batuan terjal dengan bunga edelweis. Puncak Gunung Sindoro dengan pemandangan 360 derajat.",
    facilities: ["Spot Foto", "Area Istirahat"],
    tips: "Puncak Gunung Sindoro! Nikmati pemandangan 360 derajat dan bunga edelweis yang indah.",
    campingCapacity: null,
    waterSource: false,
    photoSpot: true,
  },
]

export default function DetailLengkapPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-64 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/trail-map-bansari.png"
            alt="Detail jalur Bansari Gunung Sindoro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-600/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <Badge className="bg-green-600 hover:bg-green-600 mb-4">Jalur Utama</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Jalur Bansari</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Jalur utama Gunung Sindoro dengan 6 pos istirahat dan fasilitas terlengkap
            </p>
          </div>
        </div>
      </section>

      {/* Trail Statistics - No Borders */}
      <section className="py-8 md:py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-green-50 p-3 md:p-6 rounded-lg">
              <div className="text-xl md:text-3xl font-bold text-green-600 mb-1 md:mb-2">7.3 km</div>
              <div className="text-xs md:text-base text-gray-600">Total Jarak</div>
            </div>
            <div className="text-center bg-blue-50 p-3 md:p-6 rounded-lg">
              <div className="text-xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">6-8 jam</div>
              <div className="text-xs md:text-base text-gray-600">Durasi</div>
            </div>
            <div className="text-center bg-purple-50 p-3 md:p-6 rounded-lg">
              <div className="text-xl md:text-3xl font-bold text-purple-600 mb-1 md:mb-2">8 Pos</div>
              <div className="text-xs md:text-base text-gray-600">Istirahat</div>
            </div>
            <div className="text-center bg-orange-50 p-3 md:p-6 rounded-lg">
              <div className="text-xl md:text-3xl font-bold text-orange-600 mb-1 md:mb-2">3.153 mdpl</div>
              <div className="text-xs md:text-base text-gray-600">Ketinggian</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trail Segments - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 md:mb-4">Pos-pos Pendakian</h2>
            <p className="text-sm md:text-base text-gray-600 px-4">
              Perjalanan dari basecamp hingga puncak melalui pos-pos istirahat dengan fasilitas lengkap
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {trailSegments.map((segment, index) => (
              <Card
                key={segment.id}
                className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0">
                    {/* Image/Map Placeholder - Mobile First */}
                    <div className="relative h-48 md:h-64 lg:h-80 order-1 lg:order-1">
                      <Image
                        src="/trail-map-bansari.png"
                        alt={`${segment.name} - Jalur Bansari`}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        className={`absolute top-3 left-3 md:top-4 md:left-4 text-xs ${
                          segment.id === "basecamp"
                            ? "bg-green-600"
                            : segment.id === "puncak"
                              ? "bg-red-600"
                              : "bg-blue-600"
                        }`}
                      >
                        {segment.name}
                      </Badge>
                    </div>

                    {/* Content - Mobile Optimized */}
                    <div className="p-4 md:p-6 lg:p-8 order-2 lg:order-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-3 md:mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-2 sm:mb-0">{segment.name}</h3>
                        <Badge variant="outline" className="text-green-600 border-green-600 text-xs w-fit">
                          {segment.elevation}
                        </Badge>
                      </div>

                      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">
                        {segment.description}
                      </p>

                      {/* Trail Info Grid - Mobile Responsive */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3 md:h-4 md:w-4 text-gray-500 flex-shrink-0" />
                          <div>
                            <div className="text-xs md:text-sm font-semibold text-black">
                              {segment.timeFromPrevious}
                            </div>
                            <div className="text-xs text-gray-600">dari pos sebelumnya</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4 text-gray-500 flex-shrink-0" />
                          <div>
                            <div className="text-xs md:text-sm font-semibold text-black">
                              {segment.distanceFromBasecamp}
                            </div>
                            <div className="text-xs text-gray-600">dari basecamp</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3 md:h-4 md:w-4 text-blue-500 flex-shrink-0" />
                          <div>
                            <div className="text-xs md:text-sm font-semibold text-black">{segment.walkingTime}</div>
                            <div className="text-xs text-gray-600">ke pos berikutnya</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Mountain className="h-3 w-3 md:h-4 md:w-4 text-purple-500 flex-shrink-0" />
                          <div>
                            <div className="text-xs md:text-sm font-semibold text-black">{segment.elevationGain}</div>
                            <div className="text-xs text-gray-600">ketinggian</div>
                          </div>
                        </div>
                      </div>

                      {/* Facilities - Mobile Optimized */}
                      <div className="mb-4 md:mb-6">
                        <h4 className="text-sm md:text-base font-semibold text-black mb-2 md:mb-3">Fasilitas:</h4>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {segment.facilities.map((facility) => (
                            <Badge key={facility} variant="secondary" className="text-xs">
                              {facility}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Additional Info - Mobile Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                        {segment.campingCapacity && (
                          <div className="flex items-center space-x-2">
                            <Tent className="h-3 w-3 md:h-4 md:w-4 text-green-600 flex-shrink-0" />
                            <div>
                              <div className="text-xs text-gray-600">Camping</div>
                              <div className="text-xs md:text-sm font-semibold text-black">
                                {segment.campingCapacity}
                              </div>
                            </div>
                          </div>
                        )}

                        {segment.waterSource && (
                          <div className="flex items-center space-x-2">
                            <Droplets className="h-3 w-3 md:h-4 md:w-4 text-blue-600 flex-shrink-0" />
                            <div>
                              <div className="text-xs text-gray-600">Air</div>
                              <div className="text-xs md:text-sm font-semibold text-black">Tersedia</div>
                            </div>
                          </div>
                        )}

                        {segment.photoSpot && (
                          <div className="flex items-center space-x-2">
                            <Camera className="h-3 w-3 md:h-4 md:w-4 text-purple-600 flex-shrink-0" />
                            <div>
                              <div className="text-xs text-gray-600">Foto</div>
                              <div className="text-xs md:text-sm font-semibold text-black">Spot Bagus</div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tips - Mobile Optimized */}
                      {segment.tips && (
                        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 md:p-4">
                          <div className="flex items-start space-x-2">
                            <AlertTriangle className="h-3 w-3 md:h-4 md:w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="text-xs md:text-sm font-semibold text-yellow-800 mb-1">Tips:</div>
                              <div className="text-xs md:text-sm text-yellow-700 leading-relaxed">{segment.tips}</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Siap Menaklukkan Jalur Bansari?</h2>
          <p className="text-lg mb-8 opacity-90">Jalur utama dengan fasilitas terlengkap menanti petualangan Anda</p>
          <div className="flex justify-center">
            <Link href="/kontak">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
