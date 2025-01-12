import * as image from "../../../public/image"
export default function Header() {
    return (
        <header className="bg-blue-800 text-white ">
        <section className="">
          <img src={image.banner_header} alt="" 
            className="h-1/5 w-full"
          />
        </section>
      </header>
    );
  }
  