"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const handleSignin = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt="logo"
            width={32}
            height={32}
          />
          <h1>Vidio</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src={"/assets/icons/star.svg"}
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              {" "}
              Vidio makes screen recording easy. From quick walkthroughs to full
              presentations, it&apos;s fast, smooth, and shareable in seconds
            </p>
            <article>
              <Image
                src={"/assets/images/sahil.jpg"}
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="">
                <h2>Sahil Khan</h2>
                <p>Product Designer , Loom</p>
              </div>
            </article>
          </section>
        </div>
        <p>&copy; Vidio {new Date().getFullYear()}</p>
      </aside>

      <aside className="google-sign-in">
        <section>
          <Link href={"/"}>
            <Image
              src={"/assets/icons/logo.svg"}
              alt="logo"
              width={40}
              height={40}
            />
            <h1>Vidio</h1>
          </Link>
          <p>
            <span>Create</span> and <span>Share</span> your very first{" "}
            <span>vidio</span> in no time!
          </p>
          <button onClick={handleSignin}>
            <Image
              src={"/assets/icons/google.svg"}
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
};

export default page;
