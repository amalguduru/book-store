import { Link } from "react-router-dom";
import list from "../../public/list.json";
import Cards from "./Cards";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center items-center text-center">
          <h1 className="text-2xl md:text=4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            A cozy, independent bookstore offers a diverse selection of genres,
            from classic literature to modern bestsellers. The friendly staff
            provides personalized recommendations, creating a welcoming
            atmosphere for all book lovers. Frequent author events and reading
            clubs make it a community hub for literary enthusiasts.
          </p>
          <Link to={"/"}>
            <button className="bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 text-white mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
