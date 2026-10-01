import { prisma } from "@/lib/prisma";
import { editSepatu } from "../../actions";

export default async function EditSepatuPage({ params }) {
  const { no_urut } = await params;

  const sepatu = await prisma.pm_sepatu.findUnique({
    where: {
      no_urut: Number(no_urut),
    },
  });

  if (!sepatu) {
    return (
      <main className="min-h-screen bg-gray-100 p-8 text-black">
        <h1 className="text-2xl font-bold">
          Data sepatu tidak ditemukan
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Edit Sepatu
        </h1>

        <form action={editSepatu} className="space-y-5">
          <input
            type="hidden"
            name="no_urut"
            value={sepatu.no_urut}
          />

          <div>
            <label className="block font-semibold mb-2">
              Nama Sepatu
            </label>

            <input
              type="text"
              name="nama_sepatu"
              defaultValue={sepatu.nama_sepatu}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-black"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Jenis Sepatu
            </label>

            <input
              type="text"
              name="jenis_sepatu"
              defaultValue={sepatu.jenis_sepatu}
              required
              className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-black"
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Simpan
            </button>

            <a
              href="/admin"
              className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
            >
              Batal
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}