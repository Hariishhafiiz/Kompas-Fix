import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Shield, Users, Award } from "lucide-react"
import Image from "next/image"

export default function JalurResmiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">🌳 Jalur Resmi & Konservasi Alam</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Komitmen kami terhadap pengelolaan jalur pendakian yang bertanggung jawab dan pelestarian alam
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Jalur Resmi */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-6 w-6 text-green-600" />
                <CardTitle className="text-2xl text-green-800">Jalur Resmi</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jalur Bansari merupakan jalur pendakian resmi yang dikelola langsung oleh Komunitas Pencinta Alam
                Sindoro (KOMPAS). Jalur ini menawarkan keindahan panorama dan pengalaman mendaki yang aman serta
                terstruktur.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Keunggulan Jalur Bansari:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Jalur yang terawat dan aman</li>
                  <li>Pos-pos pendakian yang terstruktur</li>
                  <li>Pemandu lokal berpengalaman</li>
                  <li>Sistem kuota untuk menjaga kelestarian</li>
                  <li>Fasilitas darurat tersedia</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Konservasi Alam */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <CardTitle className="text-2xl text-green-800">Konservasi Alam</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                KOMPAS berkomitmen untuk menjaga kelestarian ekosistem Gunung Sindoro dengan prinsip Leave No Trace dan
                pengelolaan berbasis komunitas. Setiap pendaki diharapkan turut serta menjaga keindahan alam ini untuk
                generasi mendatang.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Prinsip Leave No Trace:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Rencanakan dan persiapkan dengan baik</li>
                  <li>Berjalan dan berkemah di tempat yang tepat</li>
                  <li>Buang sampah dengan benar</li>
                  <li>Tinggalkan apa yang kamu temukan</li>
                  <li>Minimalkan dampak api unggun</li>
                  <li>Hormati satwa liar</li>
                  <li>Pertimbangkan pengunjung lain</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Program Konservasi */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Program Konservasi Kami</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Edukasi Pendaki</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Program edukasi untuk meningkatkan kesadaran pendaki tentang pentingnya menjaga kelestarian alam
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Restorasi Habitat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Kegiatan penanaman kembali dan pemulihan habitat yang rusak akibat aktivitas pendakian
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Sertifikasi Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Program sertifikasi untuk pendaki yang berkomitmen pada praktik pendakian ramah lingkungan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Keindahan yang Harus Dijaga</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Ekosistem hutan gunung yang terjaga"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Kegiatan konservasi oleh relawan"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
