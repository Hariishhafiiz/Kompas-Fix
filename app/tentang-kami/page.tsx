import { Card, CardContent } from "@/components/ui/card"
import { Users, Mountain, Shield, Leaf, Heart } from "lucide-react"
import Image from "next/image"

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/trail-map-bansari.png"
            alt="KOMPAS Sindoro trail map background"
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
              Tentang KOMPAS Sindoro
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Komunitas Pencinta Alam Sindoro - Berdedikasi untuk keselamatan pendaki dan kelestarian alam
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah KOMPAS */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Content */}
            <div>
              <Card className="border-0 shadow-sm bg-white p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah KOMPAS</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    KOMPAS (Komunitas Pencinta Alam Sindoro) didirikan pada tahun 2009 oleh sekelompok pencinta alam
                    yang memiliki kepedulian tinggi terhadap kelestarian pendaki dan kelestarian Gunung Sindoro.
                  </p>
                  <p>
                    Berawal dari keprihatinan terhadap banyaknya kecelakaan pendakian dan kerusakan lingkungan, para
                    pendiri KOMPAS berinisiatif untuk membentuk organisasi yang dapat mengelola jalur pendakian secara
                    profesional dan bertanggung jawab.
                  </p>
                  <p>
                    Seiring berjalannya waktu, KOMPAS berkembang menjadi organisasi resmi yang diakui oleh pemerintah
                    daerah dan menjadi rujukan utama bagi para pendaki yang ingin menaklukkan Gunung Sindoro dengan
                    aman.
                  </p>
                </div>
              </Card>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="h-80 rounded-lg overflow-hidden">
                <Image
                  src="/trail-map-bansari.png"
                  alt="KOMPAS Sindoro team and activities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
            <p className="text-gray-600">Komitmen kami dalam melayani pendaki dan menjaga kelestarian alam</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Visi */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mountain className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Visi</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi organisasi pengelola jalur pendakian terdepan yang mengutamakan keselamatan pendaki,
                  pelestarian alam, dan pengembangan ekowisata berkelanjutan di Gunung Sindoro.
                </p>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Misi</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Memberikan pelayanan terbaik untuk keselamatan pendaki</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Menjaga dan melestarikan ekosistem Gunung Sindoro</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Mengembangkan ekowisata yang berkelanjutan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Meningkatkan kesejahteraan tentang pentingnya konservasi alam</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pencapaian Kami */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pencapaian Kami</h2>
            <p className="text-gray-600">Dedikasi dan kerja keras selama bertahun-tahun</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <h3 className="font-semibold text-gray-800 mb-2">Tahun Pengalaman</h3>
                <p className="text-sm text-gray-600">Melayani pendaki sejak 2009</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <h3 className="font-semibold text-gray-800 mb-2">Pendaki Terlayani</h3>
                <p className="text-sm text-gray-600">Dengan tingkat keselamatan 99.9%</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <h3 className="font-semibold text-gray-800 mb-2">Operasi SAR</h3>
                <p className="text-sm text-gray-600">Berhasil menyelamatkan pendaki</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">25+</div>
                <h3 className="font-semibold text-gray-800 mb-2">Program Konservasi</h3>
                <p className="text-sm text-gray-600">Menjaga kelestarian Sindoro</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Kami */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600">Prinsip-prinsip yang menjadi landasan dalam setiap kegiatan kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Keselamatan</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Keselamatan pendaki adalah prioritas utama dalam setiap kegiatan dan keputusan yang kami ambil.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Konservasi</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Berkomitmen menjaga kelestarian alam Gunung Sindoro untuk generasi mendatang.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm bg-white hover:shadow-md transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Pelayanan</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Memberikan pelayanan terbaik dengan hati dan dedikasi tinggi kepada setiap pendaki.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
