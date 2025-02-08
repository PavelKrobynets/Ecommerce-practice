export default function Filter() {
  return (
    <section className="flex flex-row flex-wrap items-center justify-between gap-4 pt-6 h-20 fixed-w px-5">
      <div className="flex flex-row gap-2 lg:gap-8">
        <select
          name="type"
          id=""
          className="custom-select
					"
        >
          <option value="all">All</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="minimum price"
          className="bg-gray-100 placeholder-gray-500  rounded-lg p-1 pl-2 w-24 md:w-32 outline-none font-semibold"
        />
        <input
          type="text"
          name="max"
          placeholder="maximum price"
          className="bg-gray-100 placeholder-gray-500 rounded-lg p-1 pl-2 w-24 md:w-32 outline-none font-semibold"
        />
        <select name="type" id="" className="custom-select">
          <option value="all">All</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select name="type" id="" className="custom-select">
          <option value="all">All</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select name="type" id="" className="custom-select">
          <option value="all">All</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <select name="type" id="" className="custom-select w-[6rem]">
        <option value="all">All</option>
        <option value="physical">Physical</option>
        <option value="digital">Digital</option>
      </select>
    </section>
  );
}
