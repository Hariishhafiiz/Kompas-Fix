import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Award, Calendar, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function TentangKompasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">🏕️ Tentang KOMPAS Sindoro</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Komunitas Pencinta Alam Sindoro - Pengelola jalur pendakian resmi via Bansari
          </p>
        </div>

        {/* Community Image */}
        <div className="text-center mb-12">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-green-800">Tim KOMPAS Sindoro</CardTitle>
              <CardDescription>Klik untuk lihat detail</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Foto komunitas KOMPAS Sindoro"
                width={800}
                height={400}
                className="rounded-lg shadow-lg w-full cursor-pointer hover:shadow-xl transition-shadow"
              />
            </CardContent>
          </Card>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Users className="h-6 w-6 text-green-600" />
                <CardTitle className="text-2xl text-green-800">📜 Tentang Kami</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                KOMPAS (Komunitas Pencinta Alam Sindoro) adalah organisasi resmi pengelola jalur pendakian via Bansari.
                Terbentuk dari para relawan dan pencinta alam yang berpengalaman, kami berfokus pada pelayanan pendaki,
                konservasi lingkungan, dan edukasi masyarakat.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border border-gray-200 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow bg-green-50 p-4 rounded-lg text-center">
                  <Calendar className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-green-800">Tahun Berdiri</div>
                  <div className="text-2xl font-bold text-green-600">2017</div>
                </div>
                <div className="border border-gray-200 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow bg-green-50 p-4 rounded-lg text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="font-semibold text-green-800">Relawan Aktif</div>
                  <div className="text-2xl font-bold text-green-600">25+</div>
                </div>
              </div>

              <div className="border border-gray-200 max-w-4xl mx-auto shadow-sm hover:shadow-md transition-shadow bg-green-50 p-4 rounded-lg text-center">
                <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-green-800">Pendaki Terlayani</div>
                <div className="text-2xl font-bold text-green-600">2.000+</div>
                <div className="text-sm text-gray-600">per tahun</div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Vision */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl text-green-800">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi komunitas pengelola jalur pendakian terbaik berbasis konservasi dan edukasi.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-xl text-green-800">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <Badge variant="outline" className="mt-1 text-xs">
                      1
                    </Badge>
                    <span>Menyediakan pelayanan dan informasi yang akurat kepada pendaki</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Badge variant="outline" className="mt-1 text-xs">
                      2
                    </Badge>
                    <span>Meningkatkan kesadaran konservasi</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Badge variant="outline" className="mt-1 text-xs">
                      3
                    </Badge>
                    <span>Membangun kolaborasi dengan pihak lokal dan nasional</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <Badge variant="outline" className="mt-1 text-xs">
                      4
                    </Badge>
                    <span>Menjaga keberlanjutan alam Gunung Sindoro</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Programs and Activities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Program & Kegiatan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Pelatihan Pemandu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Program pelatihan rutin untuk pemandu lokal agar dapat memberikan pelayanan terbaik
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Monitoring Jalur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Pemantauan rutin kondisi jalur dan fasilitas untuk memastikan keamanan pendaki
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Aksi Bersih Gunung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Kegiatan rutin membersihkan jalur pendakian dari sampah dan menjaga kebersihan alam
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Edukasi Lingkungan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Program edukasi untuk pendaki dan masyarakat tentang pentingnya konservasi alam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Gallery */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Tim Relawan Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Image
              src="/placeholder.svg?height=250&width=350"
              alt="Tim rescue KOMPAS"
              width={350}
              height={250}
              className="rounded-lg shadow-lg w-full"
            />
            <Image
              src="/placeholder.svg?height=250&width=350"
              alt="Tim konservasi lingkungan"
              width={350}
              height={250}
              className="rounded-lg shadow-lg w-full"
            />
            <Image
              src="/placeholder.svg?height=250&width=350"
              alt="Pelatihan pemandu lokal"
              width={350}
              height={250}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
