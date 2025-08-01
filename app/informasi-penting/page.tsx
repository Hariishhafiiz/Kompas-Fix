import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bus, MapPin, Clock, Phone, Mail, Instagram, AlertTriangle, Users, Calendar } from "lucide-react"

const transportRoutes = [
  {
    from: "Jakarta/Jawa Barat",
    route: "Bus → Terminal Mendolo Wonosobo → Bus Mikro (Wonosobo – Magelang) → Turun di Pasar Legi Parakan",
    alternative: "Bus Jakarta – Jogja → Turun di RSK Ngesti Waluyo Parakan",
  },
  {
    from: "Semarang dan sekitarnya",
    route: "Turun di RSK Ngesti Waluyo Parakan atau Pasar Legi Parakan",
    alternative: null,
  },
  {
    from: "Jogja/Magelang",
    route: "Langsung ke Pasar Legi Parakan atau RSK Ngesti Waluyo Parakan",
    alternative: null,
  },
]

export default function InformasiPentingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">🚐 Informasi Penting</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Panduan lengkap transportasi dan informasi penting untuk pendakian Gunung Sindoro via Bansari
          </p>
        </div>

        {/* Transportation Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Transportasi ke Basecamp Sindoro via Bansari</h2>

          <div className="space-y-6 mb-8">
            {transportRoutes.map((route, index) => (
              <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Bus className="h-6 w-6 text-green-600" />
                    <CardTitle className="text-green-800">🚌 Dari {route.from}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-gray-700 font-medium">Rute Utama:</p>
                    <p className="text-gray-600 text-sm mt-1">{route.route}</p>
                  </div>
                  {route.alternative && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-700 font-medium">Alternatif:</p>
                      <p className="text-blue-600 text-sm mt-1">{route.alternative}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Ojek Information */}
          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-green-600" />
                <CardTitle className="text-green-800">🛵 Dari Parakan ke Basecamp</CardTitle>
              </div>
              <CardDescription>Naik ojek dari Pasar Legi Parakan atau RSK Ngesti Waluyo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">Jadwal Pagi</span>
                  </div>
                  <p className="text-yellow-700">06.00 – 21.00 WIB</p>
                  <Badge className="mt-2 bg-yellow-600">Rp 30.000</Badge>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Jadwal Malam</span>
                  </div>
                  <p className="text-blue-700">21.00 – 06.00 WIB</p>
                  <Badge className="mt-2 bg-blue-600">Rp 35.000</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hiking Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">📋 Informasi Pendakian</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-800">Jam Operasional</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-semibold text-green-800">Basecamp</p>
                  <p className="text-green-700">Senin – Minggu</p>
                  <p className="text-green-700">08.00 – 22.00 WIB</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-orange-800">Syarat Pendakian</span>
                  </div>
                  <p className="text-orange-700 text-sm">Surat sehat wajib dibawa</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-800">Kuota & Kapasitas</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="font-semibold text-blue-800">Kuota Harian</p>
                  <p className="text-2xl font-bold text-blue-600">[Kuota]</p>
                  <p className="text-blue-700 text-sm">pendaki per hari</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm text-center">
                    Reservasi direkomendasikan untuk memastikan slot pendakian
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-8">📞 Kontak Darurat</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-mono text-lg">[Nomor Telepon]</p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700" size="sm">
                  Hubungi Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-mono">[Email Address]</p>
                <Button
                  variant="outline"
                  className="mt-4 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  size="sm"
                >
                  Kirim Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 text-center shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Instagram className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Instagram</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-mono">@kompassindoro</p>
                <Button
                  variant="outline"
                  className="mt-4 border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  size="sm"
                >
                  Follow IG
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Tips */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            <h3 className="text-xl font-bold text-red-800">Tips Keamanan & Darurat</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2 text-red-700">
              <li>• Selalu bawa surat keterangan sehat</li>
              <li>• Informasikan rencana pendakian ke keluarga</li>
              <li>• Bawa obat-obatan pribadi yang diperlukan</li>
              <li>• Gunakan peralatan pendakian yang layak</li>
            </ul>
            <ul className="space-y-2 text-red-700">
              <li>• Ikuti arahan pemandu dan petugas</li>
              <li>• Jangan mendaki sendirian</li>
              <li>• Perhatikan kondisi cuaca</li>
              <li>• Simpan nomor kontak darurat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
