import Image from 'next/image';
import BaseLayout from '../components/baseLayout';
export default function ERROR() {
  return (
    <BaseLayout>
      <div>
        <div className="min-h-screen w-full bg-c-blue text-white">
          <div className="absolute hidden h-[693px] bg-hero-ornament bg-cover bg-center sm:-left-64 sm:block sm:w-[800px] md:-left-96 md:top-24 xl:w-[985px]"></div>
          <div className="absolute top-24 h-3/4 w-full bg-hero-ornament bg-cover bg-center sm:hidden"></div>
          <div className="container relative mx-auto grid h-screen place-content-center">
            <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-24 xl:gap-44">
              <div className="flex flex-col gap-4 xl:gap-14">
                <h1 className="font-belleza text-3xl sm:text-5xl xl:text-8xl">
                  OOOPS...
                </h1>
                <p className="text-lg font-semibold text-c-white xl:text-3xl">
                  Looks like this page doesn’t exist. but don’t let that stop
                  you
                </p>
                <a
                  href="/"
                  className="w-fit rounded-lg border-2 border-c-white bg-c-blue px-3 py-2 font-semibold xl:px-8 xl:py-5 xl:text-2xl"
                >
                  GO BACK
                </a>
              </div>
              <div className="h-full w-2/3 md:w-1/2">
                <Image
                  src="/images/page404/image404.png"
                  alt="404"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
