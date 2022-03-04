import { useRouter } from "next/router";

function PaginationButtons({ page }: { page: number }) {
  const router = useRouter();
  console.log(router.query);

  const prevButton = () => {
    console.log("Prev");
    console.log(page);
    router.replace(`/?page=${page - 1}`);
  };

  const nextButton = () => {
    console.log("Next");
    console.log(page);
    router.replace(`/?page=${page + 1}`);
  };

  return (
    <div className="flex justify-center">
      <button
        className="p-5 m-2 border-2 bg-slate-600"
        onClick={prevButton}
        disabled={page <= 1}
      >
        Prev
      </button>
      <button className="p-5 m-2 border-2 bg-slate-600" onClick={nextButton}>
        Next
      </button>
    </div>
  );
}

export default PaginationButtons;
