import { prisma } from "@/lib/prisma";
import { tambahSepatu } from "./actions";
import TombolHapus from "@/components/TombolHapus";

export default async function AdminPage() {
  const sepatu = await prisma.pm_sepatu.findMany({
    orderBy: {
      no_urut: "asc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-black mb-6">
          Admin Sepatu
        </h1>

        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-4">
            Tambah Sepatu
          </h2>

          <form action={tambahSepatu} className="flex gap-4">
            <input
              type="text"
              name="nama_sepatu"
              placeholder="Nama Sepatu"
              required
              className="flex-1 px-4 py-3 border border-gray-400 rounded-lg bg-white text-black placeholder-gray-500"
            />

            <input
              type="text"
              name="jenis_sepatu"
              placeholder="Jenis Sepatu"
              required
              className="flex-1 px-4 py-3 border border-gray-400 rounded-lg bg-white text-black placeholder-gray-500"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Tambah
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold text-black">
              Data Sepatu
            </h2>
          </div>

          <table className="w-full text-black">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left font-bold">
                  No
                </th>

                <th className="px-6 py-3 text-left font-bold">
                  Nama Sepatu
                </th>

                <th className="px-6 py-3 text-left font-bold">
                  Jenis Sepatu
                </th>

                <th className="px-6 py-3 text-left font-bold">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {sepatu.map((item) => (
                <tr
                  key={item.no_urut}
                  className="border-t border-gray-300"
                >
                  <td className="px-6 py-4">
                    {item.no_urut}
                  </td>

                  <td className="px-6 py-4">
                    {item.nama_sepatu}
                  </td>

                  <td className="px-6 py-4">
                    {item.jenis_sepatu}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <a
                        href={`/admin/edit/${item.no_urut}`}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                      >
                        Edit
                      </a>

                      <TombolHapus
                        no_urut={item.no_urut}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}