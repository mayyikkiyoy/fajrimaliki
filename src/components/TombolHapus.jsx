"use client";

import { hapusSepatu } from "@/app/admin/actions";

export default function TombolHapus({ no_urut }) {
  function konfirmasi(e) {
    const yakin = confirm(
      "Apakah kamu yakin ingin menghapus data sepatu ini?"
    );

    if (!yakin) {
      e.preventDefault();
    }
  }

  return (
    <form action={hapusSepatu} onSubmit={konfirmasi}>
      <input
        type="hidden"
        name="no_urut"
        value={no_urut}
      />

      <button
        type="submit"
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Hapus
      </button>
    </form>
  );
}