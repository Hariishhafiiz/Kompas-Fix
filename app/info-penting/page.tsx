import { Card, CardContent } from "@/components/ui/card"
import { Clock, FileText, Car, Bike, Sun, Moon } from "lucide-react"
import Image from "next/image"

export default function InfoPentingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/trail-map-bansari.png"
            alt="Informasi penting pendakian Gunung Sindoro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/40 to-green-600/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">Informasi Penting</h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
              Panduan lengkap dan informasi penting untuk pendakian Gunung Sindoro via Bansari
            </p>
            <div className="bg-green-700 bg-opacity-50 rounded-lg p-4 max-w-md mx-auto mt-6">
              <p className="text-sm">🧭 Lokasi Registrasi</p>
              <p className="font-semibold">Komplek Kantor Desa Bansari, Kecamatan Bansari</p>
              <p className="font-semibold">Kabupaten Temanggung, Kode Pos 56265</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Hours */}
      <section className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="py-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Jam Operasional</h2>
              <div className="text-3xl font-bold text-blue-600 mb-2">08:00 - 22:00 WIB</div>
              <p className="text-gray-600">Senin - Minggu</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FileText className="h-6 w-6 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-800">PERSYARATAN</h2>
            </div>
          </div>

          {/* Identity Requirements */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
              1. Identitas Diri / Perwakilan Rombongan
            </h3>
            <p className="text-center text-gray-600 mb-6">(salah satu harus ada)</p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="text-center border-0 shadow-sm">
                <CardContent className="py-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">KTP</h4>
                  <p className="text-sm text-gray-600">Kartu Tanda Penduduk yang masih berlaku</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-sm">
                <CardContent className="py-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Kartu Pelajar</h4>
                  <p className="text-sm text-gray-600">Kartu pelajar/mahasiswa yang masih aktif</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-sm">
                <CardContent className="py-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">KTA</h4>
                  <p className="text-sm text-gray-600">Kartu Tanda Anggota organisasi</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hiking Types Requirements */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
              2. Peralatan Wajib Berdasarkan Jenis Pendakian
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* CAMP Requirements */}
              <Card className="border-0 shadow-sm">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <h4 className="font-bold text-lg">🏕️ Pendakian CAMP</h4>
                  <p className="text-sm opacity-90">Bermalam di Gunung</p>
                </div>
                <CardContent className="p-6">
                  <h5 className="font-semibold text-gray-800 mb-4">📋 Wajib Membawa Peralatan:</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Sleeping bag</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Senter / head lamp</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Jas hujan / ponco</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Logistik yang cukup selama pendakian</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Peralatan pendakian lengkap sesuai kebutuhan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Baju ganti</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Obat-obatan pribadi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Surat dokter (bagi yang mempunyai riwayat sakit)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* TEKTOK Requirements */}
              <Card className="border-0 shadow-sm">
                <div className="bg-orange-600 text-white p-4 rounded-t-lg">
                  <h4 className="font-bold text-lg">🌅 Pendakian TEKTOK</h4>
                  <p className="text-sm opacity-90">Naik Turun Hari Sama</p>
                </div>
                <CardContent className="p-6">
                  <h5 className="font-semibold text-gray-800 mb-4">📋 Wajib Membawa:</h5>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Nasi bungkus dan logistik yang cukup</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Air mineral yang cukup</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Senter / head lamp</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Jas hujan / ponco</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Obat-obatan pribadi</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Peralatan pendakian dll.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Fees */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📝 REGISTRASI</h2>
            <p className="text-gray-600">Rincian biaya pendakian dan fasilitas</p>
          </div>

          <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-800">Daftar Biaya</th>
                      <th className="text-right p-4 font-semibold text-gray-800">Harga</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="p-4 text-gray-700">Tiket & Fasilitas Basecamp</td>
                      <td className="p-4 text-right font-semibold text-green-600">Rp 35.000</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Parkir Motor</td>
                      <td className="p-4 text-right font-semibold text-green-600">Rp 10.000</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Parkir Mobil</td>
                      <td className="p-4 text-right font-semibold text-green-600">Rp 20.000</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Ojek Pagi (06.00 - 09.00)</td>
                      <td className="p-4 text-right font-semibold text-green-600">Rp 30.000</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-700">Ojek Malam (21.00 - 06.00)</td>
                      <td className="p-4 text-right font-semibold text-green-600">Rp 35.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Registration Hours */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">⏰ JAM REGISTRASI</h2>
            <p className="text-gray-600">Waktu registrasi berdasarkan jenis pendakian</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Moon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">CAMP</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">08:00 - 22:00 WIB</div>
                <p className="text-sm text-gray-600">Pendakian bermalam di gunung</p>
              </CardContent>
            </Card>

            <Card className="text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">TEKTOK</h3>
                <div className="text-2xl font-bold text-orange-600 mb-2">20:00 - 00:00 WIB</div>
                <p className="text-sm text-gray-600">Naik turun hari sama</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pilihan Transportasi</h2>
            <p className="text-gray-600">Berbagai pilihan transportasi ke basecamp</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bike className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Parkir Motor</h4>
                <div className="text-xl font-bold text-green-600 mb-1">Rp 10.000</div>
                <p className="text-xs text-gray-600">Per hari</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Parkir Mobil</h4>
                <div className="text-xl font-bold text-blue-600 mb-1">Rp 20.000</div>
                <p className="text-xs text-gray-600">Per hari</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Ojek Pagi</h4>
                <div className="text-xl font-bold text-orange-600 mb-1">Rp 30.000</div>
                <p className="text-xs text-gray-600">Ke basecamp</p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="py-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Moon className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Ojek Malam</h4>
                <div className="text-xl font-bold text-purple-600 mb-1">Rp 35.000</div>
                <p className="text-xs text-gray-600">Ke basecamp</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
