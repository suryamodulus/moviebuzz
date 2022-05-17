import BaseLayout from "layouts/Base";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link to={"/"}>
          <button
            type="button"
            className="text-white bg-accent font-medium text-sm px-5 py-3 w-full"
          >
            Go Home
          </button>
        </Link>
      </main>
    </BaseLayout>
  );
};

export default NotFoundPage;
