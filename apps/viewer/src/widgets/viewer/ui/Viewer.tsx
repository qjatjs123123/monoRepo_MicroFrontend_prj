import { useGetViewerUrl } from "@/features/submitViewerForm/model/useGetViewerUrl";
import { Empty } from "./common/Empty";
import { Loading } from "./common/Loading";
import { Error } from "./common/Error";
import { Success } from "./common/Success";

export function Viewer() {
  return (
    <div
      className="w-full h-[800px] border border-[var(--color-line-400)]
        rounded-xl flex justify-center mb-[30px] overflow-hidden"
    >
      <Wrapper />
    </div>
  );
}

function Wrapper() {
  const { data, isError, isFetching  } = useGetViewerUrl();

  const state = (() => {
    if (isFetching ) return "loading";
    if (isError) return "error";
    if (data) return "success";
    return "empty";
  })();

  switch (state) {
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
    case "success":
      return <Success src={data?.data!} />;
    default:
      return <Empty />;
  }
}
