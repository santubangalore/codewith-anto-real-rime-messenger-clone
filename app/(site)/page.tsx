import Image from "next/image";
import AuthForm from "../components/AuthForm";

export default function Home() {
    return (
      <div className="flex  flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 h-screen" >
        <span className="mt-0 text-center text-3xl w-auto justify-center mb-20">Instant Messanger</span>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
          <Image src="/images/logo.png" height="40" width="40" alt="logo" className="mx-auto w-auto" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            <AuthForm />
          </h2>
        </div>
        

        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center sticky top-[99vh]">
            <p className="text-sm text-blue-600">&copy; Copyright: 2023 <b>Santu Ghosh</b>, Bangalore, India</p>
        </footer>
      </div>
    );
  }
  