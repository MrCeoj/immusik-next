import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Paginador({
  currentPage,
  setCurrentPage,
  pageNumbers,
  handleItemsPags,
}: {
  currentPage: number;
  setCurrentPage: any;
  pageNumbers: number[];
  handleItemsPags: any;
}) {
  return (
    <div className="absolute bottom-8 flex justify-between w-[90%]">
      <ul className="flex items-center text-white" id="page-numbers">
        <li>
          <ChevronLeftIcon
            onClick={() => {
              if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
              }
            }}
            className={
              currentPage === 1
                ? "text-disabled text-opacity-40"
                : "text-white hover:cursor-pointer"
            }
            width={25}
            height={25}
          />
        </li>
        {pageNumbers.map((number) => {
          return (
            <li
              key={number}
              onClick={() => setCurrentPage(number)}
              className={
                currentPage === number
                  ? "bg-white text-back-dark px-2 py-1 rounded-sm hover:cursor-pointer"
                  : "px-2 py-1 rounded-sm hover:cursor-pointer"
              }
            >
              {number}
            </li>
          );
        })}

        <li>
          <ChevronRightIcon
            onClick={() => {
              if (currentPage < pageNumbers.length) {
                setCurrentPage(currentPage + 1);
              }
            }}
            className={
              currentPage >= pageNumbers.length
                ? "text-disabled text-opacity-40"
                : "text-white hover:cursor-pointer"
            }
            width={25}
            height={25}
          />
        </li>
      </ul>
      <span>
        Mostrar{" "}
        <select
          onChange={handleItemsPags}
          className="bg-disabled bg-opacity-10 border-white border-solid"
        >
          <option className="bg-back-dark">5</option>
          <option className="bg-back-dark">7</option>
          <option className="bg-back-dark">10</option>
        </select>{" "}
        elementos por página
      </span>
    </div>
  );
}
