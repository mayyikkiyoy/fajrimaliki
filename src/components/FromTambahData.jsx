import { tambahSepatu } from "@/app/admin/actions";

export default function FormTambahData() {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-8">
      <h2 className="text-xl font-bold text-black mb-4">
        Tambah Data Sepatu
      </h2>

      <form action={tambahSepatu} className="space-y-4">
        <div>
          <label className="block font-semibold text-black mb-2">
            Nama Sepatu
          </label>

          <input
            type="text"
            name="nama_sepatu"
            placeholder="Masukkan nama sepatu"
            required
            className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-black"
          />
        </div>

        <div>
          <label className="block font-semibold text-black mb-2">
            Jenis Sepatu
          </label>

          <input
            type="text"
            name="jenis_sepatu"
            placeholder="Masukkan jenis sepatu"
            required
            className="w-full px-4 py-3 border border-gray-400 rounded-lg bg-white text-black"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Tambah Data
        </button>
      </form>
    </div>
  );
}