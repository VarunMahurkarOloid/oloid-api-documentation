import React from "react";

const Welcome = () => {
  return (
    <>
      <section>
        <div class="grid lg:gap-12 pb-8 lg:py-16 lg:grid-cols-12 gap-10">
          <div class="mr-auto lg:col-span-8 col-span-full mt-10 lg:mt-0">
            <h1 class="mb-10 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Access Oloid API Anytime, Anywhere —{" "}
              <span class="bg-primary text-primary-foreground py-1.5 px-2.5 rounded-3xl inline-block -rotate-1">
                99.99% Uptime
              </span>
            </h1>
            <div class="prose dark:prose-invert prose-neutral typography max-w-full">
              <p>
                <a href="/" data-discover="true">
                  Sign up for an OLOID account
                </a>{" "}
                and gain access to our powerful identity and access management
                platform. Seamlessly manage authentication, automate workflows,
                and integrate with your existing HR, IT, and physical access
                systems—all through one secure, unified interface.{" "}
                <a href="/introduction" data-discover="true">
                  Read our documentation
                </a>{" "}
                to get started.
              </p>
              <p>
                Whether you're managing a single facility or a global workforce,
                OLOID gives you the tools to simplify security and streamline
                operations. From passwordless authentication and contactless
                time tracking to automated onboarding and compliance workflows,
                we help you modernize workforce access—without replacing legacy
                infrastructure.
              </p>
              <p>
                Join the growing number of enterprises that trust OLOID to
                secure their frontline operations. Our platform supports
                everything from small teams to large, distributed
                workforces—delivering efficiency, security, and compliance at
                scale.
              </p>
            </div>
            <div class="flex gap-4 items-center mt-6">
              <a
                href="https://www.oloid.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="not-prose inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground h-14 rounded-lg px-10 text-lg"
              >
                Explore Oloid
              </a>
              <span class="font-semibold">or</span>
              <a
                class="not-prose inline-flex shrink-0 items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-14 rounded-lg px-10 text-lg"
                href="/introduction"
                data-discover="true"
              >
                Get started
              </a>
            </div>
          </div>
          <img
            class="max-w-[330px] w-full hidden lg:mt-0 lg:col-span-4 lg:flex rounded-3xl drop-shadow-lg dark:drop-shadow-none"
            alt="Oloid"
            src="/oloid.png"
          />
        </div>
      </section>
    </>
  );
};

export default Welcome;
